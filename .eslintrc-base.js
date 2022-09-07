module.exports = {
  plugins: ['react', 'simple-import-sort', 'promise'],
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
    'no-return-await': 2,
    'import/prefer-default-export': 0,
    'react/jsx-boolean-value': 2,
    'react/self-closing-comp': 2,
    'react/hook-use-state': 2,
    'react/default-props-match-prop-types': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-prop-types': 2,
    'promise/prefer-await-to-then': 2,
    'require-await': 2,
    'react/sort-prop-types': [
      2,
      {
        requiredFirst: true,
        callbacksLast: true,
        sortShapeProp: true
      }
    ],
    'curly': 2,
    'arrow-body-style': ['error', 'always'],
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "JSXElement > JSXExpressionContainer > LogicalExpression[operator!='??']",
        message: 'Please use ternary operator instead',
      },
    ],
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
              [
                // Anything that starts with react
                // e.g: import { useState } from 'react'
                // e.g: import { useFela } from 'react-fela'
                '^react',
                // Anything that starts with next
                // e.g: import { useRouter } from 'next/router'
                '^next',
                // Anything that starts with a letter
                // e.g: import Downshift from 'downshift'
                '^[a-z]',
                // Anything that starts with @
                // e.g: import { yupResolver } from '@hookform/resolvers/yup'
                '^@',
                // Anything that starts with a dot
                // e.g: import { matchIsDate } from './utils/date
                '^\\.',
                // Side effect imports from lib
                // e.g: import 'react-toastify/dist/ReactToastify.css'
                '^\\u0000',
                // Side effect import that starts with a dot
                // e.g: import './setup-config'
                '^\\u0000\\.'
              ]
            ]
          }
        ]
      }
    }
  ]
}
