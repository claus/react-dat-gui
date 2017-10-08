# React dat.GUI

This is a fully[*](#whats-missing) featured React port of Google's esteemed [dat.GUI](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) controller library. It comes packed with all the core components you'll need to cleanly integrate a `dat.GUI` into your React app.

For those that haven't used or seen dat.GUI before, it's basically an object mutation GUI. It's used extensively in canvas or WebGL rendering demos/apps for libraries such as [three.js](http://threejs.org) but it can also be used to build browser based editing software.

## Demo

http://rohandeshpande.com/react-dat-gui

## Installation

```
npm i -S react-dat-gui

```

## Usage

First you'll need a wrapper component which will handle the updates from your dat.GUI, this component should pass the data for the GUI to control as well as an `onUpdate` function to the `DatGui` container component as props. These props are then passed down to all children.

```
// TODO code sample
```


Any updates will update the state of the `DatGui` component and trigger whatever else needs to happen in your `onUpdate` method.

## Components

### DatGui

This is the main container component for your GUI.

### `DatString`

A simple string component that can be used

### DatNumber

A number component, for updating numeric values.

#### props

## What's missing

There are still a few features from the original implementation missing from this package. These are mainly related to saving and loading data as well as local storage. For the first, I think the fact that this is now an npm module sort of goes against it handling this sort of stuff. Google's original concept was basically a plug and play controller that could do everything, however in module form, it's expected that you'll most likely be integrating this with an existing application. In that case, you'll probably have pretty specific needs around how you would like to save/load data into your GUI. Local storage however is in the roadmap and will probably be done very soon.

## Roadmap
* Loading and storing both default and preset data via `localStorage`
* Time travel with undo/redo buttons (edited)
