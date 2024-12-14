/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  rules: {
    'lines-between-class-members': ['error', 'always'],
    'padding-line-between-statements': [
      2,
      // We always want a blank line before a `return` statement or a multi-line
      // block.
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
