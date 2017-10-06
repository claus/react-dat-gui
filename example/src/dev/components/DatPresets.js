import React, { Component } from 'react';

import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';
import isString from 'lodash.isstring';
import result from 'lodash.result';

const DEFAULT_PRESET_KEY = 'Default';

export default class DatPresets extends Component {
  static propTypes = {
    data: PropTypes.object,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    labelWidth: PropTypes.number,
    liveUpdate: PropTypes.bool,
    onUpdate: PropTypes.func,
  };

  state = {
    value: {},
    options: [
      { [DEFAULT_PRESET_KEY]: cloneDeep(this.props.data) },
      ...this.props.options
    ]
  }

  componentWillMount() {
    this.setState({ value: cloneDeep(this.props.data) });
  }

  getValue(props = this.props) {
    return result(props.data, props.path);
  }

  handleChange = event => {
    const value = JSON.parse(event.target.value);

    this.setState({ value }, () => {
      this.props.liveUpdate && this.update();
    });
  }

  update() {
    const { value } = this.state;

    this.props.onUpdate && this.props.onUpdate(value);
  }

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
            {
              options.map(preset => {
                return Object.keys(preset).map(key => {
                  return <option key={key} value={JSON.stringify(preset[key])}>{key}</option>;
                });
              })
            }
          </select>
        </label>
      </li>
    );
  }
}
