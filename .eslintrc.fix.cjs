/** @type {import("eslint").Linter.Config} */
const config = {
  extends: "./.eslintrc.cjs",
  rules: {
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};

module.exports = config;
