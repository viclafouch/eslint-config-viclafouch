/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./rules/react.js'].map(require.resolve),
  rules: {}
}
