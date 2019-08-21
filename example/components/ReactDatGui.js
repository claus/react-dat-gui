import React, { Component } from 'react';
import DatGui, {
  DatBoolean,
  DatButton,
  DatColor,
  DatFolder,
  DatNumber,
  DatPresets,
  DatSelect,
  DatString
} from 'react-dat-gui';
import 'react-dat-gui/dist/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        string: 'Hello World',
        minMaxNumber: 66,
        number: 80,
        boolean: true,
        select: 'one',
        color: '#2FA1D6',
        random: null,
        nested: {
          string: 'Goodbye Cruel World'
        }
      }
    };
  }

  componentDidMount = () => this.generateRandomNumber();

  handleClick = () => this.generateRandomNumber();

  handleUpdate = data => this.setState({ data });

  generateRandomNumber = () =>
    this.setState(prevState => ({
      data: { ...prevState.data, random: Math.random() }
    }));

  render() {
    const { data } = this.state;
    const swatchStyle = {
      width: '10px',
      height: '10px',
      display: 'inline-block'
    };
    const presetA = {
      string: 'Preset A',
      minMaxNumber: 33,
      number: 40,
      boolean: false,
      select: 'one',
      color: '#e61d5f',
      random: Math.random(),
      nested: {
        string: 'Sup'
      }
    };
    const presets = [
      { A: { ...data, ...presetA } },
      { B: { ...data, string: 'Preset B' } },
      { C: { ...data, string: 'Preset C' } }
    ];

    return (
      <main>
        <h1>
          <b style={{ color: `${data.color}` }}>react-dat-gui</b>
        </h1>
        <h2>Use the controls and watch your changes happen in real time!</h2>
        <section>
          <div>
            <b>String value:</b> {data.string}
          </div>
          <div>
            <b>Slider value:</b> {data.minMaxNumber}
          </div>
          <div>
            <b>Number value:</b> {data.number}
          </div>
          <div>
            <b>Checkbox value:</b> {data.boolean ? 'true' : 'false'}
          </div>
          <div>
            <b>Select value:</b> {data.select}
          </div>
          <div>
            <b>Picked color:</b>{' '}
            <div style={{ ...swatchStyle, backgroundColor: `${data.color}` }} />
          </div>
          <div>
            <b>Click the button for a random number:</b> {data.random}
          </div>
          <div>
            <b>Nested string value:</b> {data.nested.string}
          </div>
        </section>
        <DatGui data={data} onUpdate={this.handleUpdate}>
          <DatPresets
            label="Presets"
            options={presets}
            onUpdate={this.handleUpdate}
          />
          <DatString path="string" label="String" />
          <DatNumber
            path="minMaxNumber"
            label="Number"
            min={0}
            max={100}
            step={1}
          />
          <DatNumber path="number" label="Number" />
          <DatBoolean path="boolean" label="Boolean" />
          <DatButton label="Button" onClick={this.handleClick} />
          <DatSelect
            label="Select"
            path="select"
            options={['two', 'three', 'four']}
          />
          <DatColor label="Color" path="color" />
          <DatFolder title="Folder">
            <DatString path="string" label="String" />
            <DatNumber
              path="minMaxNumber"
              label="Number"
              min={0}
              max={100}
              step={1}
            />
            <DatFolder title="Nested Folder">
              <DatNumber
                path="minMaxNumber"
                label="Number"
                min={0}
                max={100}
                step={1}
              />
              <DatString path="nested.string" label="String" />
              <DatFolder title="Another Nested Folder">
                <DatColor label="Color" path="color" />
                <DatString path="nested.string" label="Nested String" />
              </DatFolder>
            </DatFolder>
          </DatFolder>
        </DatGui>
      </main>
    );
  }
}

export default App;
