module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es6: true
  },
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
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
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  }
}
