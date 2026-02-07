# CLAUDE.md

This file documents the **@viclafouch/eslint-config-viclafouch** project to facilitate working with Claude Code.

## What is this project?

This is a reusable ESLint and Prettier configuration package published on npm. It provides a comprehensive, modular set of linting and formatting rules designed for modern TypeScript projects. The goal is to share consistent code quality standards across all of Victor de la Fouchardiere's projects.

**Key features:**
- TypeScript-first configuration (all projects are TypeScript by default)
- ES6+, JSX/TSX support
- React.js and Next.js frameworks
- React Native support
- Promise handling and best practices
- Unicorn plugin for modern JavaScript

## File Structure

### Entry Files

| File | Description |
|------|-------------|
| `index.mjs` | Main entry point, exports all configuration modules |
| `index.d.ts` | TypeScript type definitions for the package |
| `eslint.config.mjs` | ESLint configuration for this package itself |

### Configuration Modules (root)

| File | Description |
|------|-------------|
| `typescript.mjs` | Wrapper that exports `rules/typescript.mjs` |
| `react.mjs` | React library rules (without jsx-a11y) |
| `react-native.mjs` | React Native rules (RN-specific rules, disables web-only React rules) |
| `jsx-a11y.mjs` | Web accessibility rules (jsx-a11y) - for web projects only |
| `next.mjs` | Next.js-specific rules (extends react + hooks + Next.js plugin) |
| `hooks.mjs` | React Hooks rules (rules-of-hooks, exhaustive-deps, useState naming) |
| `imports.mjs` | Import sorting with simple-import-sort in priority groups |
| `prettier.mjs` | Prettier integration via eslint-plugin-prettier |

### Rules Directory

| File | Description |
|------|-------------|
| `rules/typescript.mjs` | **Main configuration file.** Contains all base rules (best practices, ES6+, variables, errors, style, node) + TypeScript rules + Unicorn + Promise plugins |
| `rules/imports.mjs` | Import sorting rules with @/ and ~/ alias support |
| `rules/react.mjs` | React-specific rules |
| `rules/react-hooks.mjs` | React Hooks rules |
| `rules/react-native.mjs` | React Native rules (no-unused-styles, no-inline-styles, no-color-literals, no-raw-text) |
| `rules/jsx-a11y.mjs` | Web accessibility rules (eslint-plugin-jsx-a11y recommended config) |

### CLI

| File | Description |
|------|-------------|
| `bin/init.js` | CLI script for initializing eslint.config.js |
| `templates/react.js` | Template for React projects |
| `templates/nextjs.js` | Template for Next.js projects |
| `templates/typescript.js` | Template for pure TypeScript projects |

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

## Documentation

**IMPORTANT**: Keep `README.md` up to date when making changes to the project:
- Update usage examples when adding/removing/renaming exported configs
- Update the list of available configurations
- Document breaking changes
- Keep installation instructions current

## Configuration Architecture

### Flat Config Pattern (ESLint 9+)

Each module exports an array of configurations that can be spread:

```javascript
// Typical React setup
import {
  typescriptConfig,
  reactConfig,
  importsConfig,
  prettierConfig
} from '@viclafouch/eslint-config-viclafouch'

export default [
  { ignores: ['**/node_modules/**'] },
  ...typescriptConfig,
  ...reactConfig,
  ...importsConfig,
  ...prettierConfig
]
```

### Loading Hierarchy

1. **typescriptConfig** → Base configuration with all rules (ES6+, best practices, TypeScript, Unicorn, Promise)
2. **nextConfig** → Next.js rules (includes React + Hooks + jsx-a11y)
3. **reactConfig** + **hooksConfig** + **jsxA11yConfig** → For React web projects
4. **reactConfig** + **hooksConfig** + **reactNativeConfig** → For React Native projects
5. **importsConfig** → Import sorting
6. **prettierConfig** → Formatting (must be last)

## Integrated Plugins

- `typescript-eslint` - TypeScript linting
- `eslint-plugin-react` - React rules
- `eslint-plugin-react-hooks` - Hooks enforcement
- `eslint-plugin-react-native` - React Native specific
- `eslint-plugin-jsx-a11y` - Accessibility
- `eslint-plugin-import` + `simple-import-sort` - Import ordering
- `eslint-plugin-promise` - Promise handling
- `eslint-plugin-unicorn` - Best practices
- `eslint-plugin-testing-library` - Testing Library rules (auto-applied on test files via reactConfig)
- `eslint-plugin-prettier` - Code formatting
- `prettier-plugin-curly` - Enforces curly braces in control flow (via prettierConfig)
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

**Exception**: `no-console` uses `'warn'` to allow console statements during development.

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
- React Native: `https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/rule-name.md`
- Unicorn: `https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/rule-name.md`
