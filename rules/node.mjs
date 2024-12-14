import globals from 'globals'

/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.jest
    }
  },
  rules: {
    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error'
  }
}
