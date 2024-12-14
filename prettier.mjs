import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    ...eslintPluginPrettierRecommended,
    rules: {
      'prettier/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-curly'],
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
]
