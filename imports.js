/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./rules/imports.js'].map(require.resolve),
  rules: {}
}
