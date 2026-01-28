import pluginPromise from 'eslint-plugin-promise'

/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  name: 'es6',
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  plugins: {
    promise: pluginPromise
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Require braces around arrow function bodies
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'always'],

    // Require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // Verify super() callings in constructors
    'constructor-super': 'error',

    // Disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow duplicate class members
    // https://eslint.org/docs/latest/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],

    // Disallow modifying variables that are declared using const
    // https://eslint.org/docs/latest/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow importing from the same path more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    // Replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // Disallow new operators with global non-constructor functions
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': 'error',

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/latest/rules/no-promise-executor-return
    'no-promise-executor-return': 'error',

    // Disallow invalid regular expression strings in RegExp constructors
    // https://eslint.org/docs/latest/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          // Use `export default` to provide a default export
          'default',
          // This will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
          'then'
        ]
      }
    ],

    // Disallow this/super before calling super() in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': 'error',

    // Disallow control flow statements in finally blocks
    // https://eslint.org/docs/latest/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],

    // Require let or const instead of var
    'no-var': 'error',

    // Require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],

    // Suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // Suggest using Reflect methods where applicable
    // https://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',

    // Use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Suggest using the spread syntax instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Enforce spacing between object rest-spread
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // Enforce usage of spacing in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // Disallow unnecessary return await
    // https://eslint.org/docs/latest/rules/no-return-await
    'no-return-await': 'error',

    // Disallow async functions which have no await expression
    // https://eslint.org/docs/latest/rules/require-await
    'require-await': 'off',

    // Prefer to use async/await for Promises
    'promise/prefer-await-to-then': 'off',

    // Disallow using an async function as a Promise executor
    // https://eslint.org/docs/latest/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error'
  }
}
