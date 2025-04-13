# Eslint / Prettier Setup of @viclafouch 📦

These are the ESLint and Prettier settings for a Next.js project ⚡️


# Table of Contents

- [Eslint / Prettier Setup of @viclafouch 📦](#eslint--prettier-setup-of-viclafouch-)
- [Table of Contents](#table-of-contents)
  - [What it does](#what-it-does)
  - [Local / Per Project Install](#local--per-project-install)
    - [Scripts](#scripts)
  - [If you use TypeScript](#if-you-use-typescript)
    - [Extend your tsconfig](#extend-your-tsconfig)
    - [Add the typescript eslint config](#add-the-typescript-eslint-config)
    - [Better typing](#better-typing)
    - [Scripts](#scripts-1)
  - [If you want to enable imports sorting](#if-you-want-to-enable-imports-sorting)
  - [If you use Next.js](#if-you-use-nextjs)
  - [If you use React.js](#if-you-use-reactjs)
  - [If you want to use Prettier](#if-you-want-to-use-prettier)
  - [If you use VS Code](#if-you-use-vs-code)

## What it does

* Lints JavaScript / TypeScript based on the latest standards
* Multiple configs `react` `hooks` `next`..
* Shared `tsconfig.json`
* Fixes issues and formatting errors with Prettier
* Check for accessibility rules on JSX elements.

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install the config:

```
npm i -D @viclafouch/eslint-config-viclafouch
```

1. Create a `eslintrc.config.mjs` file in the root of your project's directory (it should live where package.json does). Your `eslintrc.config.mjs` file should look like this:

2. Extends your config with the minimal base of @viclafouch config :

```js
import baseConfig from '@viclafouch/eslint-config-viclafouch/index.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  {
    ignores: ['**/node_modules/**']
  }
]
```

### Scripts

You can add two scripts to your package.json to lint and/or fix your code:

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "npm run lint -- --fix",
  }
}
```
## If you use TypeScript

### Extend your tsconfig

First, extend your current config file `tsconfig.json` with this following snippet:

```json
{
  "extends": "@viclafouch/eslint-config-viclafouch/tsconfig.json",
  ...
}
```

### Add the typescript eslint config

Then, add the TypeScript Eslint rules to your `.eslintrc` file:

```js
import baseConfig from '@viclafouch/eslint-config-viclafouch/index.mjs'
import typescriptConfig from '@viclafouch/eslint-config-viclafouch/typescript.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  ...typescriptConfig,
  {
    ignores: ['**/node_modules/**']
  }
]
```

### Better typing

TypeScript's built-in typings are not perfect. viclafouch-reset makes them better.

1. Create a `reset.d.ts` file in your project with these contents:

```ts
// Do not add any other lines of code to this file!
import '@viclafouch/eslint-config-viclafouch/reset.d'
```

2. Enjoy improved typings across your entire project.

### Scripts

You can add two scripts to your package.json to lint and/or fix your code:

```json
{
  "scripts": {
    "lint": "tsc --noEmit && eslint",
    "lint:fix": "npm run lint -- --fix",
  },
}
```

## If you want to enable imports sorting

If you want to sort your imports using your alias at the same time from your `jsonfig.json` or `tsconfig.json` file.

```js
import baseConfig from '@viclafouch/eslint-config-viclafouch/index.mjs'
import importsConfig from '@viclafouch/eslint-config-viclafouch/imports.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  ...importsConfig,
  {
    ignores: ['**/node_modules/**']
  }
]
```

## If you use Next.js

You can also add additional rules for Next.js. It includes the following configurations : `@viclafouch/eslint-config-viclafouch/react.mjs`, `@viclafouch/eslint-config-viclafouch/hooks.mjs` and Next.js specific rules.

```js
import baseConfig from '@viclafouch/eslint-config-viclafouch/index.mjs'
import nextConfig from '@viclafouch/eslint-config-viclafouch/next.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  ...nextConfig,
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**']
  }
]
```

## If you use React.js

You can also add additional rules for only React.js ecosystem (without Next.js).

```js
import baseConfig from '@viclafouch/eslint-config-viclafouch/index.mjs'
import hooksConfig from '@viclafouch/eslint-config-viclafouch/hooks.mjs'
import reactConfig from '@viclafouch/eslint-config-viclafouch/react.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  ...hooksConfig,
  ...reactConfig
  {
    ignores: ['**/node_modules/**']
  }
]
```


## If you want to use Prettier

Be sure for the prettier config to be the last one.

```js
import hooksConfig from '@viclafouch/eslint-config-viclafouch/hooks.mjs'
import importsConfig from '@viclafouch/eslint-config-viclafouch/imports.mjs'
import baseConfig from '@viclafouch/eslint-config-viclafouch/index.mjs'
import prettierConfig from '@viclafouch/eslint-config-viclafouch/prettier.mjs'
import reactConfig from '@viclafouch/eslint-config-viclafouch/react.mjs'
import typescriptConfig from '@viclafouch/eslint-config-viclafouch/typescript.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  ...reactConfig,
  ...hooksConfig,
  ...importsConfig,
  ...typescriptConfig,
  ...prettierConfig,
  {
    ignores: ['**/node_modules/**', '**/dist/**']
  }
]
```

## If you use VS Code

Once you have done. You probably want your editor to lint and fix for you.

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings. Create a `.vscode` folder at your root project, and create a `settings.json` file in this folder. Then, add this little config:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```
