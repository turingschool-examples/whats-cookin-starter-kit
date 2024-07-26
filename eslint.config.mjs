/* eslint-disable max-len */
import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  {
    rules: {
      "semi": "error",
      "eqeqeq": ["error", "always"],
      "brace-style": "error",
      "comma-spacing": ["warn", { "before": false, "after": true }],
      "curly": "error",
      "semi-spacing": ["error", { "before": false, "after": true }],
      "indent": ["warn", 2],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      // "linebreak-style": ["warn", "unix"],
      "max-len": ["warn", 80],
      "new-cap": ["error", { "newIsCap": true }],
      "object-shorthand": ["error", "always"],
      "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "always" }],
      "space-infix-ops": ["error", { "int32Hint": false }]
    }
  }
];