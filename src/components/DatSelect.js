import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
import result from 'lodash.result';

export default class DatSelect extends Component {
  static propTypes = {
    data: PropTypes.object,
    path: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    labelWidth: PropTypes.number,
    liveUpdate: PropTypes.bool,
    onUpdate: PropTypes.func,
    _onUpdateValue: PropTypes.func
  };

  static defaultProps = {
    data: null,
    path: null,
    label: null,
    labelWidth: null,
    liveUpdate: true,
    onUpdate: () => null,
    _onUpdateValue: () => null
  };

  constructor() {
    super();
    this.state = {
      value: null,
      options: null
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const nextValue = result(nextProps.data, nextProps.path);

    return {
      value: nextValue,
      options: nextProps.options
    };
  }

  handleChange = event => {
    const { value } = event.target;
    const { liveUpdate, _onUpdateValue, onUpdate, path } = this.props;
    _onUpdateValue(path, value);
    if (liveUpdate) onUpdate(value);
  };

  render() {
    const { path, label, labelWidth } = this.props;
    const { value, options } = this.state;
    const labelText = isString(label) ? label : path;

    return (
      <li className="cr select">
        <label>
          <span className="label-text" style={{ width: `${labelWidth}%` }}>
            {labelText}
          </span>
          <select
            value={value}
            style={{ width: `${100 - labelWidth}%` }}
            onChange={this.handleChange}
          >
            {options.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </li>
    );
  }
}
