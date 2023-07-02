/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        jsxSingleQuote: false,
        trailingComma: 'none',
        endOfLine: 'auto',
        bracketSameLine: false,
        arrowParens: 'always'
      }
    ]
  }
}
