import jsxA11y from 'eslint-plugin-jsx-a11y'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  // Use recommended config from eslint-plugin-jsx-a11y
  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    name: 'jsx-a11y',
    rules: {
      // Don't require captions for video / audio
      // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
      'jsx-a11y/media-has-caption': 'off'
    }
  }
]
