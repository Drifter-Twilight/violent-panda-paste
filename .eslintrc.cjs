/* eslint-env node */
// eslint-disable-next-line prettier/prettier
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: [1, 2],
    semi: [
      1,
      "never",
      {
        omitLastInOneLineBlock: true,
      },
    ],
    "max-len": [
      1,
      {
        code: 80,
        tabWidth: 2,
      },
    ],
    "arrow-body-style": [1, "as-needed"],
  },
}
