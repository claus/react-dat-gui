import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
import result from 'lodash.result';
import cx from 'classnames';

export default class DatBoolean extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object.isRequired,
    path: PropTypes.string,
    label: PropTypes.string,
    labelWidth: PropTypes.string.isRequired,
    _onUpdateValue: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: null,
    style: null,
    path: null,
    label: null
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
    const { _onUpdateValue, path } = this.props;

    _onUpdateValue(path, value);
  };

  render() {
    const { path, label, labelWidth, className, style } = this.props;
    const labelText = isString(label) ? label : path;

    return (
      <li className={cx('cr', 'boolean', className)} style={style}>
        <label>
          <span className="label-text" style={{ width: labelWidth }}>
            {labelText}
          </span>
          <span
            className="checkbox-container"
            style={{ width: `calc(100% - ${labelWidth})` }}
          >
            <input
              type="checkbox"
              checked={this.state.value}
              onChange={this.handleChange}
            />
          </span>
        </label>
      </li>
    );
  }
}
