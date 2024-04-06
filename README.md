# AI Generated Commit Messages

A NodeJS script to help you write commit messages more quickly using GPT.

> You need an Open AI API key setup to use GPT 4 for this to work.

Also, this uses `git diff` to generate a commit message. Some git changes (e.g. adding or deleting files) create no diff, in which case this will not provide helpful output.

## Getting Started

Make sure you are using Node version 20, e.g. `v20.9.0`. You can install and manage different versions of NodeJS easily with [nvm](https://github.com/nvm-sh/nvm), e.g.

```
brew install nvm
nvm install 20.9.0
nvm alias default 20.9.0
nvm use 20.9.0
```

- [Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable): `npm install --global yarn`.
- [Install bun](https://bun.sh/docs/installation): `curl -fsSL https://bun.sh/install | bash `.

We are using bun to run some commands and you can substitute most of the `yarn` commands listed below to use `bun` instead. However, for now we are still using `yarn` to install packages.

# Instructions

1. Run `yarn` to install dependencies.
2. Run `yarn setup` and add your Open AI API key to the created `src/config.ts` file. Modify the list of `ADDITIONAL_COMMIT_MESSAGE_OPTIONS` to fit your own needs.
3. Run `yarn build`.
4. Run the tool using node from a different context, e.g. `node ~/Documents/commit-ai/dist/main.js`.

For example, you can add an alias in your bash profile to easily run this in any given directory with code changes:

```sh
# bash_profile
alias cm='node ~/Documents/commit-ai/dist/main.js'
```

# Example Output

Running this after updating a `README.md` file will produce the following:

```sh
AI-generated commit message:

"Updated README.md with enhanced setup instructions and usage examples."

? Select a commit message for your recent changes: (Use arrow keys)
❯ Use AI-generated commit message.
  Fix type errors.
  Fix code formatting/linting issues.
  Address code review comments.
  Update README and documentation.
  Misc. refactoring and improvements.
  Update dependencies.
```

Choose the commit message you want to use wit arrow keys and hit enter. This will commit all the un-staged or staged changes in your current git repo.

# Development

Commands for this repo:

```sh
# ESLint:
yarn lint
yarn lint:fix

# Prettier:
yarn prettier
yarn prettier:fix

# Jest:
yarn test
yarn bun:test

# TypeScript:
yarn tsc
yarn build
```
