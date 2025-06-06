import tseslint from 'typescript-eslint'
import bestPracticesConfig from './best-practices.mjs'
import es6Config from './es6.mjs'
import variablesConfig from './variables.mjs'

const { rules: baseBestPracticesRules } = bestPracticesConfig
const { rules: baseVariablesRules } = variablesConfig
const { rules: baseES6Rules } = es6Config

/**
 * @type {import("eslint").Linter.Config}
 */
export default tseslint.config(
  tseslint.configs.recommended,
  {
    name: 'typescript',
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs', '*.cjs']
        }
      }
    },
    settings: {
      // Apply special parsing for TypeScript files
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
      },
      // Append 'ts' extensions to @viclafouch/eslint 'import/resolver' setting
      // Original: ['.mjs', '.js', '.json']
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts']
        }
      },
      // Append 'ts' extensions to @viclafouch/eslint 'import/extensions' setting
      // Original: ['.js', '.mjs', '.jsx']
      'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
      // Resolve type definition packages
      'import/external-module-folders': ['node_modules', 'node_modules/@types']
    },
    rules: {
      // Replace @viclafouch/eslint 'default-param-last' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.md
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last':
        baseBestPracticesRules['default-param-last'],

      // Replace @viclafouch/eslint 'dot-notation' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

      // Replace @viclafouch/eslint 'no-empty-function' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function':
        baseBestPracticesRules['no-empty-function'],

      // Replace @viclafouch/eslint 'no-redeclare' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

      // Replace @viclafouch/eslint 'no-shadow' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

      // Replace @viclafouch/eslint 'no-unused-expressions' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions':
        baseBestPracticesRules['no-unused-expressions'],

      // Replace @viclafouch/eslint 'no-unused-vars' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

      // Replace @viclafouch/eslint 'no-use-before-define' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define':
        baseVariablesRules['no-use-before-define'],

      // Replace @viclafouch/eslint 'no-useless-constructor' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor':
        baseES6Rules['no-useless-constructor'],

      '@typescript-eslint/require-await': baseES6Rules['require-await'],

      // Replace @viclafouch/eslint 'no-return-await' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
      'no-return-await': 'off',
      '@typescript-eslint/return-await': [
        baseES6Rules['no-return-await'],
        'in-try-catch'
      ],

      // Accept banning ts lines
      '@typescript-eslint/ban-ts-comment': 'off',

      // Naming convention
      '@typescript-eslint/naming-convention': [
        'error',
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

      // Forbid delete array, use splice for example
      // https://typescript-eslint.io/rules/no-array-delete/
      '@typescript-eslint/no-array-delete': 'error',

      // Don't do array.filter(callback)[0], use arrat.find instead
      // https://typescript-eslint.io/rules/prefer-find
      '@typescript-eslint/prefer-find': 'error',

      // Prefer to use String.startsWith and String.endsWith
      // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',

      // Prefer to use unknown instead of any for error in catch callback
      // https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
      // '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

      // No more "as Record<any, any>" in Array.reduce initial value, use generics
      // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',

      // Disallow duplicate constituents of union or intersection types.
      // https://typescript-eslint.io/rules/no-duplicate-type-constituents
      '@typescript-eslint/no-duplicate-type-constituents': 'error',

      // Disallow using code marked as @deprecated.
      // https://typescript-eslint.io/rules/no-deprecated
      '@typescript-eslint/no-deprecated': 'error',

      // Disallow using the spread operator when it might cause unexpected behavior.
      // https://typescript-eslint.io/rules/no-misused-spread/
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
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error'

      // Prefer using nullish coalescing (??) over logical (||) when possible.
      // '@typescript-eslint/prefer-nullish-coalescing': 'error'

      // '@typescript-eslint/ban-types': [
      //   'error',
      //   {
      //     Types: {
      //       // Omit is not strict enought
      //       Omit: {
      //         // https://twitter.com/erikras/status/1673694889974833152
      //         Message:
      //           'Use StrictOmit instead by using reset.d.ts from @viclafouch/eslint-config-viclafouch/reset.d. See https://github.com/viclafouch/eslint-config-viclafouch#better-typing',
      //         FixWith: 'StrictOmit'
      //       }
      //     }
      //   }
      // ]
    }
  },
  {
    files: ['./**/*.js', './**/*.cjs'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    files: ['*.ts?(x)'],
    rules: {
      // The following rules are enabled in @viclafouch/eslint config, but are already checked (more thoroughly) by the TypeScript compiler
      // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
      // Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      'constructor-super': 'off',
      'no-const-assign': 'off',
      // https://eslint.org/docs/latest/rules/no-dupe-args#handled_by_typescript
      'no-dupe-args': 'off',
      // https://eslint.org/docs/latest/rules/no-dupe-class-members#handled_by_typescript
      'no-dupe-class-members': 'off',
      // https://eslint.org/docs/latest/rules/no-dupe-keys#handled_by_typescript
      'no-dupe-keys': 'off',
      // https://eslint.org/docs/latest/rules/no-func-assign#handled_by_typescript
      'no-func-assign': 'off',
      // https://eslint.org/docs/latest/rules/no-import-assign#handled_by_typescript
      'no-import-assign': 'off',
      // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor#handled_by_typescript
      'no-new-native-nonconstructor': 'off',
      'no-new-symbol': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      // https://eslint.org/docs/latest/rules/no-setter-return#handled_by_typescript
      'no-setter-return': 'off',
      // https://eslint.org/docs/latest/rules/no-this-before-super#handled_by_typescript
      'no-this-before-super': 'off',
      // https://eslint.org/docs/latest/rules/no-undef#handled_by_typescript
      'no-undef': 'off',
      // https://eslint.org/docs/latest/rules/no-unreachable#handled_by_typescript
      'no-unreachable': 'off',
      // https://eslint.org/docs/latest/rules/no-unsafe-negation#handled_by_typescript
      'no-unsafe-negation': 'off',
      // The following rules are enabled in @viclafouch/eslint config, but are recommended to be disabled within TypeScript projects
      // See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      // Disable `import/no-unresolved`, see README.md for details
      'import/no-unresolved': 'off'
    }
  }
)
