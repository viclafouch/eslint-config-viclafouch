const { getTsconfig } = require('get-tsconfig')

function extractPaths(paths) {
  return Object.keys(paths).map((key) => {
    return key.split('/')[0]
  })
}

module.exports = {
  sortImports: (path) => {
    const tsConfig = getTsconfig(path, 'tsconfig.json')
    const jsConfig = getTsconfig(path, 'jsconfig.json')

    let pathsNames = []

    if (tsConfig && tsConfig.config.compilerOptions.paths) {
      pathsNames = extractPaths(tsConfig.config.compilerOptions.paths)
    } else if (jsConfig && jsConfig.config.compilerOptions.paths) {
      pathsNames = extractPaths(jsConfig.config.compilerOptions.paths)
    }

    return {
      files: ['*.ts?(x)', '*.js?(x)'],
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
                // Anything that starts with an alias (see jsconfig.json)
                // e.g: import ListDropdown from '@shared/components/ListDropdown'
                `^(${pathsNames.join('|')})(/.*|$)`,
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
  }
}
