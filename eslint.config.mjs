import baseConfig from './index.mjs'
import prettierConfig from './prettier.mjs'

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
