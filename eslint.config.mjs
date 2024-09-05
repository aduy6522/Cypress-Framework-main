import pluginJs from "@eslint/js";
import globals from "globals";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {
    "extends": [
      "plugin:cypress/recommended"
    ]
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];