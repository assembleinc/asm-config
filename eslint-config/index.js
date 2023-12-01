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
    // The following rules are deprecated in eslint
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-element-newline": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-spacing": "off",
    "brace-style": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": "off",
    "computed-property-spacing": "off",
    "dot-location": "off",
    "eol-last": "off",
    "func-call-spacing": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "off",
    "implicit-arrow-linebreak": "off",
    "indent": "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "linebreak-style": "off",
    "lines-between-class-members": "off",
    "lines-around-comment": "off",
    "max-len": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-confusing-arrow": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-floating-decimal": "off",
    "no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-tabs": "off",
    "no-trailing-spaces": "off",
    "no-whitespace-before-property": "off",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "one-var-declaration-per-line": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "quote-props": "off",
    "quotes": "off",
    "rest-spread-spacing": "off",
    "semi": "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "off",
    "spaced-comment": "off",
    "switch-colon-spacing": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    "yield-star-spacing": "off"
  },
  ignorePatterns: ['/*.*'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        "eslint:recommended",
        'react-app',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
        'jsx-a11y',
        'prettier',
        'simple-import-sort',
        'react-hooks'
      ],
      rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
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
