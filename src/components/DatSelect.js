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

  state = {
    value: this.getValue(),
    options: this.props.options
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: this.getValue(nextProps)
    });
  }

  getValue(props = this.props) {
    return result(props.data, props.path);
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState({ value }, () => {
      this.props.liveUpdate && this.update();
    });
  };

  update() {
    const { value } = this.state;

    this.props._onUpdateValue &&
      this.props._onUpdateValue(this.props.path, value);
    this.props.onUpdate && this.props.onUpdate(value);
  }

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
