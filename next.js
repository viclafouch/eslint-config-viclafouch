/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./react.js', './hooks.js']
    .map(require.resolve)
    .concat(['plugin:@next/next/recommended']),
  rules: {
    // No error for anchor inside a Next Link
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
}
