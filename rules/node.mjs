import globals from 'globals'

/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  name: 'node',
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.vitest
    }
  },
  rules: {
    // Require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // Enforce usage of the `node:` prefix for builtin imports
    'node/prefer-node-protocol': 'error'
  }
}
