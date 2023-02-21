# Assemble Inc ESLint Configuration

This package contains Assemble Inc's ESLint configurations for both Typescript and JavaScript projects as well as for testing within those projects.

ESLint is used for enforcement of code quality across Assemble Inc projects.

All ESLint rules enforcing code style have been disabled in favor of using prettier for code formatting.

## Installation

From the root of your package, install the Assemble Inc. configuration:

`yarn add --dev @assemble-inc/eslint-config-asm`

## Configuration

### Add Linting Scripts

Add the following scripts to your `package.json`.

```
"scripts": {
  "lint": "eslint \"src/**/*.{jsx,js,ts,tsx}\"",
  "lint:fix": "eslint \"src/**/*.{jsx,js,ts,tsx}\" --fix",
  "prettier": "prettier \"src/**/**.{ts,tsx,js,jsx,json,css,scss,html}\"",
  "prettier:fix": "prettier \"src/**/**.{ts,tsx,js,jsx,json,css,scss,html}\" --write",
  "format": "yarn lint && yarn prettier",
  "format:fix": "yarn lint:fix && yarn prettier:fix",
},
```

> You can update the file extensions list to suit the particular files you would like to lint.

### Import the linting and prettier configurations

The Assemble Inc. configuration needs to be imported into ESLint and we need to tell Prettier the ruleset we want to use. Add the following to your `package.json`.

```
  "eslintConfig": {
    "extends": [
      "@assemble-inc/eslint-config-asm"
    ],
    "env": {
      "browser": true,
      "node": true
    }
  },
  "prettier": "@assemble-inc/prettier-config-asm",
```

That's it! No eslint or prettier config files required.

## Usage

The `lint:fix` and `prettier:fix` script will automatically attempt to fix reported errors and warnings. Leaving this off will report errors/warnings without attempting to fix them.

To format all matching files in your project, run `yarn format`.

To automatically fix linting and formatting errors in your project, run `yarn format:fix` or `yarn lint --fix`.
