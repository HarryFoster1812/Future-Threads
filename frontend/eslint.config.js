import react from "eslint-plugin-react";
import globals from "globals";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default [
  reactRecommended,
  {
    files          : [ "**/*.{js,jsx,mjs,cjs}" ],
    languageOptions: {
      ecmaVersion  : "latest",
      sourceType   : "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      //rules here
    }
  }
]
