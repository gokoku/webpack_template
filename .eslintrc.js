module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "babel",
    "prettier"
  ],
  "rules": {
    "accessor-pairs": 0,
    "brace-style": [
      2,
      "1tbs"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "consistent-return": 2,
    "dot-location": [
      2,
      "property"
    ],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": [
      2,
      "allow-null"
    ],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": false,
        "jsxBracketSameLine": true,
        "parser": "flow",
        "semi": false,
      }
    ],
    "jsx-quotes": [
      2,
      "prefer-double"
    ],
    "no-bitwise": 0,
    "no-dupe-class-members": 2,
    "no-multi-spaces": 2,
    "no-restricted-syntax": [
      2,
      "WithStatement"
    ],
    "no-shadow": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [
      2,
      {
        "args": "none"
      }
    ],
    "quotes": [
      2,
      "single",
      "avoid-escape"
    ],
    "keyword-spacing": 2,
    "space-before-blocks": 2,
    "space-before-keywords": 0,
    "react/display-name": 0,
    "react/jsx-boolean-value": [
      2,
      "always"
    ],
    "react/jsx-no-undef": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 0,
    "react/jsx-wrap-multilines": [
      2,
      {
        "declaration": false,
        "assignment": false
      }
    ]
  }


};
