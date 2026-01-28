import {
  importsConfig,
  prettierConfig,
  typescriptConfig
} from '@viclafouch/eslint-config-viclafouch'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  { ignores: ['**/node_modules/**', '**/dist/**'] },
  ...typescriptConfig,
  ...importsConfig,
  ...prettierConfig
]
