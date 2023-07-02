/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    node: true,
    jest: true
  },
  rules: {
    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error'
  }
}
