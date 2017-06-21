module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  "settings": {
    "import/core-modules": ["react", "react-dom"]
  },
  rules: {
    semi: [2, 'never'],
    'generator-star-spacing': 0,
    'object-property-newline': 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-first-prop-new-line': [2, 'never'],
    'react/jsx-indent': 0,
    'react/sort-comp': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/no-string-refs': 0,
    'react/no-render-return-value': 0,
    'react/no-find-dom-node': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/jsx-no-bind': [2, {}],
    'react/no-unused-prop-types': 0,
  },
}
