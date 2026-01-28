import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  name: 'react-hooks',
  ...pluginReactHooks.configs.flat.recommended,
  languageOptions: {
    ...pluginReact.configs.flat.recommended.languageOptions,
    globals: {
      ...globals.serviceworker
    }
  },
  rules: {
    ...pluginReactHooks.configs.flat.recommended.rules,

    // Prefer to have a convention for naming states
    // E.g: [thing, setThing]
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    'react/hook-use-state': 'error'
  }
}
