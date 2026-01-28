import {
  importsConfig,
  prettierConfig,
  reactConfig,
  typescriptConfig
} from '@viclafouch/eslint-config-viclafouch'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.output/**',
      '**/.tanstack/**',
      '**/dist/**'
    ]
  },
  ...typescriptConfig,
  ...reactConfig,
  ...importsConfig,
  ...prettierConfig
]
