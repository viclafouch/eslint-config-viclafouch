import testingLibrary from 'eslint-plugin-testing-library'

/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  ...testingLibrary.configs['flat/react'],
  name: 'testing-library',
  rules: {
    ...testingLibrary.configs['flat/react'].rules,

    // Enforce a valid naming for return value of render
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
    'testing-library/render-result-naming-convention': 'off'
  }
}
