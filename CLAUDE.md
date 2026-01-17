# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Architecture

This is a Turborepo monorepo with pnpm workspaces containing:
- **Frontend:** Astro static site with React integration (`apps/web`)
- **Backend:** Strapi v5 headless CMS (`apps/strapi`)
- **Shared packages:** React components, utilities, and configuration packages

### Key Architectural Points

**Workspace Dependencies:**
- `apps/web` depends on `@repo/ui` and `@repo/utils` workspace packages
- All apps share TypeScript, ESLint, and Vitest configurations from `packages/*-config`
- Turborepo pipeline ensures packages build before apps that depend on them

**Shared Package Structure:**
- `@repo/utils` is organized into submodules: `validation/`, `formatting/`, `api/`, `types/`
- Each submodule has its own `index.ts` that's re-exported from the package root
- When adding utilities, follow this pattern: create/modify files in the submodule, export from submodule's index, main index re-exports

**Strapi Configuration:**
- Uses SQLite for development (`.tmp/data.db`)
- Production-ready Postgres configuration available in `.env.example`
- Configuration files in `apps/strapi/config/`: `database.ts`, `server.ts`, `api.ts`, `admin.ts`, `middlewares.ts`, `plugins.ts`
- Content types defined in `apps/strapi/src/api/`

**Astro Integration:**
- Static site generation (SSG) mode configured
- React components can be used via `@astrojs/react` integration
- Shared UI components from `@repo/ui` can be imported and used in `.astro` files with `client:*` directives

## Common Commands

### Development
```bash
# Start all apps in dev mode (Astro on :4321, Strapi on :1337)
pnpm dev

# Start individual apps
pnpm dev --filter=web      # Astro frontend only
pnpm dev --filter=strapi   # Strapi CMS only

# For Strapi admin panel setup
cd apps/strapi && pnpm develop
```

### Building
```bash
# Build all packages and apps (packages build first due to dependencies)
pnpm build

# Build specific app
pnpm build --filter=web
pnpm build --filter=strapi
```

### Testing
```bash
# Run all tests across workspace
pnpm test

# Run tests in specific package
pnpm test --filter=@repo/utils
pnpm test --filter=@repo/ui

# Run tests in watch mode (within package directory)
cd packages/utils
pnpm test -- --watch
```

### Linting & Type Checking
```bash
# Lint entire workspace
pnpm lint

# Type check all packages
pnpm type-check

# Format all code with Prettier
pnpm format
```

### Strapi-Specific
```bash
# Generate Strapi secrets for .env
cd apps/strapi
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Strapi upgrade commands
cd apps/strapi
pnpm upgrade:dry    # Check for available updates
pnpm upgrade        # Apply updates
```

## Environment Setup

### First Time Setup
1. Install dependencies: `pnpm install`
2. Copy environment files:
   - `cp apps/web/.env.example apps/web/.env.local`
   - `cp apps/strapi/.env.example apps/strapi/.env`
3. Generate Strapi secrets (APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET, TRANSFER_TOKEN_SALT, JWT_SECRET)
4. Start Strapi: `cd apps/strapi && pnpm develop`
5. Create admin user at `http://localhost:1337/admin`
6. Generate API token in Strapi: Settings > API Tokens
7. Add token to `apps/web/.env.local` as `STRAPI_API_TOKEN`

### Environment Variables
- `apps/web/.env.local`: Strapi API URL and token for frontend
- `apps/strapi/.env`: Database config, JWT secrets, API salts

## Tech Stack Requirements

- Node.js >= 18
- pnpm >= 8 (specified in `packageManager` field)
- Strapi v5.33.3 (major version, check for breaking changes if upgrading)
- Astro v4 with React 18
- TypeScript 5
- Vitest for testing with React Testing Library

## Turborepo Caching

- Build outputs cached: `dist/**`, `.astro/**`, `build/**`, `coverage/**`
- Dev servers run in persistent mode (no caching)
- Global dependencies tracked: `**/.env.*local`
- Pipeline ensures packages build before dependent apps
