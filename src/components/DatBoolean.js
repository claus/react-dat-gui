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
    this.setState({ value: event.target.checked }, () => {
      this.update();
    });
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
              <span className="label-text">{labelText}</span>
              <input
                  type="checkbox"
                  checked={this.state.value}
                  onChange={this.handleChange} />
              <div className="checkbox">
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path d="M0,0L50,50M50,0L0,50Z" />
                  </svg>
              </div>
          </label>
      </li>
    );
  }
}
