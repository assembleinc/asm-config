import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import-x";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import autofix from "eslint-plugin-autofix";

/**
 * BASE (untyped) CONFIG
 * - Safe everywhere. Does NOT create a TS Program.
 * - Disables rules that require type information.
 */
export default [
  { ignores: ["/*.*", "*.d.ts"] },

  // Do NOT spread whole preset objects that might carry eslintrc keys.
  {
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } }, // flat: under languageOptions
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      autofix,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {},
        node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      },
    },
    rules: {
      // Bring in rules-only from recommended sets (no eslintrc objects)
      ...(reactHooks.configs?.recommended?.rules ?? {}),
      ...(jsxA11y.configs?.recommended?.rules ?? {}),
      // Non type-aware parts of TS recommended can be added selectively if you want,
      // but avoid any rules that require type info.

      // ---- import correctness (no parserOptions leak) ----
      "import/no-unresolved": [2, { commonjs: true, amd: true }],
      "import/no-duplicates": "error",
      "import/export": "error",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["**/*.test.*", "**/*.spec.*", "**/__tests__/**"],
        },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        { js: "never", jsx: "never", ts: "never", tsx: "never" },
      ],

      // ---- sorting via simple-import-sort; disable import/order to avoid conflicts ----
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/order": "off",

      // ---- TypeScript rules (ONLY those that do NOT require type info) ----
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      // IMPORTANT: This one REQUIRES type info → keep OFF in base
      "@typescript-eslint/consistent-type-exports": "off",

      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-unused-vars": ["error"],

      "no-shadow": "off",
      "no-unused-vars": "off", // defer to TS rule
      "autofix/no-unused-vars": "off",

      // ---- React rules ----
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".tsx", ".jsx"] },
      ],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-multi-comp": "off",

      // ---- misc ----
      camelcase: "off",
      "no-restricted-globals": "off",
    },
  },
];

/**
 * TYPED OVERRIDE (opt-in)
 * - Export a helper the app can spread after the base to enable typed linting.
 * - Creates a TS Program and turns on type-aware rules.
 *
 * Usage in app:
 *   import shared, { typed } from '@assemble-inc/eslint-config-ts';
 *   export default [...shared, ...typed()];
 */
export function typed(options = {}) {
  const {
    files = ["**/*.{ts,tsx}"],
    project = ["./tsconfig.json"],
    tsconfigRootDir = undefined, // caller can pass import.meta.dirname
  } = options;

  return [
    {
      files,
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project,
          ...(tsconfigRootDir ? { tsconfigRootDir } : {}),
        },
      },
      // Layer in the official type-checked recommendations + your type-aware rules
      rules: {
        ...(tseslint.configs.recommendedTypeChecked?.rules ?? {}),
        "@typescript-eslint/consistent-type-exports": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
      },
    },
  ];
}
