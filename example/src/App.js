import './App.css';

import Dat, { DatBoolean, DatButton, DatNumber, DatString } from 'react-dat-gui';
import React, { Component } from 'react';

class App extends Component {
  state = {
    data: {
      string: 'Hello World',
      number: 66,
      boolean: true,
    },
  }

  render() {
    const { data } = this.state;

    return (
      <Dat data={data} onUpdate={this.handleUpdate}>
        <DatString path="string" label="String" />
        <DatNumber path="number" label="Number" min={0} max={100} step={1} />
        <DatNumber path="number" label="Number" />
        <DatBoolean path="boolean" label="Boolean" />
        <DatButton label="Button" onClick={this.handleClick} />
      </Dat>
    );
  }
}

export default App;
