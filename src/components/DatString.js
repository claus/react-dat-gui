import React, { Component } from 'react';

import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
import result from 'lodash.result';

export default class DatString extends Component {
  static propTypes = {
    data: PropTypes.object,
    path: PropTypes.string,
    label: PropTypes.string,
    labelWidth: PropTypes.number,
    liveUpdate: PropTypes.bool,
    onUpdate: PropTypes.func,
    _onUpdateValue: PropTypes.func,
  };

  componentWillMount() {
    this.setState({
      value: this.getValue()
    });
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
    const value = event.target.value;

    this.setState({ value }, () => {
      this.props.liveUpdate && this.update();
    });
  }

  handleFocus = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleBlur = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
    window.getSelection().removeAllRanges();
    !this.props.liveUpdate && this.update();
  }

  handleKeyDown = event => {
    const key = event.keyCode || event.which;

    if (key === 13) {
      !this.props.liveUpdate && this.update();
    }
  }

  update() {
    const { value } = this.state;

    this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
    this.props.onUpdate && this.props.onUpdate(value);
  }

  render() {
    const { path, label, labelWidth } = this.props;
    const labelText = isString(label) ? label : path;

    return (
      <li className="cr string">
          <label>
            <span className="label-text" style={{ width: `${labelWidth}%` }}>{labelText}</span>
            <input
              type="text"
              value={this.state.value}
              style={{ width: `${100 - labelWidth}%` }}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </label>
      </li>
    );
  }
}
