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
-   `package.json` and `start` and `build` commands
    -   `start` specifies the entry index file
    -   `build` specifies the target build directory as well as the entry file

### Babel

-   Create `.babelrc` file to allow babel plugins to enable experimental esnext features.
-   Add `plugins: ['transform-object-rest-spread']` to `.babelrc`

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
-   Default to using `box-sizing` `border-box` instead of `content-box`

### File Structure

-   Create a `src` (source) directory
-   Create `js` and `css` subdirectories under `src`
-   `js` subdirectories: actions, components, game, state
    -   actions: contains hyperapp action functions
    -   state: contains hyperapp initial global state
    -   game: contains phaser or game logic related classes
    -   components: contains hyperapp related components and gui elements
-   `css` directory contains `components` subdirectory with a corresponding sass file for each hyperapp component requiring styling
    -   main.scss is for all generic top level styling
-   Root files `index.html` and `index.js` are in main directory
-   `assets` directory for audio, images, etc.
    -   images: contains image assets

### Jest

-   Tests belong in the `tests` root directory
-   Install `jest` because its a preconfigured and popular solution
-   Add `"jest": true` to the eslint `"env"` property in `.eslintrc`
-   update `.babelrc` to work for jest without using Parcel
    -   Add the plugin `['transform-react-jsx', { pragma: 'h' }]` to allow babel to handle JSX
    -   Add `presets: ['env']` to use default babel presets
    -   https://github.com/selfup/hyperapp-one/blob/master/.babelrc
-   mock non JavaScript modules (images, css, xml, etc.)
    -   Add a `__mocks__` directory to the root level of the project
    -   Create two files to mock CSS and other files
    -   https://facebook.github.io/jest/docs/en/webpack.html
-   Install `jest-canvas-mock` so that Phaser's canvas can be mocked correctly
-   Modify `package.json`
    -   Add `test` script with `--watch` to keep tests running
    -   Create `jest` object to configure jest
        -   Add `"setupFiles": [ "jest-canvas-mock" ]` to tell jest to use the canvas mock
        -   Add `moduleNameMapper` configuration to mock non JS modules with the new mock files

### Phaser

-   npm install `phaser`

### Hyperapp

-   npm install `hyperapp`
-   Add `"parserOptions": { "ecmaFeatures": { "jsx": true } }` to `.eslintrc` to support JSX
-   Add `"no-unused-vars": [2, { "varsIgnorePattern": "h" }],` to `.eslintrc` to account for h needing to be defined in `index.js` but not used in code
-   npm install `eslint-plugin-react` to use React specific linting rules (Hyperapp works well with these rules too)
-   Add `react` to `"plugins"` in `.eslintrc`
-   Add `"react/jsx-uses-vars": "error"` to `"rules"` in `.eslintrc` to prevent eslint from thinking JSX components are unused
