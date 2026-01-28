import {
  importsConfig,
  nextConfig,
  prettierConfig,
  typescriptConfig
} from '@viclafouch/eslint-config-viclafouch'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  { ignores: ['**/node_modules/**', '**/.next/**', '**/dist/**'] },
  ...typescriptConfig,
  ...nextConfig,
  ...importsConfig,
  ...prettierConfig
]
