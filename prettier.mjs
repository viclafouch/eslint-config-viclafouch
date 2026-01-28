import { createRequire } from 'node:module'

import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

const require = createRequire(import.meta.url)

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
          plugins: [require.resolve('prettier-plugin-curly')],
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
