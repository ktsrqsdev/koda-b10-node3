import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js", "**/*.mjs",],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "no-unused-vars": "warn",
      "eqeqeq": "error",
      "no-var": "error",
      "prefer-const": "error",
      "curly": "error",

      "@stylistic/semi": ["error", "always",],
      "@stylistic/quotes": ["error", "double",],
      "@stylistic/indent": ["error", 2,],
      "@stylistic/comma-dangle": ["error", "always",],
    },
  },
];