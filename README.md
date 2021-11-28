[![npm version](https://badge.fury.io/js/%40viclafouch%2Feslint-config-viclafouch.svg)](https://badge.fury.io/js/%40viclafouch%2Feslint-config-viclafouch)

# Eslint / Prettier Setup of @viclafouch 📦

These are my ESLint and Prettier settings for a React.js project ⚡️

## What it does

* Lints JavaScript based on the latest standards
* Fixes issues and formatting errors with Prettier
* Check for accessibility rules on JSX elements.

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev @viclafouch/eslint-config-viclafouch
```

3. You can see in your package.json there are now a big list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

## If you use JavaScript

```json
{
  "extends": [
    "@viclafouch/eslint-config-viclafouch"
  ]
}
```

Then, you can remove these unnecessary packages (you don't need the TypeScript support)

```diff
"devDependencies": {
- "@typescript-eslint/eslint-plugin": "5.4.0",
- "@typescript-eslint/parser": "5.4.0",
- "typescript": "4.5.2"
},
```

### Scripts

You can add two scripts to your package.json to lint and/or fix your code:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "npm run lint -- --fix",
},
```
## If you use TypeScript

```json
{
  "extends": [
    "@viclafouch/eslint-config-viclafouch/typescript"
  ]
}
```

Then, you can remove these unnecessary packages (you don't the Babel parser, we use `@typescript-eslint/parser`).


```diff
"devDependencies": {
- "@babel/core": "7.16.0",
- "@babel/eslint-parser": "7.16.3"
...
},
```

### Scripts

You can add two scripts to your package.json to lint and/or fix your code:

```json
"scripts": {
  "lint": "tsc --noEmit && eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "npm run lint -- --fix",
},
```

## With VS Code

Once you have done. You probably want your editor to lint and fix for you.

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings. Create a `.vscode` folder at your root project, and create a `settings.json` file in this folder. Then, add this little config:

```js
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## With Create React App

1. You gotta eject first `npm run eject` or `yarn eject`
1. Run `npx install-peerdeps --dev @viclafouch/eslint-config-viclafouch`
1. Crack open your `package.json` and replace `"extends": "react-app"` with `"extends": ["@viclafouch/eslint-config-viclafouch"]`
