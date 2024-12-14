/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  name: 'errors',
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  rules: {
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // Disallow assignment in conditional expressions
    // https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disallow use of console
    'no-console': 'warn',

    // Disallow use of constant expressions in conditions
    // https://eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': 'error',

    // Disallow use of debugger
    // https://eslint.org/docs/latest/rules/no-debugger
    'no-debugger': 'error',

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // Disallow duplicate case labels
    // https://eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Disallow duplicate keys when creating object literals
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow reassigning exceptions in catch clauses
    // https://eslint.org/docs/latest/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow unnecessary semicolons
    'no-extra-semi': 'error'
  }
}
