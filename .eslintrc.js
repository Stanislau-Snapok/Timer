module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "no-restricted-exports": "off",
    "react/button-has-type": "off"
  }
};
