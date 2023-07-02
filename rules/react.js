/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  // View link below for react rules documentation
  // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
  rules: {
    // Specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // Forbid the use of Proptypes
    'react/prop-types': 'off',

    // defaultProps is deprecated
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments'
      }
    ],

    // Forbid certain props on DOM Nodes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': ['off', { forbid: [] }],

    // Enforce boolean attributes notation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': 'error',

    // Validate closing bracket location in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Validate closing tag location in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 'error',

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // Validate props indentation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    // Turned off because it has too many false positives
    'react/jsx-key': 'off',

    // Limit maximum of props on a single line in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' }
    ],

    // Prevent usage of .bind() in JSX props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true
      }
    ],

    // Prevent duplicate props in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Prevent usage of unwrapped JSX strings
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': ['off', { noStrings: true }],

    // Disallow undeclared variables in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],

    // Enforce defaultProps declarations alphabetical sorting
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true
      }
    ],

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Prevent usage of dangerous JSX properties
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // Prevent usage of deprecated methods
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['error'],

    // Prevent direct mutation of this.state
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'off',

    // Prevent multiple component definition per file
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 'off',

    // Prevent using string references
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Prevent usage of unknown DOM property
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true }
    ],

    // Prevent extra closing tags for components without children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // Prevent missing parentheses around multilines JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ],

    // Require that the first prop in a JSX element be on a new line when the element is multiline
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // Enforce spacing around jsx equals signs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': ['error', 'never'],

    // Enforce JSX indentation
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['error', 2],

    // Disallow target="_blank" on links
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

    // only .jsx files may have JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

    // prevent accidental JS comments from being injected into JSX as text
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // disallow using React.render/ReactDOM.render's return value
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // Forbid certain props on Components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': ['off', { forbid: [] }],

    // Prevent problem with children and props.dangerouslySetInnerHTML
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // Prevent unused propType definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true
      }
    ],

    // Require style prop value be an object or var
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // Prevent invalid characters from appearing in markup
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',

    // Prevent passing of children as props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    // Validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],

    // Enforce spaces before the closing bracket of self-closing JSX elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    // Deprecated in favor of jsx-tag-spacing
    'react/jsx-space-before-closing': ['off', 'always'],

    // Prevent usage of Array index in keys
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',

    // Prevent unused state values
    // https://github.com/jsx-eslint/eslint-plugin-react/pull/1103/
    'react/no-unused-state': 'error',

    // Enforces consistent naming for boolean props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: ''
      }
    ],

    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' }
    ],

    // One JSX Element Per Line
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always'],

    // Prevent usage of button elements without an explicit type attribute
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false
      }
    ],

    // Ensures inline tags are not rendered without spaces between them
    'react/jsx-child-element-spacing': 'off',

    // Disallow multiple spaces between inline JSX props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'error',

    // Enforce shorthand or standard form for React fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce linebreaks in curly braces in JSX attributes and expressions.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ],

    // Disallow unnecessary fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'error',

    // This rule is turned off with the new JSX transform
    // since `eslint-plugin-react` is used.
    // Ref: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#how-to-upgrade-to-the-new-jsx-transform
    'react/jsx-uses-react': 'off',

    // This rule is turned off with the new JSX transform
    // since `eslint-plugin-react` is used.
    // Ref: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#how-to-upgrade-to-the-new-jsx-transform
    'react/react-in-jsx-scope': 'off',

    // Enforce a specific function type for function components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' }
    ],

    // Prevent react contexts from taking non-stable values
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': 'error',

    // Lifecycle methods should be methods on the prototype, not class fields
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-arrow-function-lifecycle.md
    'react/no-arrow-function-lifecycle': 'error',

    // Prevent usage of invalid attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-invalid-html-attribute.md
    'react/no-invalid-html-attribute': 'error',

    // Enforce sandbox attribute on iframe elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/c8833f301314dab3e79ef7ac4cf863e4d5fa0019/docs/rules/iframe-missing-sandbox.md
    'react/iframe-missing-sandbox': 'error',

    // Prevent problematic leaked values from being rendered
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-leaked-render.md
    'react/jsx-no-leaked-render': [
      'error',
      {
        validStrategies: ['ternary']
      }
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/66b58dd4864678eb869a7bf434c72ff7ac530eb1/docs/rules/no-object-type-as-default-prop.md
    'react/no-object-type-as-default-prop': 'error',

    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'componentDidCatch',
          'getSnapshotBeforeUpdate'
        ]
      }
    ]
  },
  overrides: [
    {
      // JSX in .tsx files instead of .jsx
      files: ['*.ts?(x)'],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }]
      }
    },
    {
      // Enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/render-result-naming-convention': 0
      }
    }
  ]
}
