module.exports = {
  plugins: ['react', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error',
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'arrow-body-style': ['error', 'always'],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        jsxSingleQuote: false,
        trailingComma: 'none',
        endOfLine: 'auto',
        bracketSameLine: false,
        arrowParens: 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['*.jsx', '*.js', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages. `react` related packages come first.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ['^react', '^next', '^@mui(/.*|$)', '^@?\\w'],
              // Absolute imports and Relative imports.
              [
                '^(utils|services|hooks|hoc|types|contexts|dictionary|components)(/.*|$)',
                '^\\.'
              ],
              // for scss imports.
              ['^[^.]']
            ]
          }
        ]
      }
    }
  ]
}
