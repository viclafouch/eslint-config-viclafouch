import nextPlugin from '@next/eslint-plugin-next'
import hooksConfig from './hooks.mjs'
import jsxA11yConfig from './jsx-a11y.mjs'
import reactConfig from './react.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...reactConfig,
  ...hooksConfig,
  ...jsxA11yConfig,
  nextPlugin.configs.recommended,
  {
    rules: {
      '@next/next/no-page-custom-font': 'off',
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
