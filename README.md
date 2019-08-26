# React dat.GUI

![npm](https://img.shields.io/npm/v/react-dat-gui?style=flat-square)
![Travis (.org)](https://img.shields.io/travis/claus/react-dat-gui?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-dat-gui?style=flat-square)
![GitHub](https://img.shields.io/github/license/claus/react-dat-gui?style=flat-square)

react-dat-gui is a fully[\*](#whats-missing) featured React port of Google's esteemed [dat.GUI](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) controller library. It comes packed with all of the core components you will need to cleanly integrate dat.GUIs into your React app.

<p align="middle">
  <a href="https://claus.github.io/react-dat-gui/">
    <img width="300px" src="https://i.imgur.com/1bJt59V.png" />
  </a>
  <br />
  <a href="https://claus.github.io/react-dat-gui/">Demo</a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://codesandbox.io/s/react-dat-gui-emjcf?fontsize=14&module=%2Fsrc%2Fcomponents%2FReactDatGui.js">Codesandbox</a>
</p>

The dat.GUI library is designed for easily updating and interacting with objects in real time. It is used extensively in canvas and WebGL rendering demos/apps for libraries such as [three.js](http://threejs.org) and is also commonly used in browser based editing software.

## Contents

- [Basic Usage](#installation)
- [Docs](#docs)
- [Local Development](#local-development)
- [What's missing](#whats-missing)
- [Roadmap](#roadmap)

## Installation

```
npm install react-dat-gui --save
```

## Basic Usage

react-dat-gui has a wrapper component `<DatGUI />` and several control components that can be used to add functionality to the controller.

```jsx
import React from 'react';
import DatGui, { DatBoolean, DatColor, DatNumber, DatString } from 'react-dat-gui';

class App extends React.Component {
  state = {
    data: {
      package: 'react-dat-gui',
      power: 9000,
      isAwesome: true,
      feelsLike: '#2FA1D6',
    }
  }

  // Update current state with changes from controls
  handleUpdate = newData =>
    this.setState(prevState => ({
      data: { ...prevState.data, ...newData }
    }));

  render() {
    const { data } = this.state;

    return (
      <DatGui data={data} onUpdate={this.handleUpdate}>
        <DatString path='package' label='Package' />
        <DatNumber path='power' label='Power' min={9000} max={9999} step={1} />
        <DatBoolean path='isAwesome' label='Awesome?' />
        <DatColor path='feelsLike' label='Feels Like' />
      </DatGui>
    )
  }
```

## Docs

### `<DatGui />`

This is the main container component for your GUI and is the default export from the package.

#### required

| prop     | Description                                                                     | Type     |
| -------- | ------------------------------------------------------------------------------- | -------- |
| data     | The data your dat.GUI controller will mutate                                    | object   |
| onUpdate | The method which will be called whenever an update is handled by the controller | function |
| children | The dat.GUI components that make up the controller                              | array    |

#### optional

| prop       | Description                                    | Type    | Default |
| ---------- | ---------------------------------------------- | ------- | ------- |
| liveUpdate | Determines if live updates should occur        | boolean | true    |
| labelWidth | The width of the labels in any valid CSS units | string  | "40%"   |
| className  | The class name to set on the `DatGui` div      | string  | null    |
| style      | The style object to set on the `DatGui` div    | object  | null    |

### Control Components

`react-dat-gui` comes with eight built-in control components which can be used by rendering them as direct children of `<DatGui />`.

- [DatBoolean](#datboolean)
- [DatButton](#datbutton)
- [DatColor](#datcolor)
- [DatFolder](#datfolder)
- [DatPresets](#datpresets)
- [DatSelect](#datselect)
- [DatString](#datstring)

Custom control components can also be used so long as they implement the required props.

#### Common props

All child components of `<DatGui />` receive the following props implicitly, these are useful when building custom control components. See the built-in control components in [src/components](src/components) for examples of how to implement your own controls.

| prop            | Description                                                                                                                          | Type    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| data            | The data your dat.GUI controller will mutate, the same object from `<DatGui data={data} /> | object                                  |
| labelWidth      | The width of the control name label                                                                                                  | string  |
| liveUpdate      | Determines if live updates should occur                                                                                              | boolean |
| \_onUpdateValue | A callback function for `<DatGui onUpdate={this.onUpdate} />, call this method to update dat.Gui state from your control. | function |

Below are docs for the required and optional props you can pass to each built-in control component.

##### required

- `path: string` - the path to the value within the `data` object which the component will control, eg., considering your object was `{ foo: 'bar' }`: `<DatString path='foo' />` or `{ foo: { bar: 'string' } }`: `<DatString path='foo.bar' />` for nested values.
- Note, this prop is not required for the following components
  - `DatButton`
  - `DatFolder`
  - `DatPresets`

##### optional

- `className: string` - A CSS class name
- `style: object` - A style object for inline styles
- `label: string` - The label for the controller eg., `<DatString path='message' label='Message' />`
- `labelWidth: string` - The width of the labels in any valid CSS units, overrides `<DatGUI labelWidth>`

#### `DatBoolean`

Used for controlling boolean values. Renders a checkbox input element.

#### `DatButton`

Can be used for performing any kind of function. Simply pass an `onClick` prop to the component and it will fire whenever the rendered element is clicked.

##### props

###### required

- `onClick :func` - the function to perform with the rendered element is clicked

#### `DatColor`

Uses [`react-color`](https://github.com/casesandberg/react-color/) to render a color picker component that will control color values.

#### `DatFolder`

Component which wraps other components to render them within an expandable/collapsable nested folder.

##### props

###### required

- `title: string` - The folder title eg., `<DatFolder title='MyAwesomeFolder' />`
- `children: array` - The child components to render

###### optional

- `closed: boolean` - Whether the initial state of the folder is closed, defaults to `true`

#### `DatNumber`

A number component for updating numeric values. Will render a slider if `min`, `max` and `step` props are supplied.

##### props

###### optional

- `min: number` - The minimum range for the number
- `max: number` - The maximum range for the number
- `step: number` - The amount the number should increment each tick

If your `step` prop is a float, `DatNumber` will ensure that your number field steps to the correct number of decimal places to align with the step that you've set.

#### `DatPresets`

Presets for the object which your `DatGui` is controlling can be supplied to this component as items in its `options` prop. A select field will be rendered which will allow you to easily switch between the presets.

Each item in this array will need to be in the format `{ 'presetName': ...data, ...preset }` where `...data` is your initial data and `...preset` is your preset.

##### props

###### required

- `options: array` - An array of objects, each in the format `{ 'presetName': ...data, ...preset }`

#### `DatSelect`

A select component for updating a value with one of the options supplied via the `options` prop. The initial selected value will be taken from the mapped `path` prop.

##### props

###### required

- `options: array` - A simple array of options to select from eg., `<DatSelect path='fruits' options={['apple', 'orange', 'pear']} />`

#### `DatString`

A simple text input component that can be used to mutate strings.

## Local Development

Clone the repo

```bash
git clone https://github.com/claus/react-dat-gui.git react-dat-gui
cd react-dat-gui
```

Setup symlinks and install dependencies

```bash
yarn install
yarn link
cd example
yarn link react-dat-gui
yarn install
```

Run the library in development mode

```bash
cd ..
yarn start
```

Run the example app in development mode

```bash
cd example
yarn start
```

Changes to the library code should hot reload in the demo app

## Scripts

| Script        | Description                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `build`       | Builds the library for production into `/dist`                                                                                                              |
| `start`       | Starts the library in development mode with hot module reloading                                                                                            |
| `test`        | Runs unit testing suite powered by [Jest](https://github.com/facebook/jest) and [testing-library](https://github.com/testing-library/react-testing-library) |
| `lint`        | Runs linting over entire codebase with `prettier`, `eslint` and `stylelint`                                                                                 |
| `lint-js`     | Lints only javascript files                                                                                                                                 |
| `lint-styles` | Lints only stylesheet files                                                                                                                                 |
| `fix`         | Runs linting over entire codebase with `prettier`, `eslint` and `stylelint` and applies any available automatic fixes                                       |
| `fix-js`      | Lints only javascript files and applies any available automatic fixes                                                                                       |
| `fix-styles`  | Lints only stylesheet files and applies any available automatic fixes                                                                                       |
| `deploy`      | Compiles and deploys a static build of `/example` next.js app to gh-pages                                                                                   |

## What's missing

There are still a few features from the original implementation missing from this package. These are mainly related to saving and loading data as well as local storage. Animations for folder expanding/collapsing is also not currently implemented, but shouldn't be too hard to do.

For the first, I think the fact that this is now an NPM module sort of goes against it handling this sort of stuff. Google's original concept was basically a plug and play controller that could do everything if you just slam it into the browser and pass it an object. However, in module form, it's expected that you'll most likely be integrating this with an existing application. In that case, you'll probably have pretty specific needs around how you would like to save/load data into your GUI and so it's been left out for now.

Local storage however is in the roadmap and will probably be done very soon.

## Roadmap

- Loading and storing both default and preset data via `localStorage`
- Animations for `DatFolder` expanding/collapsing
- Time travel with undo/redo buttons
- Better support for floating point `DatNumber`s (rounding etc.)

## License

[MIT](https://opensource.org/licenses/MIT)
