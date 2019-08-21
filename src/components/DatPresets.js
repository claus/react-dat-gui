import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';
import isString from 'lodash.isstring';

const DEFAULT_PRESET_KEY = 'Default';

export default class DatPresets extends Component {
  static propTypes = {
    data: PropTypes.object,
    path: PropTypes.string,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    labelWidth: PropTypes.number,
    liveUpdate: PropTypes.bool,
    onUpdate: PropTypes.func
  };

  static defaultProps = {
    data: null,
    path: null,
    labelWidth: 40,
    liveUpdate: true,
    onUpdate: () => null
  };

  constructor() {
    super();
    this.state = {
      defaultPreset: null,
      options: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextValue = cloneDeep(nextProps.data);
    const defaultPreset = prevState.defaultPreset
      ? prevState.defaultPreset
      : nextValue;

    return {
      defaultPreset,
      options: [
        { [DEFAULT_PRESET_KEY]: defaultPreset },
        ...nextProps.options.filter(preset => {
          return Object.keys(preset)[0] !== DEFAULT_PRESET_KEY;
        })
      ]
    };
  }

  handleChange = event => {
    const value = JSON.parse(event.target.value);
    const { liveUpdate, onUpdate } = this.props;

    if (liveUpdate) onUpdate(value);
  };

  render() {
    const { path, label, labelWidth } = this.props;
    const { options } = this.state;
    const labelText = isString(label) ? label : path;

    return (
      <li className="cr presets">
        <label>
          <span className="label-text" style={{ width: `${labelWidth}%` }}>
            {labelText}
          </span>
          <select
            style={{ width: `${100 - labelWidth}%` }}
            onChange={this.handleChange}
          >
            {options.map(preset => {
              return Object.keys(preset).map(key => {
                return (
                  <option key={key} value={JSON.stringify(preset[key])}>
                    {key}
                  </option>
                );
              });
            })}
          </select>
        </label>
      </li>
    );
  }
}
