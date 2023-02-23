Assemble Inc. Frontend Code Standards

## This repository contains resources for ensuring consistency and quality across different Assemble projects.

### ESLint Configuration

Assemble has developed a custom ESLint configuration file that should be used on all greenfield Assemble Projects. This package extends ESLint recommended settings with some specific modifications selected by the Assemble dev team. You can read more [here](./eslint-config/README.md).

### Prettier Configuration

The Assemble prettier configuration and editor configuration files are used to maintain consistent coding style across Assemble projects. This package extends the recommended settings with some minor adjustments for team preferences. You can read more [here](./prettier-config/README.md).

### Tailwind Configuration
The Assemble Tailwind configuration files is used to maintain consistent coding style across Assemble tailwind projects. This package extends the recommended settings with some minor adjustments for team preferences.

### TSConfig
The Assemble TypeScript configuration file is used to maintain consistent typescript standards across Assemble projects. This package extends the recommended settings with some minor adjustments for team preferences.

## Contributing <a id='contributing'></a>

1. Clone this repo
2. Create a branch: `git checkout -b developer-name/component-name`
3. Make some changes
4. Test your changes
5. Push your branch and open a Pull Request
6. Request a reviewer, or let the team know
#
## Publishing <a id='publishing'></a>

Then every time you make an update to the library, republish it to npm:

1. Run `yarn publish-packages`
2. At root of repo run `yarn changeset` and follow instructions - this will automatically bump major/minor versions of packages and prepare them to be published. Any packages with `"private": true` in their `package.json` will not be published.
3. Run `yarn changeset publish`
