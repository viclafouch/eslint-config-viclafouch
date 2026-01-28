import { createRequire } from 'node:module'

import eslintPluginPrettier from 'eslint-plugin-prettier'

const require = createRequire(import.meta.url)

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      // Disable ESLint core rules that conflict with Prettier
      // These rules are explicitly listed instead of using eslint-config-prettier
      // to avoid disabling react/jsx-newline (Prettier doesn't handle blank lines in JSX)
      'arrow-parens': 'off',
      'arrow-spacing': 'off',
      'dot-location': 'off',
      'no-confusing-arrow': 'off',
      'no-extra-semi': 'off',
      'no-floating-decimal': 'off',
      'no-multi-spaces': 'off',
      'rest-spread-spacing': 'off',
      'template-curly-spacing': 'off',

      // Disable React JSX formatting rules that conflict with Prettier
      // Note: react/jsx-newline is intentionally NOT disabled - Prettier doesn't handle it
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-curly-spacing': 'off',
      'react/jsx-equals-spacing': 'off',
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-multi-spaces': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/jsx-wrap-multilines': 'off',

      // Run Prettier as an ESLint rule
      // https://github.com/prettier/eslint-plugin-prettier
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
