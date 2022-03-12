module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    './.eslintrc-base.js'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }]
  }
}
