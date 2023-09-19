// const {onFuncPrefixMatchingCreate}= require("./funcPrefixMatching");

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['@babel/plugin-transform-react-jsx'],
    },
  },
  extends: ["eslint:recommended", 'react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
  plugins: ['jsx-a11y', 'simple-import-sort', 'react-hooks', 'autofix', 'prettier'],
  rules: {
    // "func-prefix-matching": {
    //   create: onFuncPrefixMatchingCreate,
    // },
    "react/self-closing-comp": [
      "error", {
        "component": true,
        "html": true
      }
    ],
    "autofix/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "type", "parent", "sibling", "index", "object"],
        "pathGroups": [
          {
            "pattern": "@/**/**",
            "group": "parent",
            "position": "before"
          }
        ],
        "alphabetize": { "order": "asc" }
      }
    ],
    'arrow-parens': ['warn', 'as-needed'],
    "import/no-unresolved": [2, { "commonjs": true, "amd": true }],
    'react/no-multi-comp': 'off',
    'no-non-null-assertion': 'off',
    'camelcase': 'off',
    'no-restricted-globals': 'off',
    'jsx-a11y/no-onchange': 'off',
    "prettier/prettier": "warn",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  },
  ignorePatterns: ['/*.*'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ["eslint:recommended", 'react-app', 'plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended',
      'prettier',],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier', 'simple-import-sort', 'react-hooks'],
      rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-inferrable-types": "warn",
        // this one has options if it becomes an issue in loops
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/require-array-sort-compare": "error",
        "prettier/prettier": "warn",
        "react/jsx-filename-extension": 'off',
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "ts": "never",
            "tsx": "never"
          }
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "max-len": ["warn", { "code": 120 }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off"
      },
      settings: {
        "import/resolver": {
          "typescript": {}
        }
      }
    },
    {
      files: ['*.test.js, *.test.jsx'],
      parser: '@babel/eslint-parser',
      plugins: ["testing-library", 'jest'],
      extends: ['plugin:testing-library/react', 'react-app/jest', 'plugin:jest/recommended'],
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      rules: {
        "testing-library/await-async-query": "error",
        "testing-library/no-await-sync-query": "error",
        "testing-library/no-debugging-utils": "warn",
        "testing-library/no-dom-import": "off"
      },
      env: {
        es6: true,
        node: true,
        'jest/globals': true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
