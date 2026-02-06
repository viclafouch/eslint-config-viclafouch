import { fixupPluginRules } from '@eslint/compat'
import reactNative from 'eslint-plugin-react-native'
import globals from 'globals'

// Use @eslint/compat to fix legacy plugin for flat config
// https://github.com/Intellicode/eslint-plugin-react-native/issues/333
const reactNativePlugin = fixupPluginRules(reactNative)

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    name: 'react-native',
    plugins: {
      'react-native': reactNativePlugin
    },
    languageOptions: {
      // React Native uses browser + node globals, plus __DEV__
      // https://dev.to/ajmal_hasan/eslint-prettier-setup-for-latest-react-native-with-typescript-17do
      globals: {
        ...globals.browser,
        ...globals.node,
        __DEV__: 'readonly'
      }
    },
    // View link below for react-native rules documentation
    // https://github.com/Intellicode/eslint-plugin-react-native
    rules: {
      // Detect unused StyleSheet rules in React Native
      // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
      'react-native/no-unused-styles': 'error',

      // Enforce using platform-specific filenames when necessary
      // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
      'react-native/split-platform-components': 'error',

      // Detect inline styles in components
      // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
      'react-native/no-inline-styles': 'error',

      // Detect color literals in styles
      // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
      'react-native/no-color-literals': 'error',

      // Detect raw text outside of Text component
      // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md
      'react-native/no-raw-text': 'error',

      // Detect single element style arrays
      // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-single-element-style-arrays.md
      'react-native/no-single-element-style-arrays': 'error'
    }
  },
  {
    // Disable web-specific React rules for React Native
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    name: 'react-native/disable-web-rules',
    rules: {
      // Button type is not relevant in React Native
      'react/button-has-type': 'off',

      // iframe sandbox is not relevant in React Native
      'react/iframe-missing-sandbox': 'off',

      // target="_blank" is not relevant in React Native
      'react/jsx-no-target-blank': 'off',

      // HTML attributes are not relevant in React Native
      'react/no-invalid-html-attribute': 'off',

      // Allow useMemo and useCallback in React Native (performance is more critical on mobile)
      // Re-declare no-restricted-syntax without useMemo/useCallback selectors (setting 'off' would also disable import restrictions)
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ImportDeclaration[source.value="react"] ImportSpecifier',
          message:
            'Use React.useState, React.ReactNode, etc. instead of destructuring React imports.'
        },
        {
          selector:
            'ImportDeclaration[source.value="react-dom"] ImportSpecifier',
          message:
            'Use ReactDOM.createRoot, etc. instead of destructuring ReactDOM imports.'
        }
      ]
    }
  }
]
