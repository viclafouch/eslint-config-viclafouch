# CLAUDE.md

This file documents the **@viclafouch/eslint-config-viclafouch** project to facilitate working with Claude Code.

## What is this project?

This is a reusable ESLint and Prettier configuration package published on npm. It provides a comprehensive, modular set of linting and formatting rules designed for modern JavaScript/TypeScript projects. The goal is to share consistent code quality standards across all of Victor de la Fouchardiere's projects.

**Key features:**
- JavaScript ES6+, TypeScript, JSX/TSX support
- React.js and Next.js frameworks
- Tailwind CSS v4 linting
- Testing libraries support
- Promise handling and best practices

## File Structure

### Entry Files

| File | Description |
|------|-------------|
| `index.mjs` | Main entry point, exports all configuration modules |
| `index.d.ts` | TypeScript type definitions for the package |
| `eslint.config.mjs` | ESLint configuration for this package itself (uses baseConfig + prettierConfig) |

### Configuration Modules (root)

| File | Description |
|------|-------------|
| `base.mjs` | Core JavaScript/TypeScript linting rules (imports all `/rules/` files) |
| `typescript.mjs` | TypeScript-specific rules with parser and project service |
| `react.mjs` | React library rules and JSX accessibility (jsx-a11y) |
| `next.mjs` | Next.js-specific rules (extends react + hooks + Next.js plugin) |
| `hooks.mjs` | React Hooks rules (rules-of-hooks, exhaustive-deps, useState naming) |
| `imports.mjs` | Import sorting with simple-import-sort in priority groups |
| `prettier.mjs` | Prettier integration via eslint-plugin-prettier |
| `better-tailwindcss.mjs` | Tailwind CSS v4 linting (function accepting `{ entryPoint }`) |

### Utility Files for Other Projects

| File | Description |
|------|-------------|
| `tsconfig.json` | Shareable TypeScript configuration, can be extended in other projects |
| `reset.d.ts` | Re-exports improved typings from @total-typescript/ts-reset |

## NPM Scripts

```bash
npm run lint          # Lint the entire project
npm run lint:fix      # Lint and auto-fix issues
npm run bump          # Increment minor version
npm run publish       # Publish to npm
npm run bump:beta     # Increment beta version
npm run publish:beta  # Publish beta version
```

## Configuration Architecture

### Flat Config Pattern (ESLint 9+)

Each module exports an array of configurations that can be spread:

```javascript
// Minimal setup
import { baseConfig } from '@viclafouch/eslint-config-viclafouch'
export default [...baseConfig]

// Full Next.js setup
import { baseConfig, typescriptConfig, nextConfig, prettierConfig } from '@viclafouch/eslint-config-viclafouch'
export default [...baseConfig, ...typescriptConfig, ...nextConfig, ...prettierConfig]
```

### Loading Hierarchy

1. **baseConfig** → loads 7 rule modules + Unicorn plugin
2. **typescriptConfig** → replaces some rules with TypeScript versions
3. **reactConfig** → adds JSX/a11y rules
4. **nextConfig** → extends react + hooks + Next.js plugin
5. **importsConfig** → organizes import sorting
6. **prettierConfig** → formatting (must be last)
7. **betterTailwindcssConfig({ entryPoint })** → Tailwind CSS v4

## Usage in Other Projects

### Extending tsconfig.json

```json
{
  "extends": "@viclafouch/eslint-config-viclafouch/tsconfig.json",
  "compilerOptions": {
    // Project-specific overrides
  }
}
```

### Using reset.d.ts

The `reset.d.ts` file re-exports improved types from `@total-typescript/ts-reset`, providing:

- Better inference for `.filter(Boolean)`
- Stricter types for `JSON.parse`
- Improved `Array.includes()`

To use it, reference it in your project's tsconfig.json or include it in your types.

## Integrated Plugins

- `@eslint/js` - Core ESLint rules
- `typescript-eslint` - TypeScript linting
- `eslint-plugin-react` - React rules
- `eslint-plugin-react-hooks` - Hooks enforcement
- `eslint-plugin-jsx-a11y` - Accessibility
- `eslint-plugin-import` + `simple-import-sort` - Import ordering
- `eslint-plugin-promise` - Promise handling
- `eslint-plugin-unicorn` - Best practices
- `eslint-plugin-prettier` - Code formatting
- `eslint-plugin-better-tailwindcss` - Tailwind v4
- `@next/eslint-plugin-next` - Next.js specific

## Peer Dependencies

- ESLint >= 9
- Prettier >= 3
- TypeScript >= 5

## Coding Conventions

### Rule Severity

**IMPORTANT**: This project follows a strict binary approach for rule severity:
- Use `'error'` for rules that should be enforced
- Use `'off'` for rules that should be disabled
- **NEVER use `'warn'`** - warnings are not acceptable in this configuration

This ensures that linting is either passing or failing, with no ambiguous middle ground.

### Rule Comment Format

**IMPORTANT**: Every rule must be documented with a comment following this exact format:

```javascript
// Description of what the rule does
// https://eslint.org/docs/rules/rule-name
'rule-name': 'error',
```

For TypeScript rules, use the appropriate documentation URL:

```javascript
// Description of what the rule does
// https://typescript-eslint.io/rules/rule-name
'@typescript-eslint/rule-name': 'error',
```

**Format requirements:**
1. **Line 1**: A description of what the rule enforces/disallows (starts with a verb like "Enforce", "Disallow", "Require", etc.)
2. **Line 2**: The URL to the rule's official documentation
3. **Line 3+**: The rule configuration itself

**URL patterns by plugin:**
- ESLint core: `https://eslint.org/docs/rules/rule-name` or `https://eslint.org/docs/latest/rules/rule-name`
- TypeScript ESLint: `https://typescript-eslint.io/rules/rule-name`
- React: `https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/rule-name.md`
- React Hooks: `https://react.dev/reference/rules/rules-of-hooks`

