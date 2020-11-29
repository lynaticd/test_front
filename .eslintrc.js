module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/airbnb',
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "quotes": [0, "double"],
    "import/prefer-default-export": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
