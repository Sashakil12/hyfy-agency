# @repo/typescript-config

Shared TypeScript configurations for the monorepo.

## Usage

In your `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/react.json"
}
```

## Available Configs

- `base.json` - Common settings for all projects
- `react.json` - For React applications (Astro, UI package)
- `node.json` - For Node.js applications (Strapi)
