# Turborepo Monorepo Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Set up a complete Turborepo monorepo with Astro frontend, Strapi CMS, and shared TypeScript packages.

**Architecture:** Turborepo-managed monorepo with pnpm workspaces, shared tooling configs, and internal packages for code reuse.

**Tech Stack:** Turborepo, pnpm, Astro, Strapi v4, React, TypeScript, ESLint, Prettier, Vitest, Vite

---

## Task 1: Root Monorepo Foundation

**Files:**

- Create: `package.json`
- Create: `pnpm-workspace.yaml`
- Create: `.gitignore`
- Create: `.prettierrc`
- Create: `.prettierignore`

**Step 1: Create root package.json**

Create: `package.json`

```json
{
  "name": "hyfy-agency",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "type-check": "turbo run type-check",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md,mdx,css,html,yml,yaml}\""
  },
  "devDependencies": {
    "prettier": "^3.2.4",
    "turbo": "^1.11.3"
  },
  "packageManager": "pnpm@8.15.0",
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  }
}
```

**Step 2: Create pnpm workspace config**

Create: `pnpm-workspace.yaml`

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

**Step 3: Create .gitignore**

Create: `.gitignore`

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
dist/
build/
.astro/
.strapi/

# Environment variables
.env
.env*.local
.env.production

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# OS
.DS_Store
Thumbs.db

# IDEs
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea/
*.swp
*.swo
*~

# Turbo
.turbo/

# Strapi
.cache/
.tmp/

# SQLite
*.db
*.db-shm
*.db-wal
```

**Step 4: Create Prettier config**

Create: `.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always"
}
```

**Step 5: Create Prettier ignore**

Create: `.prettierignore`

```
node_modules/
dist/
build/
.astro/
.turbo/
.strapi/
*.db
pnpm-lock.yaml
```

**Step 6: Create directories**

Run: `mkdir -p apps packages`

Expected: Directories created successfully

**Step 7: Install root dependencies**

Run: `pnpm install`

Expected: Dependencies installed, lockfile created

**Step 8: Commit**

```bash
git add .
git commit -m "chore: initialize root monorepo structure

- Add root package.json with Turborepo
- Configure pnpm workspaces
- Add .gitignore and Prettier configs"
```

---

## Task 2: TypeScript Config Package

**Files:**

- Create: `packages/typescript-config/package.json`
- Create: `packages/typescript-config/base.json`
- Create: `packages/typescript-config/react.json`
- Create: `packages/typescript-config/node.json`
- Create: `packages/typescript-config/README.md`

**Step 1: Create directory**

Run: `mkdir -p packages/typescript-config`

Expected: Directory created

**Step 2: Create package.json**

Create: `packages/typescript-config/package.json`

```json
{
  "name": "@repo/typescript-config",
  "version": "0.0.0",
  "private": true,
  "main": "index.js",
  "files": ["base.json", "react.json", "node.json"]
}
```

**Step 3: Create base TypeScript config**

Create: `packages/typescript-config/base.json`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022"],
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "incremental": true
  },
  "exclude": ["node_modules", "dist", "build"]
}
```

**Step 4: Create React TypeScript config**

Create: `packages/typescript-config/react.json`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "types": ["vite/client"]
  }
}
```

**Step 5: Create Node.js TypeScript config**

Create: `packages/typescript-config/node.json`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "node",
    "types": ["node"]
  }
}
```

**Step 6: Create README**

Create: `packages/typescript-config/README.md`

````markdown
# @repo/typescript-config

Shared TypeScript configurations for the monorepo.

## Usage

In your `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/react.json"
}
```
````

## Available Configs

- `base.json` - Common settings for all projects
- `react.json` - For React applications (Astro, UI package)
- `node.json` - For Node.js applications (Strapi)

````

**Step 7: Commit**

