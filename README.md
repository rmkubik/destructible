# Phaser Hyperapp Boilerplate

## Build Process

### NPM

-   gitignore `node_modules`

### Parcel

-   Default to index.js and index.html
-   Use `parcel-bundler` instead of `parcel`
-   gitignore `dist` and `.cache`
-   Use `parcel-plugin-clean-dist` to clean `dist` before each new build
    -   https://github.com/parcel-bundler/parcel/issues/1234
-   `package.json` and `dev` and `build` commands

### ESLint

-   Atom `fast-eslint` plugin
-   Install `eslint`
-   Need `eslint-config-airbnb-base` and `eslint-plugin-import` because they are peer dependencies
-   Create `.eslintrc` with `{ "extends": ["airbnb-base"] }`
-   Add `"env": { "browser": true }` to `.eslintrc` to allow `document`, `window`, and other web specific properties

### Prettier

-   Auto format code in an opinionated way
-   Install using exact version (with npm --save-exact) per Prettier's recommendation "we introduce stylistic changes in patch releases"
-   npm install `prettier`
-   npm install `eslint-plugin-prettier`
-   Add `"prettier"` to `.eslintrc` "plugins" property, this allows integration between prettier and eslint
-   npm install `eslint-config-prettier`
-   Add `"prettier"` to `.eslintrc` "extends" property, this allows prettier to override existing settings with its own set of defaults
-   Enable running prettier on file save in your editor
    -   Atom `prettier` plugin, enable `ESLint Integration` setting

### CSS

-   `reset-css`: Get rid of browser specific styling CSS for a clean starting point
-   `node-sass`: To compile SASS for Parcel
-   `src/css/main.scss` is there to import Reset CSS

### File Structure

-   Create a `src` (source) directory
-   Create `js` and `css` subdirectories under `src`
-   Root files `index.html` and `index.js` are in main directory

### Jest

-   Tests belong in the `tests` root directory
-   Install `jest` because its a preconfigured and popular solution
-   Add `"jest": true` to the eslint `"env"` property in `.eslintrc`

### Phaser

-   npm install `phaser`

### Hyperapp

-   npm install `hyperapp`
-   Add `"parserOptions": { "ecmaFeatures": { "jsx": true } }` to `.eslintrc` to support JSX
-   Add `"no-unused-vars": [2, { "varsIgnorePattern": "h" }],` to `.eslintrc` to account for h needing to be defined in `index.js` but not used in code
-   npm install `eslint-plugin-react` to use React specific linting rules (Hyperapp works well with these rules too)
-   Add `react` to `"plugins"` in `.eslintrc`
-   Add `"react/jsx-uses-vars": "error"` to `"rules"` in `.eslintrc` to prevent eslint from thinking JSX components are unused
