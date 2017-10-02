import Dat, { DatBoolean, DatButton, DatNumber, DatString } from './dat';
import React, { Component } from 'react';

class App extends Component {
  state = {
    data: {
      string: 'Hello World',
      number: 66,
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
            {data.string}
          </div>
          <div>
            {data.number}
          </div>
          <div>
            {(data.boolean) ? 'true' : 'false'}
          </div>
          <div>
            Click the button for a random number: {data.random}
          </div>
        </section>
        <Dat data={data} onUpdate={this.handleUpdate}>
          <DatString path="string" label="String" />
          <DatNumber path="number" label="Number" min={0} max={100} step={1} />
          <DatNumber path="number" label="Number" />
          <DatBoolean path="boolean" label="Boolean" />
          <DatButton label="Button" onClick={this.handleClick} />
        </Dat>
      </main>

    );
  }
}

export default App;
