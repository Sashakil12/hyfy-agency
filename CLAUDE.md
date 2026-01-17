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

## DESIGN SPECS

# 🛸 Project Codex: "Nexus-Glass" DLS

**Core Theme:** Neo-Futuristic / Bio-Digital / Glassmorphism
**Visual Goal:** A premium, high-contrast interface that balances human-centric AI with industrial-grade data visualization.

---

## 1. Color Architecture (The "After Dark" Palette)

The palette is built on high-contrast "Inky" blacks and "Radioactive" accents to simulate a self-illuminated display.

| Element              | Color Name     | Hex Code  | Usage                                         |
| -------------------- | -------------- | --------- | --------------------------------------------- |
| **Primary Base**     | Deep Obsidian  | `#050505` | Page background.                              |
| **Secondary Base**   | Charcoal Tint  | `#0F1210` | Section backgrounds / Container base.         |
| **Primary Accent**   | Electric Lime  | `#88FF66` | Critical data, active states, progress fills. |
| **Warm Accent**      | Internal Amber | `#F2994A` | Secondary lights, "Processing" states.        |
| **Text (Primary)**   | Pure White     | `#FFFFFF` | Headings and high-emphasis labels.            |
| **Text (Secondary)** | Slate Grey     | `#828282` | Metadata, body text, disabled states.         |

---

## 2. Materiality & Effects (The "Glass" Specs)

The interface relies on depth and transparency rather than solid colors.

- **Surface (Standard Glass):** \* **Fill:** `rgba(255, 255, 255, 0.03)`
- **Backdrop Blur:** `16px` to `24px`.
- **Stroke:** 1px Solid Gradient (Top-Left: `#FFFFFF33` to Bottom-Right: `#FFFFFF05`).

- **The "Glow" Logic:** \* Any element using **Electric Lime** should have a soft `box-shadow` or `drop-shadow`.
- _Spec:_ `0px 0px 15px rgba(136, 255, 102, 0.4)`.

---

## 3. Typography & Hierarchy

- **Hero Display (H1/H2):** * **Font:** *Monument Extended* or *Inter Tight (Extra Bold)\*.
- **Style:** Uppercase, wide letter spacing (+2% to +5%).
- **The "Watermark" Layer:** Oversized headers behind the main imagery should be set to 5% - 8% opacity.

- **Data & UI Labels:** * **Font:** *Plus Jakarta Sans* or *Satoshi\*.
- **Style:** Medium weight for numbers; Regular for descriptors.

---

## 4. 3D Art & Assets

The hero asset is the "soul" of the design.

- **Style:** **"Translucent Bio-Digital."**
- **Visual Requirements:**
- **Refraction:** Use "Glass" materials on the 3D model to allow background light to pass through.
- **Lighting:** Strong "Rim Lighting" in **Electric Lime** to define the silhouette.
- **Integration:** The model should overlap the background text but sit behind the primary UI cards to create a 3-layer parallax stack.

---

## 5. Motion & Animation Principles

- **The "Parallax Stack":**

1. **Back Layer (Text):** Moves at 20% scroll speed.
2. **Mid Layer (3D Asset):** Moves at 50% scroll speed.
3. **Front Layer (UI Cards):** Moves at 100% scroll speed.

- **Entrance Choreography:**
- Cards should use a **"Staggered Fade + Slide"**.
- _Easing:_ `cubic-bezier(0.22, 1, 0.36, 1)` (The "Power-Up" snap).

- **Micro-Interactions:**
- **Hover:** A 45-degree "Light Sweep" gradient should pass across the glass containers.
- **Idle:** Progress bars and accent glows should have a slow, 3-second "Breathing" pulse (opacity fluctuation between 70% and 100%).

---

## 6. Layout Strategy (The HUD Framework)

- **Navigation:** Floating centered pill or minimal top-bar.
- **Grid:** 12-column grid, but components should feel "de-coupled" from the grid lines to simulate a floating HUD.
- **Widgets:** Use "Bento Box" inspired tiles for metrics, but with the Glassmorphism specs applied.

---

### 💡 Designer Tip:

> "Treat the screen like a physical glass display. Use 'Z-index' to create a sense of vast space. The user should feel like they are looking _into_ a machine, not just at a flat website."

**Would you like me to create a specific "Vibe Check" mood board description for the 3D artist to follow?**
