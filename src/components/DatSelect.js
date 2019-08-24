import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
import result from 'lodash.result';
import cx from 'classnames';

export default class DatSelect extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object.isRequired,
    path: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    optionLabels: PropTypes.array,
    labelWidth: PropTypes.string.isRequired,
    liveUpdate: PropTypes.bool.isRequired,
    onUpdate: PropTypes.func,
    _onUpdateValue: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: null,
    style: null,
    path: null,
    label: null,
    optionLabels: null,
    onUpdate: () => null
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
    const {
      path,
      label,
      labelWidth,
      optionLabels,
      className,
      style
    } = this.props;
    const { value, options } = this.state;
    const labelText = isString(label) ? label : path;

    return (
      <li className={cx('cr', 'select', className)} style={style}>
        <label>
          <span className="label-text" style={{ width: labelWidth }}>
            {labelText}
          </span>
          <select
            value={value}
            onChange={this.handleChange}
            style={{ width: `calc(100% - ${labelWidth})` }}
          >
            {options.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={item}>
                {optionLabels ? optionLabels[index] : item}
              </option>
            ))}
          </select>
        </label>
      </li>
    );
  }
}
