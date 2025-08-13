# ASMBL ESLint Configuration

This package contains ASMBL's ESLint configurations for Typescript projects.

ESLint is used for enforcement of code quality across ASMBL projects.

## Installation

From the root of your package, install the ASMBL configuration:

`npm i --D @assemble-inc/eslint-config-ts`
`yarn add --dev @assemble-inc/eslint-config-ts`
`pnpm i --dev @assemble-inc/eslint-config-ts`
`bun add --dev @assemble-inc/eslint-config-ts`

## Configuration

### Add Linting Scripts

Add the following scripts to your `package.json`.

```
"scripts": {
  "lint": "eslint \"src/**/*.{ts,tsx}\"",
  "lint:fix": "eslint \"src/**/*.{ts,tsx}\" --fix",
},
```

> You can update the file extensions list to suit the particular files you would like to lint.

### Import the linting configurations

This package uses the new ESLint flat file configuration. Add the following to your `eslint.config.mjs` to extend the ASMBL configuration.

```
import asmblConfig from '@assemble-inc/eslint-config-ts';
export default [
  ...asmblConfig,
];
```

## Usage

The `lint:fix` script will automatically attempt to fix reported errors and warnings. Running `lint` will report errors/warnings without attempting to fix them.
