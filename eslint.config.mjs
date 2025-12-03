import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: { jsx: true }
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      "@typescript-eslint": tseslint,
      import: importPlugin,
      next: nextPlugin
    },
    settings: {
      react: { version: "detect" }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // --- your custom rules ---
      "react/prop-types": "off",
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "no-console": "error",
      "no-alert": "error",
      "@typescript-eslint/no-explicit-any": 1,
      "react/display-name": 0,
      "react-hooks/exhaustive-deps": 0,
      "sort-imports": "off",
      "prettier/prettier": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
      "react/jsx-no-target-blank": 0,
      "no-useless-return": "error",
      "no-return-await": "error",
      "no-else-return": "error",
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ],
      "no-async-promise-executor": 0,
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "react/jsx-uses-react": 0,
      "react/react-in-jsx-scope": 0,
      "no-unsafe-optional-chaining": 0,
      "react/jsx-curly-brace-presence": ["error", { props: "always", children: "always" }]
    }
  }
];
