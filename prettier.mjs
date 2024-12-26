import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    plugins: {
      ...eslintConfigPrettier.plugins,
      prettier: eslintPluginPrettier
    },
    rules: {
      ...eslintConfigPrettier.rules,
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
          usePrettierrc: false,
          bracketSameLine: false,
          arrowParens: 'always'
        }
      ]
    }
  }
]