```bash
git add packages/typescript-config/
git commit -m "feat: add TypeScript config package

- Add base, react, and node configs
- Enable strict mode and modern module resolution"
````

---

## Task 3: ESLint Config Package

**Files:**

- Create: `packages/eslint-config/package.json`
- Create: `packages/eslint-config/base.js`
- Create: `packages/eslint-config/react.js`
- Create: `packages/eslint-config/node.js`
- Create: `packages/eslint-config/README.md`

**Step 1: Create directory**

Run: `mkdir -p packages/eslint-config`

Expected: Directory created

**Step 2: Create package.json**

Create: `packages/eslint-config/package.json`

```json
{
  "name": "@repo/eslint-config",
  "version": "0.0.0",
  "private": true,
  "main": "base.js",
  "files": ["base.js", "react.js", "node.js"],
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^6.19.0",
    "@typescript-eslint/parser": "^6.19.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1"
  },
  "peerDependencies": {
    "eslint": "^8.56.0",
    "typescript": "^5.3.0"
  }
}
```

**Step 3: Create base ESLint config**

Create: `packages/eslint-config/base.js`

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
}
```

**Step 4: Create React ESLint config**

Create: `packages/eslint-config/react.js`

```javascript
module.exports = {
  extends: [
    './base.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  env: {
    browser: true,
  },
}
```

**Step 5: Create Node.js ESLint config**

Create: `packages/eslint-config/node.js`

```javascript
module.exports = {
  extends: ['./base.js'],
  env: {
    node: true,
  },
}
```

**Step 6: Create README**

Create: `packages/eslint-config/README.md`

````markdown
# @repo/eslint-config

Shared ESLint configurations for the monorepo.

## Usage

In your `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@repo/eslint-config/react'],
}
```
````

## Available Configs

- `base.js` - Core ESLint rules for TypeScript
- `react.js` - React-specific rules (hooks, a11y)
- `node.js` - Node.js-specific rules

````

**Step 7: Commit**

```bash
git add packages/eslint-config/
git commit -m "feat: add ESLint config package

- Add base, react, and node configs
- Configure import sorting and TypeScript rules"
````

---

## Task 4: Vitest Config Package

**Files:**

- Create: `packages/vitest-config/package.json`
- Create: `packages/vitest-config/base.ts`
- Create: `packages/vitest-config/react.ts`
- Create: `packages/vitest-config/README.md`

**Step 1: Create directory**

Run: `mkdir -p packages/vitest-config`

Expected: Directory created

**Step 2: Create package.json**

Create: `packages/vitest-config/package.json`

```json
{
  "name": "@repo/vitest-config",
  "version": "0.0.0",
  "private": true,
  "main": "base.ts",
  "files": ["base.ts", "react.ts"],
  "dependencies": {
    "@testing-library/jest-dom": "^6.2.0",
    "@testing-library/react": "^14.1.2",
    "@testing-library/user-event": "^14.5.2",
    "@vitejs/plugin-react": "^4.2.1",
    "jsdom": "^23.2.0"
  },
  "peerDependencies": {
    "vitest": "^1.2.0"
  }
}
```

**Step 3: Create base Vitest config**

Create: `packages/vitest-config/base.ts`

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'dist/', '**/*.config.*', '**/*.d.ts'],
    },
  },
})
```

**Step 4: Create React Vitest config**

Create: `packages/vitest-config/react.ts`

```typescript
import react from '@vitejs/plugin-react'
import { defineConfig, mergeConfig } from 'vitest/config'

import baseConfig from './base'

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: ['@testing-library/jest-dom'],
    },
  })
)
```

**Step 5: Create README**

Create: `packages/vitest-config/README.md`

````markdown
# @repo/vitest-config

Shared Vitest configurations for the monorepo.

## Usage

In your `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import reactConfig from '@repo/vitest-config/react'

export default reactConfig
```
````

## Available Configs

- `base.ts` - Core Vitest settings
- `react.ts` - React Testing Library setup with jsdom

````

**Step 6: Commit**

