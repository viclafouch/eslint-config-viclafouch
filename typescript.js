module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    './.eslintrc.js'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off'
  }
}
