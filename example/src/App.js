// Uncomment out the imports below (and comment out the node modules imports) to use this example to develop changes/additions to react-dat-gui.
// You will need to run `npm run example:seed` to get the latest code into the example/src/dev module directory

// import './dev/style/dat.css';
//
// import Dat, { DatBoolean, DatButton, DatFolder, DatNumber, DatString } from './dev';

import '../node_modules/react-dat-gui/dist/react-dat-gui.css';

import Dat, { DatBoolean, DatButton, DatFolder, DatNumber, DatString } from 'react-dat-gui';
import React, { Component } from 'react';

class App extends Component {
  state = {
    data: {
      string: 'Hello World',
      minMaxNumber: 66,
      number: 80,
      boolean: true,
      random: Math.random(),
      nested: {
        string: 'Goodbye Cruel World'
      }
    },
  }

  handleUpdate = data => {
    this.setState({ data });
  }

  handleClick = () => {
    const data = {...this.state.data, random: Math.random()};

    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <main>
        <section>
          <div>
            <b>String value:</b> {data.string}
          </div>
          <div>
            <b>Slider value:</b> {data.minMaxNumber}
          </div>
          <div>
            <b>Number value:</b> {data.minMaxNumber}
          </div>
          <div>
            <b>Checkbox value:</b> {(data.boolean) ? 'true' : 'false'}
          </div>
          <div>
            <b>Click the button for a random number:</b> {data.random}
          </div>
          <div>
            <b>Nested string value:</b> {data.nested.string}
          </div>
        </section>
        <Dat data={data} onUpdate={this.handleUpdate}>
          <DatString path="string" label="String" />
          <DatNumber path="minMaxNumber" label="Number" min={0} max={100} step={1} />
          <DatNumber path="number" label="Number" />
          <DatBoolean path="boolean" label="Boolean" />
          <DatButton label="Button" onClick={this.handleClick} />
          <DatFolder title='Folder'>
            <DatString path="string" label="String" />
            <DatNumber path="minMaxNumber" label="Number" min={0} max={100} step={1} />
            <DatFolder title='Nested Folder'>
              <DatNumber path="minMaxNumber" label="Number" min={0} max={100} step={1} />
              <DatString path="nested.string" label="String" />
            </DatFolder>
          </DatFolder>
        </Dat>
      </main>

    );
  }
}

export default App;
