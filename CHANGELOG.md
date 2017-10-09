# Release Notes

## (2017-10-09) `v1.0.0`

### Added

* A lot of documentation to the README
* Deploy script to `./example` app which deploys to github pages

### Changed

* Changed default export from `Dat` to `DatGui`

## (2017-10-08) `v0.0.21`

### Changed

* Removed custom check box styling from `DatBoolean` component
* Ensured sliders are the same height as number inputs
* Minor style changes for consistency

## (2017-10-08) `v0.0.20`

### Changed  

* Housekeeping in preparation for `v1.0.0`

## (2017-10-06) `v0.0.19`

### Added

* `DatPresets` component - this allows you to set presets for your DatGUI component and switch between them easily

### Changed

* Removed final reference to `reactcss`, this can be completely removed from dependencies now
* Removed unnecessary arrow functions in some `setState` callbacks
* Fixed bug where `DatNumber` input updates weren't updating sliders

## (2017-10-05) `v0.0.18`

### Added  

* `DatColor` component - this allows color pickers, powered by `react-color` to be rendered for mutating colors
* Added `example:promote` script for pushing development code up from `example/src/dev` into `src`

### Changed

* Example updated with `DatColor` included

## (2017-10-04) `v0.0.17`

### Added

* `DatSelect` component

### Changed

* Example updated with `DatSelect` included

## (2017-10-03) `v0.0.16`

### Added

* Support for nested folders via `DatFolder`

### Changed  

* Example `App.js` has been updated to include a nested folder example

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
