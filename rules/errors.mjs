/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  name: 'errors',
  files: ['**/*.{js,mjs,cjs,jsx}'],
  rules: {
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // disallow use of console
    'no-console': 'warn',

    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // disallow use of debugger
    'no-debugger': 'error',

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // disallow unnecessary semicolons
    'no-extra-semi': 'error'
  }
}
