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

#### Basic Usage

```javascript
import asmblConfig, { typed } from '@assemble-inc/eslint-config-ts';

export default [
  ...asmblConfig,
  ...typed(),
];
```

#### Using the `typed()` Function

The `typed()` function enables type-aware linting rules that require TypeScript type information. It should be used in conjunction with the base configuration.

```javascript
import asmblConfig, { typed } from '@assemble-inc/eslint-config-ts';

export default [
  ...asmblConfig,
  ...typed({
    // Customize which files to apply type-aware rules to (default: '**/*.{ts,tsx}')
    files: ['**/*.{ts,tsx}'],
    
    // Path to your tsconfig file (default: './tsconfig.json')
    project: ['./tsconfig.json'],
    
    // Optional: Set the root directory for TypeScript configuration
    // tsconfigRootDir: import.meta.dirname,
  }),
];
```

**Note:** The `typed()` function should be spread (`...typed()`) into your configuration array to properly apply the type-aware rules.

## Usage

The `lint:fix` script will automatically attempt to fix reported errors and warnings. Running `lint` will report errors/warnings without attempting to fix them.
