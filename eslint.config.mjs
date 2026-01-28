import { prettierConfig, typescriptConfig } from './index.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    ignores: ['**/*.d.ts']
  },
  ...typescriptConfig,
  ...prettierConfig,
  {
    rules: {
      'comma-dangle': 0,
      'max-len': 0
    }
  }
]
