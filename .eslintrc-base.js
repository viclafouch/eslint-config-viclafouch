module.exports = {
  plugins: ['react', 'simple-import-sort'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'id-length': [
      'error',
      { min: 2, max: Infinity, exceptions: ['t', '_'], properties: 'never' }
    ],
    'react/jsx-no-leaked-render': [2, { validStrategies: ['ternary'] }],
    'id-denylist': [
      'error',
      'err',
      'cb',
      'arr',
      'acc',
      'idx',
      'ctx',
      'res',
      'val',
      'obj',
      'src',
      'el',
      'elem',
      'req'
    ],
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
