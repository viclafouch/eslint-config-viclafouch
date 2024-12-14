/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  name: 'variables',
  files: ['**/*.{js,mjs,cjs,jsx}'],
  rules: {
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // For code readability, prevent creating unclear naming
    'id-length': [
      'error',
      { min: 2, max: Infinity, exceptions: ['t', '_'], properties: 'never' }
    ],

    // Require the second parameter when using `parseInt`.
    // Ref: https://eslint.org/docs/rules/radix
    radix: 2,

    // Prefer object shorthands for properties.
    // Ref: https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [2, 'properties'],

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // Most common naming that is not always understandable
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

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'none',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],

    // disallow use of variables before they are defined
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true }
    ]
  }
}
