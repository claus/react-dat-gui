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
    _onUpdateValue: PropTypes.func
  };

  static defaultProps = {
    data: null,
    path: null,
    label: null,
    onUpdate: () => null,
    _onUpdateValue: () => null
  };

  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextValue = result(nextProps.data, nextProps.path);

    if (prevState.value === nextValue) return null;

    return {
      value: nextValue
    };
  }

  handleChange = event => {
    const value = event.target.checked;
    const { onUpdate, _onUpdateValue, path } = this.props;

    _onUpdateValue(path, value);
    onUpdate(value);
  };

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
            onChange={this.handleChange}
          />
        </label>
      </li>
    );
  }
}
