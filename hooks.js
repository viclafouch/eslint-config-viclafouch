/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./rules/react-hooks.js'].map(require.resolve),
  rules: {}
}
