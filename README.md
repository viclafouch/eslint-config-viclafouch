# Eslint / Prettier Setup of viclafouch

These are my settings for ESLint and Prettier

## What it does
* Lints JavaScript based on the latest standards
* Fixes issues and formatting errors with Prettier
* Lints + Fixes inside of html script tags
* You can see all the [rules here](https://github.com/wesbos/eslint-config-wesbos/blob/master/.eslintrc.js) - these generally abide by the code written in my courses. You are very welcome to overwrite any of these settings, or just fork the entire thing to create your own.

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev @viclafouch/eslint-config-viclafouch
```

3. You can see in your package.json there are now a big list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": [
    "@viclafouch/eslint-config-viclafouch"
  ]
}
```

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

## With VS Code

Once you have done. You probably want your editor to lint and fix for you.

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. Click to the `{}` icon in the top right corner and add this :

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
