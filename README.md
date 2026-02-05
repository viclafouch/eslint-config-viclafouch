# @viclafouch/eslint-config-viclafouch

ESLint and Prettier configuration for modern TypeScript projects.

## Installation

```bash
npm i -D @viclafouch/eslint-config-viclafouch eslint prettier typescript
```

## Quick Init (recommended)

```bash
npx @viclafouch/eslint-config-viclafouch
```

This will prompt you to select your stack and create the `eslint.config.js` file automatically.

## Manual Setup (React Web)

```js
// eslint.config.js
import {
  hooksConfig,
  importsConfig,
  jsxA11yConfig,
  prettierConfig,
  reactConfig,
  typescriptConfig
} from '@viclafouch/eslint-config-viclafouch'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.output/**',
      '**/.tanstack/**'
    ]
  },
  ...typescriptConfig,
  ...reactConfig,
  ...hooksConfig,
  ...jsxA11yConfig,
  ...importsConfig,
  ...prettierConfig
]
```

## Stack Examples

### React + Vite

```js
// eslint.config.js
import {
  hooksConfig,
  importsConfig,
  jsxA11yConfig,
  prettierConfig,
  reactConfig,
  typescriptConfig
} from '@viclafouch/eslint-config-viclafouch'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  { ignores: ['**/node_modules/**', '**/dist/**'] },
  ...typescriptConfig,
  ...reactConfig,
  ...hooksConfig,
  ...jsxA11yConfig,
  ...importsConfig,
  ...prettierConfig
]
```

### Pure TypeScript (Node.js, lib)

```js
// eslint.config.js
import {
  importsConfig,
  prettierConfig,
  typescriptConfig
} from '@viclafouch/eslint-config-viclafouch'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  { ignores: ['**/node_modules/**', '**/dist/**'] },
  ...typescriptConfig,
  ...importsConfig,
  ...prettierConfig
]
```

### Next.js

```js
// eslint.config.js
import {
  importsConfig,
  nextConfig,
  prettierConfig,
  typescriptConfig
} from '@viclafouch/eslint-config-viclafouch'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  { ignores: ['**/node_modules/**', '**/.next/**'] },
  ...typescriptConfig,
  ...nextConfig,
  ...importsConfig,
  ...prettierConfig
]
```

### React Native (Expo)

```js
// eslint.config.js
import {
  hooksConfig,
  importsConfig,
  prettierConfig,
  reactConfig,
  reactNativeConfig,
  typescriptConfig
} from '@viclafouch/eslint-config-viclafouch'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  { ignores: ['**/node_modules/**', '**/.expo/**', '**/ios/**', '**/android/**'] },
  ...typescriptConfig,
  ...reactConfig,
  ...hooksConfig,
  ...reactNativeConfig,
  ...importsConfig,
  ...prettierConfig
]
```

## Available Configurations

| Config | Description |
|--------|-------------|
| `typescriptConfig` | **Required base.** TypeScript, ES6+, best practices, unicorn, promise |
| `reactConfig` | React rules |
| `hooksConfig` | React Hooks |
| `jsxA11yConfig` | Web accessibility (jsx-a11y) - for web projects |
| `reactNativeConfig` | React Native specific rules |
| `nextConfig` | Next.js (includes React + Hooks + jsx-a11y) |
| `importsConfig` | Automatic import sorting |
| `prettierConfig` | Prettier (always last) |

## TypeScript

### Extend tsconfig.json

```json
{
  "extends": "@viclafouch/eslint-config-viclafouch/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Better Typing with reset.d.ts

Improves native types (`.filter(Boolean)`, `JSON.parse`, `Array.includes()`, etc.):

```ts
import '@viclafouch/eslint-config-viclafouch/reset.d'
```

## Scripts

```json
{
  "type": "module",
  "scripts": {
    "lint": "tsc --noEmit && eslint .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

## VS Code

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Create a `.vscode` folder at your root project, and create a `settings.json` file:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## Configuration Order

1. `ignores` (always first)
2. `typescriptConfig` (base)
3. `reactConfig` / `nextConfig` / `hooksConfig`
4. `jsxA11yConfig` (web) or `reactNativeConfig` (mobile)
5. `importsConfig`
6. `prettierConfig` (always last)
