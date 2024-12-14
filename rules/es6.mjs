import pluginPromise from 'eslint-plugin-promise'

/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  files: ['**/*.{js,mjs,cjs,jsx}'],
  plugins: {
    promise: pluginPromise
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    // Always arrow functions
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'always'],

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // verify super() callings in constructors
    'constructor-super': 'error',

    // disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],

    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // disallow importing from the same path more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // Disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          'default', // use `export default` to provide a default export
          'then' // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
        ]
      }
    ],

    // disallow to use this/super before super() calling in constructors.
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],

    // suggest using of const declaration for variables that are never modified after declared
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

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // suggest using Reflect methods where applicable
    // https://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',

    // use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // suggest using the spread syntax instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // enforce spacing between object rest-spread
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // enforce usage of spacing in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // Disallow unnecessary return await
    // https://eslint.org/docs/latest/rules/no-return-await
    'no-return-await': 'error',

    // Disallow async functions which have no await expression
    // https://eslint.org/docs/latest/rules/require-await
    'require-await': 2,

    // Prefer to use async/await for Promises
    'promise/prefer-await-to-then': 2
  }
}
