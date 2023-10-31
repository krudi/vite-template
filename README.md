# vite-template

A frontend build to optimize CSS3 and JavaScript files.

## Quick start

> **Note**
> You need [Node.js](https://github.com/nodejs) on your computer before running.

1. First clone this repository and navigate into your project directory
2. Install the dependencies: `npm run install`
3. Run the development server: `npm run dev`

## Starting development mode

To launch the project in development mode with hot module replacement.

- `npm run dev`: to compile application and serve it to the browser

_You can view the development server at <http://localhost:5173>_

## Starting production mode

Build and optimize your application with [Vite](https://github.com/vitejs/vite) for production.

- `npm run build`: build for production with minification

## Starting preview mode

The option shows the current changes, that are made in development mode to check that everything works before deploying the condo to production.

- `npm run preview`: shows a live project preview

## Commands for linting/fixing files

Navigate into your project directory and start your preview mode up.

- `npm run lint:js`: lints [JavaScript](https://www.javascript.com) files
  - `npm run lint:js:fix`: to eliminate all possible errors
- `npm run lint:css`: lints [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS) files
  - `npm run lint:css:fix`: to eliminate all possible errors
- `npm run lint:files`: lints configuration files with [Prettier](https://github.com/prettier/prettier)
  - `npm run lint:files:fix`: to eliminate all possible errors
- `npm run lint:full` - to run all lints commands above
- `npm run lint:full:fix` - to run all lints all commands above and fix those automatically

## Testing with [Jest](https://jestjs.io)

[Jest](https://jestjs.io) is a testing framework that provides an easy-to-use and comprehensive testing solution for [JavaScript](https://www.javascript.com) codebases.

1. `npm run jest:run`: to run the tests

## What's more?

- [SASS](https://sass-lang.com)

## Additional information

- `npx npm-check-updates` - to check if some [npm](https://www.npmjs.com) packages are needed
- `npx npm-check-updates -u` - to upgrade all [npm](https://www.npmjs.com) packages
