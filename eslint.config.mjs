import { baseConfig, prettierConfig } from './index.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    ignores: ['**/*.d.ts']
  },
  ...baseConfig,
  ...prettierConfig,
  {
    rules: {
      'comma-dangle': 0,
      'max-len': 0
    }
  }
]