```bash
git add packages/vitest-config/
git commit -m "feat: add Vitest config package

- Add base and react configs
- Configure testing library and jsdom"
````

---

## Task 5: Utils Package Structure

**Files:**

- Create: `packages/utils/package.json`
- Create: `packages/utils/tsconfig.json`
- Create: `packages/utils/src/index.ts`
- Create: `packages/utils/src/validation/index.ts`
- Create: `packages/utils/src/formatting/index.ts`
- Create: `packages/utils/src/api/index.ts`
- Create: `packages/utils/src/types/index.ts`

**Step 1: Create directory structure**

Run: `mkdir -p packages/utils/src/{validation,formatting,api,types}`

Expected: Directories created

**Step 2: Create package.json**

Create: `packages/utils/package.json`

```json
{
  "name": "@repo/utils",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./validation": {
      "import": "./dist/validation/index.js",
      "types": "./dist/validation/index.d.ts"
    },
    "./formatting": {
      "import": "./dist/formatting/index.js",
      "types": "./dist/formatting/index.d.ts"
    },
    "./api": {
      "import": "./dist/api/index.js",
      "types": "./dist/api/index.d.ts"
    },
    "./types": {
      "import": "./dist/types/index.js",
      "types": "./dist/types/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@repo/typescript-config": "workspace:*",
    "typescript": "^5.3.3"
  }
}
```

**Step 3: Create tsconfig.json**

Create: `packages/utils/tsconfig.json`

```json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

**Step 4: Create main index**

Create: `packages/utils/src/index.ts`

```typescript
export * from './validation'
export * from './formatting'
export * from './api'
export * from './types'
```

**Step 5: Create validation index**

Create: `packages/utils/src/validation/index.ts`

```typescript
// Validation utilities will be added here
export {}
```

**Step 6: Create formatting index**

Create: `packages/utils/src/formatting/index.ts`

```typescript
// Formatting utilities will be added here
export {}
```

**Step 7: Create api index**

Create: `packages/utils/src/api/index.ts`

```typescript
// API utilities will be added here
export {}
```

**Step 8: Create types index**

Create: `packages/utils/src/types/index.ts`

```typescript
// Type definitions will be added here
export {}
```

**Step 9: Build the package**

Run: `cd packages/utils && pnpm install && pnpm build`

Expected: TypeScript compiles successfully, dist/ folder created

**Step 10: Commit**

```bash
git add packages/utils/
git commit -m "feat: add utils package structure

- Set up TypeScript build configuration
- Create subdirectory structure for organization
- Configure tree-shakeable exports"
```

---

## Task 6: UI Package Structure

**Files:**

- Create: `packages/ui/package.json`
- Create: `packages/ui/tsconfig.json`
- Create: `packages/ui/vite.config.ts`
- Create: `packages/ui/src/index.ts`
- Create: `packages/ui/src/components/index.ts`

**Step 1: Create directory structure**

Run: `mkdir -p packages/ui/src/components`

Expected: Directories created

**Step 2: Create package.json**

Create: `packages/ui/package.json`

```json
{
  "name": "@repo/ui",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "vite build && tsc --emitDeclarationOnly",
    "dev": "vite build --watch",
    "type-check": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@repo/typescript-config": "workspace:*",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.3",
    "vite": "^5.0.11"
  }
}
```

**Step 3: Create tsconfig.json**

Create: `packages/ui/tsconfig.json`

```json
{
  "extends": "@repo/typescript-config/react.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

**Step 4: Create vite.config.ts**

Create: `packages/ui/vite.config.ts`

```typescript
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
```

**Step 5: Create main index**

Create: `packages/ui/src/index.ts`

```typescript
export * from './components'
```

**Step 6: Create components index**

Create: `packages/ui/src/components/index.ts`

```typescript
// Components will be exported here
export {}
```

**Step 7: Install and build**

Run: `cd packages/ui && pnpm install && pnpm build`

Expected: Vite builds successfully, dist/ folder created

**Step 8: Commit**

```bash
git add packages/ui/
git commit -m "feat: add UI package structure

