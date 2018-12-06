# React dat.GUI

This is a fully[*](#whats-missing) featured React port of Google's esteemed [dat.GUI](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) controller library. It comes packed with all the core components you'll need to cleanly integrate dat.GUIs into your React app.

For those that haven't used or seen dat.GUI before, it's basically a GUI for updating and interacting with objects in real time. It's used extensively in canvas or WebGL rendering demos/apps for libraries such as [three.js](http://threejs.org) but it can also be used to build browser based editing software.

## TOC

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Docs](#docs)
  * [`DatGui`](#datgui)
    + [props](#props)
  * [Components](#components)
    + [Common props](#common-props)
    + [`DatBoolean`](#datboolean)
    + [`DatButton`](#datbutton)
    + [`DatColor`](#datcolor)
    + [`DatFolder`](#datfolder)
    + [`DatNumber`](#datnumber)
    + [`DatPresets`](#datpresets)
    + [`DatSelect`](#datselect)
    + [`DatString`](#datstring)
- [Scripts](#scripts)
    + [`build`](#build)
    + [`dev`](#dev)
    + [`dev:migrate`](#devmigrate)
    + [`dev:promote`](#devpromote)
    + [`example`](#example)
    + [`example:deploy`](#exampledeploy)
    + [`test`](#test)
    + [`test:watch`](#testwatch)
    + [`lint`](#lint)
    + [`lint:fix`](#lintfix)
    + [`toc`](#toc)
- [What's missing](#whats-missing)
- [Roadmap](#roadmap)

## Demo

[Checkout the demo!](https://claus.github.io/react-dat-gui/)

The demo is a deployed version of the latest production build of `./example`. There's also a `dev` directory where you can prototype changes to the source code easily. Both of these have been bootstrapped with `create-react-app`.

## Installation

```
npm install react-dat-gui --save
```

## Usage

First you'll need a wrapper component which will handle the updates from your dat.GUI, this component should pass the data for the GUI to control as well as an `onUpdate` function to the `DatGui` container component as props. Here's how you might do that:

```jsx
import 'react-dat-gui/build/react-dat-gui.css';
import React, { Component } from 'react';

import DatGui, { DatBoolean, DatButton, DatNumber, DatString } from 'react-dat-gui';

class App extends Component {
  state = {
    data: {
      package: 'react-dat-gui',
      power: 9000,
      isAwesome: true,
      feelsLike: '#2FA1D6',
    }
  }

  update = data => this.setState({ data })

  render() {
    const { data } = this.state;

    return (
      <DatGui data={data} onUpdate={this.update}>
        <DatString path='package' label='Package' />
        <DatNumber path='power' label='Power' min={9000} max={9999} step={1} />
        <DatBoolean path='isAwesome' label='Awesome?' />
        <DatColor path='feelsLike' label='Feels Like' />
      </DatGui>
    )
  }
```

This will give you a dat.GUI controller which can perform live mutations to the `data` in the `App` component's state.

## Docs

### `DatGui`

This is the main container component for your GUI and is the default export from the package.

#### props

##### required

* `data` - The data your dat.GUI controller will mutate
* `onUpdate` - The method which will be called whenever an update is handled by the controller
* `children` - The dat.GUI components that make up the controller

##### optional

* `liveUpdate` - Determines if live updates should occur, defaults to `true`
* `labelWidth` - The width of the labels in pixels, defaults to `40`
* `className` - The class name to set on the `DatGui` div
* `style` - The style object to set on the `DatGui` div

### Components

All of the `react-dat-gui` components should be rendered as children of your `DatGui` parent component.

#### Common props

These components will have a number of props implicitly passed to them via the `DatGui` parent component's `renderChildren` method, but can also require other props to be passed explicitly to them.

Below are docs for the required and optional props you can pass to each component. Check the `renderChildren` method of `src/index.js` to see which other props are passed down implicitly.

##### required

* `path: string` - the path to the value within the `data` object which the component will control, eg., considering your object was `{ foo: 'bar' }`: `<DatString path='foo' />`
* Note, this prop is not required for the following components
  * `DatButton`
  * `DatFolder`
  * `DatPresets`

##### optional

* `label: string` - the label for the controller eg., `<DatString path='message' label='Message' />`

#### `DatBoolean`

Used for controlling boolean values. Renders a checkbox input element.

#### `DatButton`

Can be used for performing any kind of function. Simply pass an `onClick` prop to the component and it will fire whenever the rendered element is clicked.

##### props

###### required

* `onClick :func` - the function to perform with the rendered element is clicked

#### `DatColor`

Uses [`react-color`](https://github.com/casesandberg/react-color/) to render a color picker component that will control color values.

#### `DatFolder`

Component which wraps other components to render them within an expandable/collapsable nested folder.

##### props

###### required

 * `title: string` - The folder title eg., `<DatFolder title='MyAwesomeFolder' />`
 * `children: array` - The child components to render

#### `DatNumber`

A number component for updating numeric values. Will render a slider if `min`, `max` and `step` props are supplied.

##### props

###### optional

* `min: number` - The minimum range for the number
* `max: number` - The maximum range for the number  
* `step: number` - The amount the number should increment each tick

#### `DatPresets`

Presets for the object which your `DatGui` is controlling can be supplied to this component as items in its `options` prop. A select field will be rendered which will allow you to easily switch between the presets.

Each item in this array will need to be in the format `{ 'presetName': ...data, ...preset }` where `...data` is your initial data and `...preset` is your preset.

##### props

###### required

* `options: array` - An array of objects, each in the format `{ 'presetName': ...data, ...preset }`

#### `DatSelect`

A select component for updating a value with one of the options supplied via the `options` prop. The original value from the `path` will always be added to the passed options array as the first item.

##### props

###### required

* `options: array` - A simple array of options to select from eg., `<DatSelect path='fruits' options={['apple', 'orange', 'pear']} />`

#### `DatString`

A simple text input component that can be used to mutate strings.

## Scripts

There are a few NPM scripts in the root `package.json` for developing changes to the repo's source code as well as running tests and deploying the demo.

#### `build`

Builds the package for publishing.

#### `dev`

Runs the app in `./dev`.

#### `dev:migrate`

Migrates the code in `./src` to `./dev/src/react-dat-gui`. Handy for making sure you're developing with the latest source code.

#### `dev:promote`

Promotes the code in `./dev/src/react-dat-gui` back up to the root of the repo. Use this when you're happy with the changes you've been developing.

#### `example`

Runs the app in `./example`.

#### `example:deploy`

Deploys the production build of the app in `./example` to the `gh-pages` branch of this repo.

#### `test`

Runs unit tests.

#### `test:watch`

Runs unit tests and watches for changes.

#### `lint`

Runs `eslint` on the supplied path.

#### `lint:fix`

Runs `eslint --fix` on the supplied path.

#### `toc`

Prints the `README.md` table of contents into the console.

## What's missing

There are still a few features from the original implementation missing from this package. These are mainly related to saving and loading data as well as local storage. Animations for folder expanding/collapsing is also not currently implemented, but shouldn't be too hard to do.

For the first, I think the fact that this is now an NPM module sort of goes against it handling this sort of stuff. Google's original concept was basically a plug and play controller that could do everything if you just slam it into the browser and pass it an object. However, in module form, it's expected that you'll most likely be integrating this with an existing application. In that case, you'll probably have pretty specific needs around how you would like to save/load data into your GUI and so it's been left out for now.

Local storage however is in the roadmap and will probably be done very soon.

## Roadmap
* Loading and storing both default and preset data via `localStorage`
* Time travel with undo/redo buttons (edited)
* Better support for floating point `DatNumber`s (rounding etc.)
