module.exports = {
  plugins: ['react', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 'off',
    'simple-import-sort/sort': 'error',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        jsxSingleQuote: false,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ]
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
      rules: {
        'simple-import-sort/sort': [
          'error',
          {
            groups: [
              // Packages. `react` related packages come first.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ['^react', '^@?\\w'],
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
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  }
}
