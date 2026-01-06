import betterTailwindcss from 'eslint-plugin-better-tailwindcss'

/**
 * @typedef {Object} BetterTailwindcssOptions
 * @property {string} entryPoint - Path to the CSS entry file (Tailwind v4)
 */

/**
 * Creates ESLint flat config for eslint-plugin-better-tailwindcss (Tailwind v4)
 * @param {BetterTailwindcssOptions} options
 * @returns {import("eslint").Linter.Config[]}
 */
export default function betterTailwindcssConfig({ entryPoint }) {
  const recommendedRules = betterTailwindcss.configs?.recommended?.rules ?? {}

  return [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: {
        'better-tailwindcss': betterTailwindcss
      },
      settings: {
        'better-tailwindcss': {
          entryPoint
        }
      },
      rules: {
        ...recommendedRules
      }
    }
  ]
}
