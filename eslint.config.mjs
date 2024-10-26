import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  {
    // Base configuration
    ...pluginJs.configs.recommended,
    plugins: { jest },
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    // Configuration for test files
    files: ["**/*.test.js", "**/*.spec.js"], // Adjust patterns for your test files
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...globals.jest, // Adds Jest globals
      },
    },
  },
];
