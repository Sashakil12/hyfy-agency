# @repo/eslint-config

Shared ESLint configurations for the monorepo.

## Usage

In your `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@repo/eslint-config/react'],
}
```

## Available Configs

- `base.js` - Core ESLint rules for TypeScript
- `react.js` - React-specific rules (hooks, a11y)
- `node.js` - Node.js-specific rules
