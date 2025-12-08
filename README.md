# vite-template

A frontend build to optimize CSS3 and JavaScript files.

## Quick start

> [!NOTE]
>
> You need to have [Node.js](https://github.com/nodejs) installed on your computer before running this project.

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

The option shows the current changes, that are made in development mode to check that everything works before deploying
the condo to production.

- `npm run preview`: shows a live project preview

## Commands for linting/fixing files

Navigate into your project directory and start your preview mode up.

- `npm run lint:eslint`: lints [JavaScript](https://www.javascript.com) files
    - `npm run lint:eslint:fix`: to eliminate all possible errors
- `npm run lint:stylelint`: lints [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS) files
    - `npm run lint:stylelint:fix`: to eliminate all possible errors
