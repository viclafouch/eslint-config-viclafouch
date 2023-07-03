// This is a patch so that eslint will load the plugins as dependencies. Otherwise we can to install EVERYTHING in th root project
require('@rushstack/eslint-patch/modern-module-resolution')

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
