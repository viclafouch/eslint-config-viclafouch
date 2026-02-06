import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  name: 'imports',
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  languageOptions: {
    sourceType: 'module'
  },
  plugins: {
    'simple-import-sort': simpleImportSort,
    import: importPlugin
  },
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
            // E.g: import { useState } from 'react'
            // E.g: import { useFela } from 'react-fela'
            '^react',
            // Anything that starts with next/remix/expo
            // E.g: import { useRouter } from 'next/router'
            // E.g: import { Stack } from 'expo-router'
            '^(next|@remix|expo)',
            // Anything that starts with a letter
            // E.g: import Downshift from 'downshift'
            '^[a-z]',
            // Anything that starts with an alias @/ or ~/
            // E.g: import ListDropdown from '@/components/ListDropdown'
            // E.g: import config from '~/config'
            '^(@|~)/',
            // Anything that starts with @ (scoped packages)
            // E.g: import { yupResolver } from '@hookform/resolvers/yup'
            '^@',
            // Anything that starts with a dot
            // E.g: import { matchIsDate } from './utils/date
            '^\\.',
            // Side effect imports from lib
            // E.g: import 'react-toastify/dist/ReactToastify.css'
            '^\\u0000',
            // Side effect import that starts with a dot
            // E.g: import './setup-config'
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
