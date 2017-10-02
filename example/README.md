# Example

Very simple example of how `react-dat-gui` can be used to mutate an object's properties in real time.

## Running

Simply

```
npm i
```

then

```
npm run start
```

And you should see the example open in your browser. Alternatively you can `npm run example` from the root directory of the repository.

## Development

You can use the example to prototype changes you want to make to the library's code without publishing. Simply run `npm run example:seed`, and the current library code will be copied over to the example's `dev` directory.

After that you will need to make changes to `App.js` so that it's importing from `./dev` rather than `node_modules`. For example:

```
import '../node_modules/react-dat-gui/dist/react-dat-gui.css';

import Dat, { DatBoolean, DatButton, DatNumber, DatString } from 'react-dat-gui';
import React, { Component } from 'react';
```

should become

```
import './dev/style/css/Dat.css';

import Dat, { DatBoolean, DatButton, DatNumber, DatString } from './dev';
import React, { Component } from 'react';
```

Then you'll be able to prototype any changes you want to make. Just be sure to copy your changes back to the root directory before publishing.

## Create React App

This example has been bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), check out their docs if you want to learn more about how it all works.
