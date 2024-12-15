/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  name: 'style',
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  rules: {
    // Enforce camelcase naming convention
    // https://eslint.org/docs/latest/rules/camelcase
    camelcase: 'error',

    // "red" === color is a "Yoda" condition, prefer color === "red" instead
    // https://eslint.org/docs/latest/rules/yoda
    yoda: 'error',

    // Disallow the unary operators ++ and --
    // https://eslint.org/docs/latest/rules/no-plusplus
    'no-plusplus': 'error',

    // Disallow inline comments after code
    // https://eslint.org/docs/latest/rules/no-inline-comments
    'no-inline-comments': 'error',

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/latest/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always'],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      2,
      // We always want a blank line before a `return` statement or a multi-line
      // Block.
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'multiline-block-like']
      },
      // We always want a blank line after a multi-line block.
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' }
    ]
  }
}
