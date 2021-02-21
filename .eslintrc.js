module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": 0,
    "prettier/prettier": ["error"],
    "react/prop-types": 0,
    "no-param-reassign": 0,
    "react/no-danger": 0,
    "no-nested-ternary": 0,
    "no-bitwise": 0,
    "no-unused-vars": "warn",
    "no-underscore-dangle": 0,
    "no-restricted-syntax": 0,
    "no-await-in-loop": 0,
  },
};
