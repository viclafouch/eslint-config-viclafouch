import { FlatCompat } from '@eslint/eslintrc'
import hooksConfig from './hooks.mjs'
import reactConfig from './react.mjs'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...reactConfig,
  ...hooksConfig,
  ...compat.config({
    extends: ['plugin:@next/next/recommended'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off'
    }
  }),
  {
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
]
