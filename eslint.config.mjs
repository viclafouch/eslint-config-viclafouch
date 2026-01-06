import { baseConfig, prettierConfig } from './index.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  ...prettierConfig,
  {
    rules: {
      'comma-dangle': 0,
      'max-len': 0
    }
  }
]
