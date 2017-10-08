# React dat.GUI

This is a fully[*](#whats-missing) featured React port of Google's esteemed [dat.GUI](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) controller library. It comes packed with all the core components you'll need to cleanly integrate dat.GUIs into your React app.

For those that haven't used or seen dat.GUI before, it's basically a GUI for updating and interacting with objects in real time. It's used extensively in canvas or WebGL rendering demos/apps for libraries such as [three.js](http://threejs.org) but it can also be used to build browser based editing software.

## Demo

[Checkout the demo!](http://rohandeshpande.com/react-dat-gui)

The demo is a deployed version of the latest production build of `./example`.

## Installation

```
npm i -S react-dat-gui
```

## Usage

First you'll need a wrapper component which will handle the updates from your dat.GUI, this component should pass the data for the GUI to control as well as an `onUpdate` function to the `DatGui` container component as props. Here's how you might do that:

```
import '../node_modules/react-dat-gui/build/react-dat-gui.css';
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

## Components

### `DatGui`

This is the main container component for your GUI.

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

### `DatBoolean`

todo

#### props

##### required

##### optional

### `DatButton`

todo

#### props

##### required

##### optional

### `DatColor`

todo

#### props

##### required

##### optional

### `DatFolder`

todo

#### props

##### required

##### optional

### DatNumber

A number component for updating numeric values. Will render a slider if `min`, `max` and `step` props are supplied.

#### props

##### required

##### optional

### `DatPresets`

todo

#### props

##### required

##### optional

### `DatSelect`

todo

#### props

##### required

##### optional

### `DatString`

A simple text input component that can be used to mutate strings.

#### props

##### required

##### optional

## What's missing

There are still a few features from the original implementation missing from this package. These are mainly related to saving and loading data as well as local storage. For the first, I think the fact that this is now an npm module sort of goes against it handling this sort of stuff. Google's original concept was basically a plug and play controller that could do everything, however in module form, it's expected that you'll most likely be integrating this with an existing application. In that case, you'll probably have pretty specific needs around how you would like to save/load data into your GUI. Local storage however is in the roadmap and will probably be done very soon.

## Roadmap
* Loading and storing both default and preset data via `localStorage`
* Time travel with undo/redo buttons (edited)
