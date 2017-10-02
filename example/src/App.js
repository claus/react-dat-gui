// Uncomment out the imports below (and comment out the node modules imports) to use the example to dev changes react-dat-gui code
// You will need to run `npm run example:seed` to get the latest code into the example directory

import './dev/style/dat.css';

import Dat, { DatBoolean, DatButton, DatFolder, DatNumber, DatString } from './dev';
import React, { Component } from 'react';

// import '../node_modules/react-dat-gui/dist/react-dat-gui.css';
//
// import Dat, { DatBoolean, DatButton, DatNumber, DatString } from 'react-dat-gui';


class App extends Component {
  state = {
    data: {
      string: 'Hello World',
      minMaxNumber: 66,
      number: 80,
      boolean: true,
      random: Math.random()
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
        </section>
        <Dat data={data} onUpdate={this.handleUpdate}>
          <DatString path="string" label="String" />
          <DatNumber path="minMaxNumber" label="Number" min={0} max={100} step={1} />
          <DatNumber path="number" label="Number" />
          <DatBoolean path="boolean" label="Boolean" />
          <DatButton label="Button" onClick={this.handleClick} />
          <DatFolder title='Folder' data={data}>
            <DatString path="string" label="String" />
            <DatNumber path="minMaxNumber" label="Number" min={0} max={100} step={1} />
          </DatFolder>
        </Dat>
      </main>

    );
  }
}

export default App;
