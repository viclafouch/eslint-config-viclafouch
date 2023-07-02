/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/errors',
    './rules/imports',
    './rules/style',
    './rules/variables',
    './rules/es6'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {}
}