- Configure Vite for library mode
- Set up React and TypeScript
- Configure peer dependencies"
```

---

## Task 7: Astro App Setup

**Files:**

- Create: `apps/web/` (via Astro CLI)
- Modify: `apps/web/package.json`
- Modify: `apps/web/tsconfig.json`
- Create: `apps/web/.env.example`

**Step 1: Create Astro app**

Run: `cd apps && pnpm create astro@latest web -- --template minimal --typescript strict --no-install --no-git`

Expected: Astro project created in apps/web

**Step 2: Update package.json**

Modify: `apps/web/package.json`

Update the dependencies section to include:

```json
{
  "name": "web",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "type-check": "astro check",
    "lint": "eslint ."
  },
  "dependencies": {
    "@astrojs/check": "^0.4.1",
    "@astrojs/react": "^3.0.9",
    "@repo/ui": "workspace:*",
    "@repo/utils": "workspace:*",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "astro": "^4.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.3"
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "@repo/typescript-config": "workspace:*",
    "eslint": "^8.56.0"
  }
}
```

**Step 3: Update tsconfig.json**

Modify: `apps/web/tsconfig.json`

```json
{
  "extends": "@repo/typescript-config/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Step 4: Update astro.config.mjs**

Modify: `apps/web/astro.config.mjs`

```javascript
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [react()],
  output: 'static',
})
```

**Step 5: Create .env.example**

Create: `apps/web/.env.example`

```env
PUBLIC_SITE_URL=http://localhost:4321
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=
```

**Step 6: Create ESLint config**

Create: `apps/web/.eslintrc.js`

```javascript
module.exports = {
  extends: ['@repo/eslint-config/react'],
  ignorePatterns: ['dist', '.astro'],
}
```

**Step 7: Install dependencies**

Run: `cd apps/web && pnpm install`

Expected: All dependencies installed

**Step 8: Test dev server**

Run: `cd apps/web && pnpm dev`

Expected: Dev server starts on http://localhost:4321

Press Ctrl+C to stop

**Step 9: Commit**

```bash
git add apps/web/
git commit -m "feat: add Astro frontend app

- Initialize Astro with React integration
- Configure TypeScript and ESLint
- Add workspace package references"
```

---

## Task 8: Strapi App Setup

**Files:**

- Create: `apps/strapi/` (via Strapi CLI)
- Modify: `apps/strapi/package.json`
- Create: `apps/strapi/tsconfig.json`
- Create: `apps/strapi/.env.example`

**Step 1: Create Strapi app**

Run: `cd apps && pnpm create strapi-app@latest strapi --quickstart --no-run --typescript`

Expected: Strapi project created in apps/strapi (this may take a few minutes)

**Step 2: Update package.json**

Modify: `apps/strapi/package.json`

Add these scripts and dev dependencies:

```json
{
  "name": "strapi",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "develop": "strapi develop",
    "start": "strapi start",
    "build": "strapi build",
    "strapi": "strapi",
    "dev": "strapi develop",
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "@repo/typescript-config": "workspace:*"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=6.0.0"
  }
}
```

**Step 3: Create tsconfig.json**

Create: `apps/strapi/tsconfig.json`

```json
{
  "extends": "@repo/typescript-config/node.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./"
  },
  "include": ["./", "./**/*.json"],
  "exclude": ["node_modules", "build", "dist", ".cache", ".tmp"]
}
```

**Step 4: Configure SQLite database**

Modify: `apps/strapi/config/database.ts`

```typescript
import path from 'path'

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite')

  const connections = {
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { min: 2, max: 10 },
    },
  }

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  }
}
```

**Step 5: Create .env.example**

Create: `apps/strapi/.env.example`

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
JWT_SECRET=

# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Production: Postgres
# DATABASE_CLIENT=postgres
# DATABASE_URL=
# DATABASE_HOST=
# DATABASE_PORT=5432
# DATABASE_NAME=
# DATABASE_USERNAME=
# DATABASE_PASSWORD=
# DATABASE_SSL=false
```

**Step 6: Install workspace dependencies**

Run: `cd apps/strapi && pnpm install`

Expected: Dependencies installed

**Step 7: Commit**

```bash
git add apps/strapi/
git commit -m "feat: add Strapi CMS app

- Initialize Strapi v4 with TypeScript
- Configure SQLite for development
- Add PostgreSQL config for production"
```

---

## Task 9: Turborepo Configuration

**Files:**

- Create: `turbo.json`
- Modify: `package.json` (root)

**Step 1: Create turbo.json**

Create: `turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".astro/**", "build/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"]
    },
    "type-check": {
      "dependsOn": ["^build"]
    }
  }
}
```

**Step 2: Add turbo-ignore script to apps**

Modify: `apps/web/package.json`

Add this script:

```json
{
  "scripts": {
    "turbo-ignore": "turbo-ignore"
  }
}
```

Modify: `apps/strapi/package.json`

Add the same script.

**Step 3: Install turbo globally in workspace**

Run: `pnpm install -w`

Expected: Dependencies updated

**Step 4: Test turbo build**

Run: `pnpm build`

Expected: All packages build in correct order (utils, ui, then apps)

**Step 5: Commit**

```bash
git add turbo.json apps/*/package.json
git commit -m "feat: configure Turborepo pipeline

- Add build, dev, lint, test pipelines
- Configure dependency graph
- Enable smart caching"
```

---

## Task 10: Environment Variables and Documentation

**Files:**

- Create: `README.md`
- Create: `.env.example`
- Create: `.vscode/extensions.json`
- Create: `.vscode/settings.json`

**Step 1: Create root README**

Create: `README.md`

````markdown
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
````

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

````

**Step 2: Create root .env.example**

Create: `.env.example`

```env
# No root-level environment variables needed
# See apps/web/.env.example and apps/strapi/.env.example
````

**Step 3: Create VSCode extensions**

Create: `.vscode/extensions.json`

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss"
  ]
}
```

**Step 4: Create VSCode settings**

Create: `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.workingDirectories": [{ "mode": "auto" }],
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

**Step 5: Commit**

```bash
git add README.md .env.example .vscode/
git commit -m "docs: add project documentation

- Add comprehensive README
- Add VSCode configuration
- Document setup and usage"
```

---

## Task 11: Verification and Testing

**Files:**

- None (testing existing setup)

**Step 1: Clean install test**

Run: `rm -rf node_modules apps/*/node_modules packages/*/node_modules && pnpm install`

Expected: All packages install successfully

**Step 2: Build all packages**

Run: `pnpm build`

Expected: All packages build successfully in correct order:

1. Config packages (typescript-config, eslint-config, vitest-config)
2. Shared packages (utils, ui)
3. Apps (web, strapi)

**Step 3: Type check all packages**

Run: `pnpm type-check`

Expected: No type errors

**Step 4: Start Astro dev server**

Run: `pnpm dev --filter=web` (in one terminal)

Expected: Server starts at http://localhost:4321

**Step 5: Verify Astro is running**

Open browser to http://localhost:4321

Expected: Astro welcome page displays

Stop the server (Ctrl+C)

**Step 6: Check Turbo cache**

Run: `pnpm build`

Expected: Second build is much faster (cached)

**Step 7: Verify workspace dependencies**

Run: `pnpm list --depth=0 --filter=web`

Expected: Shows @repo/ui and @repo/utils as dependencies

**Step 8: Final commit**

```bash
git add -A
git commit -m "chore: verify monorepo setup

- Test clean install
- Verify build pipeline
- Confirm type checking
- Test dev servers"
```

---

## Summary

The monorepo is now fully set up with:

- ✅ Root monorepo structure with pnpm workspaces
- ✅ Turborepo for build orchestration
- ✅ Shared TypeScript configs (base, react, node)
- ✅ Shared ESLint configs (base, react, node)
- ✅ Shared Vitest configs (base, react)
- ✅ Utils package with organized subdirectories
- ✅ UI package with Vite build setup
- ✅ Astro frontend app with React integration
- ✅ Strapi CMS app with SQLite/Postgres config
- ✅ Complete documentation and VSCode setup

## Next Steps

After completing this plan:

1. **Develop shared components** in `packages/ui` (Button, Card, etc.)
2. **Add utilities** to `packages/utils` (Strapi API client, validation schemas)
3. **Create Astro pages** in `apps/web/src/pages`
4. **Configure Strapi content types** for blog posts
5. **Connect Astro to Strapi API** for blog functionality
6. **Set up CI/CD** for automated testing and deployment
