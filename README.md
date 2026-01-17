# hyfy-agency

A Turborepo monorepo containing an Astro frontend and Strapi CMS with shared TypeScript packages.

## What's Inside?

### Apps

- `web` - Astro frontend with React integration
- `strapi` - Strapi v4 headless CMS

### Packages

- `@repo/ui` - Shared React components
- `@repo/utils` - TypeScript utilities (validation, formatting, API clients, types)
- `@repo/eslint-config` - Shared ESLint configurations
- `@repo/typescript-config` - Shared TypeScript configurations
- `@repo/vitest-config` - Shared Vitest configurations

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Installation

```bash
pnpm install
```

### Development

Start all apps in development mode:

```bash
pnpm dev
```

Or start individual apps:

```bash
pnpm dev --filter=web      # Astro only
pnpm dev --filter=strapi   # Strapi only
```

### Building

Build all apps and packages:

```bash
pnpm build
```

### Other Commands

```bash
pnpm lint        # Lint all packages
pnpm test        # Run all tests
pnpm type-check  # Type check all packages
pnpm format      # Format code with Prettier
```

## First Time Setup

### Strapi Admin

1. Start Strapi: `cd apps/strapi && pnpm develop`
2. Open http://localhost:1337/admin
3. Create your admin user
4. Create API token in Settings > API Tokens
5. Add token to `apps/web/.env.local`

### Environment Variables

Copy the example files:

```bash
cp apps/web/.env.example apps/web/.env.local
cp apps/strapi/.env.example apps/strapi/.env
```

Generate Strapi secrets:

```bash
cd apps/strapi
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

Add the generated keys to `apps/strapi/.env`.

## Project Structure

```
hyfy-agency/
├── apps/
│   ├── web/                 # Astro frontend
│   └── strapi/              # Strapi CMS
├── packages/
│   ├── ui/                  # React components
│   ├── utils/               # TypeScript utilities
│   ├── eslint-config/       # ESLint configs
│   ├── typescript-config/   # TypeScript configs
│   └── vitest-config/       # Vitest configs
└── docs/
    └── plans/               # Design documents
```

## Tech Stack

- **Build System:** Turborepo
- **Package Manager:** pnpm
- **Frontend:** Astro, React 18
- **CMS:** Strapi v4
- **Language:** TypeScript
- **Linting:** ESLint, Prettier
- **Testing:** Vitest, React Testing Library

## Documentation

See `docs/plans/` for detailed design documents and implementation plans.
