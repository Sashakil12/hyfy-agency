# @repo/vitest-config

Shared Vitest configurations for the monorepo.

## Usage

In your `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import reactConfig from '@repo/vitest-config/react'

export default reactConfig
```

## Available Configs

- `base.ts` - Core Vitest settings
- `react.ts` - React Testing Library setup with jsdom
