# Assemble Prettier Configuration

This package contains the Assemble prettier profile used to enforce consistent code style.

You can install this package as a stand alone addition to your codebase but @assemble-inc/eslint-config-asm includes this ruleset automatically

## Installation

From the root of your project, install prettier:

`yarn add --dev prettier`

and the Assemble prettier config:

`yarn add --dev @assemble-inc/prettier-config-asm`

## Configuration

Add the following script to your `package.json`.

```
"scripts": {
  "format": "prettier \"src/**/**.{ts,tsx,js,jsx,json,css,scss,html}\" --check",
  "format:fix": "prettier \"src/**/**.{ts,tsx,js,jsx,json,css,scss,html}\" --write"
},
"prettier": "@assemble-inc/prettier-config-asm",
```

The `--write` flag will automatically fix all code style violations.

> You can update the file extensions list to suit the particular files you would like to format.

## Usage

To format the files in your project, run `yarn format`.
