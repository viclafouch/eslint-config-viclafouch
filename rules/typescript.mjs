import { defineConfig } from 'eslint/config'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import pluginPromise from 'eslint-plugin-promise'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/**
 * @type {import("eslint").Linter.Config}
 */
export default defineConfig(
  tseslint.configs.recommended,
  {
    name: 'typescript/setup',
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.node,
        ...globals.vitest
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.cjs']
        },
        ecmaFeatures: {
          jsx: true
        }
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
      promise: pluginPromise
    },
    settings: {
      // Apply special parsing for TypeScript files
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
      },
      // Append 'ts' extensions to @viclafouch/eslint 'import/resolver' setting
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts']
        }
      },
      // Append 'ts' extensions to @viclafouch/eslint 'import/extensions' setting
      'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
      // Resolve type definition packages
      'import/external-module-folders': ['node_modules', 'node_modules/@types']
    }
  },
  {
    name: 'typescript/rules',
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    rules: {
      // ==========================================
      // Best Practices
      // ==========================================

      // Enforces getter/setter pairs in objects
      // https://eslint.org/docs/rules/accessor-pairs
      'accessor-pairs': 'off',

      // Force curly everytime
      // https://eslint.org/docs/rules/curly
      curly: ['error', 'all'],

      // Enforces return statements in callbacks of array's methods
      // https://eslint.org/docs/rules/array-callback-return
      'array-callback-return': [
        'error',
        { allowImplicit: true, checkForEach: true }
      ],

      // Enforce for loop update clause moving the counter in the right direction
      // https://eslint.org/docs/latest/rules/for-direction
      'for-direction': 'error',

      // Enforce return statements in getters
      // https://eslint.org/docs/latest/rules/getter-return
      'getter-return': 'error',

      // Disallow returning values from setters
      // https://eslint.org/docs/latest/rules/no-setter-return
      'no-setter-return': 'error',

      // Treat var statements as if they were block scoped
      // https://eslint.org/docs/rules/block-scoped-var
      'block-scoped-var': 'error',

      // Specify the maximum cyclomatic complexity allowed in a program
      // https://eslint.org/docs/rules/complexity
      complexity: ['error', 20],

      // Disallow nested ternary expressions
      // https://eslint.org/docs/latest/rules/no-nested-ternary
      'no-nested-ternary': 'error',

      // Enforce a maximum number of parameters in function definitions
      // https://eslint.org/docs/latest/rules/max-params
      'max-params': ['error', { max: 3 }],

      // Enforce a maximum depth of nested blocks
      // https://eslint.org/docs/latest/rules/max-depth
      'max-depth': ['error', { max: 3 }],

      // Enforce a maximum number of lines per function
      // https://eslint.org/docs/latest/rules/max-lines-per-function
      'max-lines-per-function': [
        'error',
        { max: 250, skipBlankLines: true, skipComments: true }
      ],

      // Enforce that class methods use "this"
      // https://eslint.org/docs/rules/class-methods-use-this
      'class-methods-use-this': [
        'error',
        {
          exceptMethods: []
        }
      ],

      // Require return statements to either always or never specify values
      // https://eslint.org/docs/rules/consistent-return
      'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],

      // Disallow comparing against -0
      // https://eslint.org/docs/latest/rules/no-compare-neg-zero
      'no-compare-neg-zero': 'error',

      // Disallow sparse arrays
      // https://eslint.org/docs/latest/rules/no-sparse-arrays
      'no-sparse-arrays': 'error',

      // Disallow expressions where the operation doesn't affect the value
      // https://eslint.org/docs/latest/rules/no-constant-binary-expression
      'no-constant-binary-expression': 'error',

      // Require default case in switch statements
      // https://eslint.org/docs/rules/default-case
      'default-case': ['error'],

      // Enforce default clauses in switch statements to be last
      // https://eslint.org/docs/rules/default-case-last
      'default-case-last': 'error',

      // Require the use of === and !==
      // https://eslint.org/docs/latest/rules/eqeqeq
      eqeqeq: ['error', 'always'],

      // Enforces consistent newlines before or after dots
      // https://eslint.org/docs/rules/dot-location
      'dot-location': ['error', 'property'],

      // Make sure for-in loops have an if statement
      // https://eslint.org/docs/rules/guard-for-in
      'guard-for-in': 'error',

      // Disallow the use of alert, confirm, and prompt
      // https://eslint.org/docs/rules/no-alert
      'no-alert': 'error',

      // Disallow lexical declarations in case/default clauses
      // https://eslint.org/docs/rules/no-case-declarations
      'no-case-declarations': 'error',

      // Disallow returning value in constructor
      // https://eslint.org/docs/rules/no-constructor-return
      'no-constructor-return': 'error',

      // Disallow else after a return in an if
      // https://eslint.org/docs/rules/no-else-return
      'no-else-return': ['error', { allowElseIf: false }],

      // Disallow empty destructuring patterns
      // https://eslint.org/docs/rules/no-empty-pattern
      'no-empty-pattern': 'error',

      // Disallow comparisons to null without a type-checking operator
      // https://eslint.org/docs/rules/no-eq-null
      'no-eq-null': 'off',

      // Disallow adding to native types
      // https://eslint.org/docs/rules/no-extend-native
      'no-extend-native': 'error',

      // Disallow Unnecessary Labels
      // https://eslint.org/docs/rules/no-extra-label
      'no-extra-label': 'error',

      // Disallow fallthrough of case statements
      // https://eslint.org/docs/rules/no-fallthrough
      'no-fallthrough': 'error',

      // Disallow the use of leading or trailing decimal points in numeric literals
      // https://eslint.org/docs/rules/no-floating-decimal
      'no-floating-decimal': 'error',

      // Disallow reassignments of native objects or read-only globals
      // https://eslint.org/docs/rules/no-global-assign
      'no-global-assign': ['error', { exceptions: [] }],

      // Deprecated in favor of no-global-assign
      // https://eslint.org/docs/rules/no-native-reassign
      'no-native-reassign': 'off',

      // Disallow implicit type conversions
      // https://eslint.org/docs/rules/no-implicit-coercion
      'no-implicit-coercion': 'error',

      // Disallow reassigning function declarations
      // https://eslint.org/docs/latest/rules/no-func-assign
      'no-func-assign': 'error',

      // Disallow assigning to imported bindings
      // https://eslint.org/docs/latest/rules/no-import-assign
      'no-import-assign': 'error',

      // Disallow var and named functions in global scope
      // https://eslint.org/docs/rules/no-implicit-globals
      'no-implicit-globals': 'off',

      // Disallow this keywords outside of classes or class-like objects
      // https://eslint.org/docs/rules/no-invalid-this
      'no-invalid-this': 'off',

      // Disallow variable or function declarations in nested blocks
      // https://eslint.org/docs/latest/rules/no-inner-declarations
      'no-inner-declarations': ['error', 'both'],

      // Disallow usage of __iterator__ property
      // https://eslint.org/docs/rules/no-iterator
      'no-iterator': 'error',

      // Disallow use of labels for anything other than loops and switches
      // https://eslint.org/docs/rules/no-labels
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

      // Disallow unnecessary nested blocks
      // https://eslint.org/docs/rules/no-lone-blocks
      'no-lone-blocks': 'error',

      // Disallow use of multiple spaces
      // https://eslint.org/docs/rules/no-multi-spaces
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false
        }
      ],

      // Disallow use of multiline strings
      // https://eslint.org/docs/rules/no-multi-str
      'no-multi-str': 'error',

      // Disallow use of new operator when not part of the assignment or comparison
      // https://eslint.org/docs/rules/no-new
      'no-new': 'error',

      // Disallows creating new instances of String, Number, and Boolean
      // https://eslint.org/docs/rules/no-new-wrappers
      'no-new-wrappers': 'error',

      // Disallow use of (old style) octal literals
      // https://eslint.org/docs/rules/no-octal
      'no-octal': 'error',

      // Disallow use of octal escape sequences in string literals
      // https://eslint.org/docs/rules/no-octal-escape
      'no-octal-escape': 'error',

      // Disallow reassignment of function parameters
      // https://eslint.org/docs/rules/no-param-reassign
      'no-param-reassign': [
        'error',
        {
          ignorePropertyModificationsForRegex: [
            'draft',
            'context2D',
            'canvasElement'
          ]
        }
      ],

      // Disallow certain object properties
      // https://eslint.org/docs/rules/no-restricted-properties
      'no-restricted-properties': [
        'error',
        {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated'
        },
        {
          object: 'global',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead'
        },
        {
          object: 'self',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead'
        },
        {
          object: 'window',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead'
        },
        {
          object: 'global',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead'
        },
        {
          object: 'self',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead'
        },
        {
          object: 'window',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead'
        },
        {
          object: 'Math',
          property: 'pow',
          message: 'Use the exponentiation operator (**) instead.'
        }
      ],

      // Disallow use of assignment in return statement
      // https://eslint.org/docs/rules/no-return-assign
      'no-return-assign': ['error', 'always'],

      // Disallow ternary operators when simpler alternatives exist
      // https://eslint.org/docs/rules/no-unneeded-ternary
      'no-unneeded-ternary': 'error',

      // Disallow assignments where both sides are exactly the same
      // https://eslint.org/docs/rules/no-self-assign
      'no-self-assign': [
        'error',
        {
          props: true
        }
      ],

      // Disallow comparisons where both sides are exactly the same
      // https://eslint.org/docs/rules/no-self-compare
      'no-self-compare': 'error',

      // Restrict what can be thrown as an exception
      // https://eslint.org/docs/rules/no-throw-literal
      'no-throw-literal': 'error',

      // Disallow unmodified conditions of loops
      // https://eslint.org/docs/rules/no-unmodified-loop-condition
      'no-unmodified-loop-condition': 'error',

      // Disallow negating the left operand of relational operators
      // https://eslint.org/docs/latest/rules/no-unsafe-negation
      'no-unsafe-negation': 'error',

      // Enforce comparing typeof expressions against valid strings
      // https://eslint.org/docs/latest/rules/valid-typeof
      'valid-typeof': 'error',

      // Require calls to isNaN() when checking for NaN
      // https://eslint.org/docs/latest/rules/use-isnan
      'use-isnan': 'error',

      // Disallow unreachable code after return, throw, continue, and break statements
      // https://eslint.org/docs/latest/rules/no-unreachable
      'no-unreachable': 'error',

      // Disallow unused labels
      // https://eslint.org/docs/rules/no-unused-labels
      'no-unused-labels': 'error',

      // Disallow unnecessary .call() and .apply()
      // https://eslint.org/docs/rules/no-useless-call
      'no-useless-call': 'off',

      // Disallow unnecessary catch clauses
      // https://eslint.org/docs/rules/no-useless-catch
      'no-useless-catch': 'error',

      // Disallow useless string concatenation
      // https://eslint.org/docs/rules/no-useless-concat
      'no-useless-concat': 'error',

      // Disallow unnecessary string escaping
      // https://eslint.org/docs/rules/no-useless-escape
      'no-useless-escape': 'error',

      // Disallow redundant return; keywords
      // https://eslint.org/docs/rules/no-useless-return
      'no-useless-return': 'error',

      // Require using Error objects as Promise rejection reasons
      // https://eslint.org/docs/rules/prefer-promise-reject-errors
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

      // Suggest using named capture group in regular expression
      // https://eslint.org/docs/rules/prefer-named-capture-group
      'prefer-named-capture-group': 'off',

      // Require using regex literals instead of RegExp constructor
      // https://eslint.org/docs/rules/prefer-regex-literals
      'prefer-regex-literals': [
        'error',
        {
          disallowRedundantWrapping: true
        }
      ],

      // Require use of the second argument for parseInt()
      // https://eslint.org/docs/rules/radix
      radix: 'error',

      // Enforce the use of u flag on RegExp
      // https://eslint.org/docs/rules/require-unicode-regexp
      'require-unicode-regexp': 'off',

      // ==========================================
      // Variables
      // ==========================================

      // Enforce or disallow variable initializations at definition
      // https://eslint.org/docs/rules/init-declarations
      'init-declarations': 'off',

      // Disallow the catch clause parameter name being the same as a variable in the outer scope
      // https://eslint.org/docs/rules/no-catch-shadow
      'no-catch-shadow': 'off',

      // Disallow deletion of variables
      // https://eslint.org/docs/latest/rules/no-delete-var
      'no-delete-var': 'error',

      // Disallow labels that share a name with a variable
      // https://eslint.org/docs/rules/no-label-var
      'no-label-var': 'error',

      // For code readability, prevent creating unclear naming
      // https://eslint.org/docs/rules/id-length
      'id-length': [
        'error',
        { min: 2, max: Infinity, exceptions: ['t', '_'], properties: 'never' }
      ],

      // Prefer object shorthands for properties
      // https://eslint.org/docs/rules/object-shorthand
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true
        }
      ],

      // Disallow shadowing of names such as arguments
      // https://eslint.org/docs/rules/no-shadow-restricted-names
      'no-shadow-restricted-names': 'error',

      // Disallow use of undeclared variables unless mentioned in a /*global */ block
      // https://eslint.org/docs/rules/no-undef
      'no-undef': ['error', { typeof: true }],

      // Disallow use of undefined when initializing variables
      // https://eslint.org/docs/rules/no-undef-init
      'no-undef-init': 'error',

      // Most common naming that is not always understandable
      // https://eslint.org/docs/rules/id-denylist
      'id-denylist': [
        'error',
        'err',
        'cb',
        'arr',
        'acc',
        'idx',
        'ctx',
        'res',
        'val',
        'obj',
        'el',
        'elem',
        'req',
        'str'
      ],

      // ==========================================
      // ES6+
      // ==========================================

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
      // https://eslint.org/docs/rules/constructor-super
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
          restrictedNamedExports: ['default', 'then']
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
      // https://eslint.org/docs/rules/no-var
      'no-var': 'error',

      // Suggest using arrow functions as callbacks
      // https://eslint.org/docs/rules/prefer-arrow-callback
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true
        }
      ],

      // Suggest using of const declaration for variables that are never modified after declared
      // https://eslint.org/docs/rules/prefer-const
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

      // Disallow using an async function as a Promise executor
      // https://eslint.org/docs/latest/rules/no-async-promise-executor
      'no-async-promise-executor': 'error',

      // Disallow template literal placeholder syntax in regular strings
      // https://eslint.org/docs/latest/rules/no-template-curly-in-string
      'no-template-curly-in-string': 'error',

      // ==========================================
      // Errors
      // ==========================================

      // Disallow await inside of loops
      // https://eslint.org/docs/rules/no-await-in-loop
      'no-await-in-loop': 'error',

      // Disallow assignment in conditional expressions
      // https://eslint.org/docs/latest/rules/no-cond-assign
      'no-cond-assign': ['error', 'always'],

      // Disallow use of console
      // https://eslint.org/docs/rules/no-console
      // EXCEPTION: This rule uses 'warn' instead of 'error' to allow console statements during development
      'no-console': 'warn',

      // Disallow use of constant expressions in conditions
      // https://eslint.org/docs/latest/rules/no-constant-condition
      'no-constant-condition': 'error',

      // Disallow use of debugger
      // https://eslint.org/docs/latest/rules/no-debugger
      'no-debugger': 'error',

      // Disallow duplicate conditions in if-else-if chains
      // https://eslint.org/docs/rules/no-dupe-else-if
      'no-dupe-else-if': 'error',

      // Disallow duplicate case labels
      // https://eslint.org/docs/latest/rules/no-duplicate-case
      'no-duplicate-case': 'error',

      // Disallow duplicate keys when creating object literals
      // https://eslint.org/docs/latest/rules/no-dupe-keys
      'no-dupe-keys': 'error',

      // Disallow reassigning exceptions in catch clauses
      // https://eslint.org/docs/latest/rules/no-ex-assign
      'no-ex-assign': 'error',

      // Disallow unnecessary semicolons
      // https://eslint.org/docs/rules/no-extra-semi
      'no-extra-semi': 'error',

      // ==========================================
      // Node
      // ==========================================

      // Require all requires be top-level
      // https://eslint.org/docs/rules/global-require
      'global-require': 'error',

      // ==========================================
      // Style
      // ==========================================

      // Enforce camelcase naming convention
      // https://eslint.org/docs/latest/rules/camelcase
      camelcase: 'error',

      // "red" === color is a "Yoda" condition, prefer color === "red" instead
      // https://eslint.org/docs/latest/rules/yoda
      yoda: 'error',

      // Disallow the unary operators ++ and --
      // https://eslint.org/docs/latest/rules/no-plusplus
      'no-plusplus': 'error',

      // Disallow inline comments after code
      // https://eslint.org/docs/latest/rules/no-inline-comments
      'no-inline-comments': 'error',

      // Require or disallow an empty line between class members
      // https://eslint.org/docs/latest/rules/lines-between-class-members
      'lines-between-class-members': ['error', 'always'],

      // Require or disallow padding lines between statements
      // https://eslint.org/docs/rules/padding-line-between-statements
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['return', 'multiline-block-like']
        },
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' }
      ],

      // ==========================================
      // Unicorn
      // ==========================================

      // Disallow creating a variable and immediately mutating it
      // Enforce kebab-case for filenames
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase'
        }
      ],

      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-immediate-mutation.md
      'unicorn/no-immediate-mutation': 'error',

      // Disallow useless arguments when constructing Set, Map, WeakSet, WeakMap
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-collection-argument.md
      'unicorn/no-useless-collection-argument': 'error',

      // Prefer class fields over constructor assignments
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-class-fields.md
      'unicorn/prefer-class-fields': 'error',

      // Prefer Array#toReversed() over Array#reverse() to avoid mutation
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reverse.md
      'unicorn/no-array-reverse': 'error',

      // Prefer Array#toSorted() over Array#sort() to avoid mutation
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort.md
      'unicorn/no-array-sort': 'error',

      // Require using new when throwing an error
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
      'unicorn/throw-new-error': 'error',

      // Prefer includes() over indexOf() when checking for existence
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
      'unicorn/prefer-includes': 'error',

      // Prefer find() over filter()[0] when searching for a single element
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
      'unicorn/prefer-array-find': 'error',

      // Prefer startsWith() and endsWith() over regex or slice comparisons
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
      'unicorn/prefer-string-starts-ends-with': 'error',

      // Prefer .at() for accessing elements by negative index
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
      'unicorn/prefer-at': 'error',

      // Prefer Number static properties over global ones
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
      'unicorn/prefer-number-properties': 'error',

      // Prefer for...of over Array#forEach
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
      'unicorn/no-array-for-each': 'error',

      // Prefer Array#flat() over legacy techniques to flatten arrays
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
      'unicorn/prefer-array-flat': 'error',

      // Prefer flatMap() over map().flat()
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
      'unicorn/prefer-array-flat-map': 'error',

      // Disallow useless undefined
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
      'unicorn/no-useless-undefined': 'error',

      // Prefer String#replaceAll() over regex with global flag
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
      'unicorn/prefer-string-replace-all': 'error',

      // Prefer String#trimStart() / String#trimEnd() over trimLeft() / trimRight()
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
      'unicorn/prefer-string-trim-start-end': 'error',

      // Disallow if statements as the only statement in else blocks
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
      'unicorn/no-lonely-if': 'error',

      // Prefer RegExp#test() over String#match() for boolean checks
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
      'unicorn/prefer-regexp-test': 'error',

      // Prefer modern DOM APIs
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
      'unicorn/prefer-modern-dom-apis': 'error',

      // Prefer [...iterable] over Array.from(iterable)
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
      'unicorn/prefer-spread': 'off',

      // Prefer ternary expressions over simple if-else statements (DISABLED - prefer if-else for clarity)
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
      'unicorn/prefer-ternary': 'off',

      // Prefer omitting catch binding when unused
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
      'unicorn/prefer-optional-catch-binding': 'off',

      // Disallow negated conditions when alternative exists
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
      'unicorn/no-negated-condition': 'off',

      // Prefer TypeError for type-related errors
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
      'unicorn/prefer-type-error': 'off',

      // Prefer Date.now() over new Date().getTime()
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
      'unicorn/prefer-date-now': 'error',

      // Prefer === undefined over typeof === 'undefined'
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
      'unicorn/no-typeof-undefined': 'error',

      // Prefer Object.fromEntries() over reduce to create objects
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
      'unicorn/prefer-object-from-entries': 'error',

      // Prefer Set#has() over Array#includes() for frequent checks
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
      'unicorn/prefer-set-has': 'off',

      // Prefer some() over find() !== undefined for boolean checks
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
      'unicorn/prefer-array-some': 'error',

      // Disallow new Array() and prefer Array.from({length: n})
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
      'unicorn/no-new-array': 'error',

      // Prefer default parameters over reassignment
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
      'unicorn/prefer-default-parameters': 'error',

      // Prefer negative index over length minus index
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
      'unicorn/prefer-negative-index': 'error',

      // Enforce usage of the `node:` prefix for builtin imports
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
      'unicorn/prefer-node-protocol': 'error',

      // ==========================================
      // Promise
      // ==========================================

      // Prefer to use async/await for Promises
      // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md
      'promise/prefer-await-to-then': 'off',

      // ==========================================
      // TypeScript (with ESLint rule replacements)
      // ==========================================

      // Enforce default parameters to be last
      // https://typescript-eslint.io/rules/default-param-last
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',

      // Enforce dot notation whenever possible
      // https://typescript-eslint.io/rules/dot-notation
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

      // Disallow empty functions
      // https://typescript-eslint.io/rules/no-empty-function
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'functions', 'methods']
        }
      ],

      // Disallow variable redeclaration
      // https://typescript-eslint.io/rules/no-redeclare
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',

      // Disallow variable declarations from shadowing variables declared in the outer scope
      // https://typescript-eslint.io/rules/no-shadow
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      // Disallow unused expressions
      // https://typescript-eslint.io/rules/no-unused-expressions
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false
        }
      ],

      // Disallow unused variables
      // https://typescript-eslint.io/rules/no-unused-vars
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],

      // Disallow the use of variables before they are defined
      // https://typescript-eslint.io/rules/no-use-before-define
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'off',

      // Disallow unnecessary constructors
      // https://typescript-eslint.io/rules/no-useless-constructor
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',

      // Disallow async functions which have no await expression
      // https://typescript-eslint.io/rules/require-await
      '@typescript-eslint/require-await': 'off',

      // Enforce consistent returning of awaited values
      // https://typescript-eslint.io/rules/return-await
      'no-return-await': 'off',
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],

      // Disallow @ts-<directive> comments or require descriptions after directives
      // https://typescript-eslint.io/rules/ban-ts-comment
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          'ts-check': false
        }
      ],

      // Naming convention for type parameters
      // Enforce naming conventions for variables, functions, types, and type parameters
      // https://typescript-eslint.io/rules/naming-convention
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
          custom: {
            regex: '^(T|T[A-Z][A-Za-z]+)$',
            match: true
          }
        }
      ],

      // Require consistently using T[] instead of Array<T>
      // https://typescript-eslint.io/rules/array-type
      '@typescript-eslint/array-type': 'error',

      // Enforce type definitions to consistently use type instead of interface
      // https://typescript-eslint.io/rules/consistent-type-definitions
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // Disallow the any type
      // https://typescript-eslint.io/rules/no-explicit-any
      '@typescript-eslint/no-explicit-any': 'error',

      // Require Promise-like statements to be handled appropriately
      // https://typescript-eslint.io/rules/no-floating-promises
      '@typescript-eslint/no-floating-promises': [
        'error',
        { ignoreVoid: true }
      ],

      // Disallow explicit return type annotations on functions (trust inference)
      // https://typescript-eslint.io/rules/explicit-function-return-type
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Forbid delete array, use splice for example
      // https://typescript-eslint.io/rules/no-array-delete
      '@typescript-eslint/no-array-delete': 'error',

      // Don't do array.filter(callback)[0], use array.find instead
      // https://typescript-eslint.io/rules/prefer-find
      '@typescript-eslint/prefer-find': 'error',

      // Prefer to use String.startsWith and String.endsWith
      // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',

      // No more "as Record<any, any>" in Array.reduce initial value, use generics
      // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',

      // Disallow duplicate constituents of union or intersection types
      // https://typescript-eslint.io/rules/no-duplicate-type-constituents
      '@typescript-eslint/no-duplicate-type-constituents': 'error',

      // Disallow using code marked as @deprecated
      // https://typescript-eslint.io/rules/no-deprecated
      '@typescript-eslint/no-deprecated': 'error',

      // Disallow using the spread operator when it might cause unexpected behavior
      // https://typescript-eslint.io/rules/no-misused-spread
      '@typescript-eslint/no-misused-spread': 'error',

      // Enforce import type { T }
      // https://typescript-eslint.io/rules/consistent-type-imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' }
      ],

      // Don't over-define types for simple things like strings
      // https://typescript-eslint.io/rules/no-inferrable-types
      '@typescript-eslint/no-inferrable-types': [
        'error',
        { ignoreParameters: true }
      ],

      // Disallow TypeScript namespaces
      // https://typescript-eslint.io/rules/no-namespace
      '@typescript-eslint/no-namespace': 'error',

      // Disallow non-null assertions after an optional chain expression
      // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

      // Disallow default values that will never be used (type guarantees non-undefined)
      // https://typescript-eslint.io/rules/no-useless-default-assignment
      '@typescript-eslint/no-useless-default-assignment': 'error',

      // Disallow passing a value-returning function where void is expected
      // https://typescript-eslint.io/rules/strict-void-return
      '@typescript-eslint/strict-void-return': 'off'
    }
  },
  {
    name: 'typescript/disable-type-checked-for-js',
    files: ['./**/*.js', './**/*.cjs'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    name: 'typescript/ts-specific-overrides',
    files: ['**/*.ts?(x)'],
    rules: {
      // The following rules are enabled but already checked (more thoroughly) by the TypeScript compiler
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      'constructor-super': 'off',
      'no-const-assign': 'off',
      'no-dupe-args': 'off',
      'no-dupe-class-members': 'off',
      'no-dupe-keys': 'off',
      'no-func-assign': 'off',
      'no-import-assign': 'off',
      'no-new-native-nonconstructor': 'off',
      'no-new-symbol': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      'no-setter-return': 'off',
      'no-this-before-super': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'no-unsafe-negation': 'off',

      // Disable import rules that don't work well with TypeScript
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off'
    }
  }
)
