# Phaser Hyperapp Boilerplate

# Build Process
- NPM
    - gitignore `node_modules`
- Parcel
    - Default to index.js and index.html
    - Use `parcel-bundler` instead of `parcel`
    - gitignore `dist` and `.cache`
    - Use `parcel-plugin-clean-dist` to clean `dist` before each new build
        - https://github.com/parcel-bundler/parcel/issues/1234
    - `package.json` and `dev` and `build` commands
- ESLint
    - Atom `fast-eslint` plugin
    - Install `eslint`
    - Need `eslint-config-airbnb-base` and `eslint-plugin-import` because they are peer dependencies
    - Create `.eslintrc` with `{ "extends": "airbnb-base" }`
    - Add `"parserOptions": { "ecmaFeatures": { "jsx": true } }` to `.eslintrc` to support JSX
    - Add `"no-unused-vars": [2, { "varsIgnorePattern": "h" }],` to account for h needing to be defined in `index.js`
    - Add `"env": { "browser": true }` to `.eslintrc` to allow `document`, `window`, and other web specific properties
- CSS
    - `reset-css`: Get rid of browser specific styling CSS for a clean starting point
    - `node-sass`: To compile SASS for Parcel
    - `src/css/main.scss` is there to import Reset CSS
- File Structure
    - Create a `src` (source) directory
    - Create `js` and `css` subdirectories under `src`
