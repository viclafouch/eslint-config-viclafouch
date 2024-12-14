import appRoot from 'app-root-path'
import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { getTsconfig } from 'get-tsconfig'

function extractPaths(paths) {
  return Object.keys(paths).map((key) => {
    return key.split('/')[0]
  })
}

const tsConfig = getTsconfig(appRoot.path, 'tsconfig.json')
const jsConfig = getTsconfig(appRoot.path, 'jsconfig.json')

let pathsNames = []

if (tsConfig && tsConfig.config.compilerOptions.paths) {
  pathsNames = extractPaths(tsConfig.config.compilerOptions.paths)
} else if (jsConfig && jsConfig.config.compilerOptions.paths) {
  pathsNames = extractPaths(jsConfig.config.compilerOptions.paths)
}

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
            // Anything that starts with next
            // E.g: import { useRouter } from 'next/router'
            '^(next|@remix)',
            // Anything that starts with a letter
            // E.g: import Downshift from 'downshift'
            '^[a-z]',
            // Anything that starts with an alias (see jsconfig.json)
            // E.g: import ListDropdown from '@shared/components/ListDropdown'
            `^(${pathsNames.join('|')})(/.*|$)`,
            // Anything that starts with @
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
