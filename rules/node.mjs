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
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
    'unicorn/prefer-node-protocol': 'error'
  }
}
