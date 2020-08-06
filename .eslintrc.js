module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
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
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 130,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ]
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
}