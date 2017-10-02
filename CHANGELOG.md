# Release Notes

## (2017-10-02) `v0.0.15`

### Changed

* SCSS is now broken up into partials which align with the various components

### Added

* Added `DatFolder` component
* Added this to the example

## (2017-10-02) `v0.0.14`

### Changed

* Updated component files to use `.js` file extension rather than `.jsx`
* Removed `examples` directory and created single `example` directory which is now powered by `create-react-app`
* Rewrote `webpack.config.js` so that it is compatible with Webpack v2
* Updated a bunch of dependencies in `package.json`
* Separated out `Slider` component from `DatNumber` and also added `utils` file
* Switched all event handlers in components to ES7 syntax
* Some code formatting
* Changed `build` directory to `dist`

### Added

* `example` directory
* `src/components/Slider.js`
* `src/components/utils.js`
* `src/style` directory
* `.editorconfig` file
* `.eslintrc.json` file
* `.babelrc` file
* `scripts` directory
* A number of `npm` scripts to `package.json`
* This change log!

### Removed

* The build no longer creates minified files, can add these back if required but I think it's better for the user to perform this step in their own build pipeline
* ES5 examples, don't think many people are coding with React and ES5 nowadays
