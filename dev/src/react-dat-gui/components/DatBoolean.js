import React, { Component } from 'react';

import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
import result from 'lodash.result';

export default class DatBoolean extends Component {
  static propTypes = {
    data: PropTypes.object,
    path: PropTypes.string,
    label: PropTypes.string,
    onUpdate: PropTypes.func,
    _onUpdateValue: PropTypes.func,
  };

  state = {
    value: this.getValue(),
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: this.getValue(nextProps)
    });
  }

  getValue(props = this.props) {
    return result(props.data, props.path);
  }

  handleChange = event => {
    this.setState({ value: event.target.checked }, this.update);
  }

  update() {
    const { value } = this.state;

    this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
    this.props.onUpdate && this.props.onUpdate(value);
  }

  render() {
    const { path, label } = this.props;
    const labelText = isString(label) ? label : path;

    return (
      <li className="cr boolean">
        <label>
          <span className="label-text">
            {labelText}
          </span>
          <input
            type="checkbox"
            checked={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </li>
    );
  }
}
