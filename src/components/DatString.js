import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
import result from 'lodash.result';
import cx from 'classnames';

export default class DatString extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
    path: PropTypes.string,
    label: PropTypes.string,
    labelWidth: PropTypes.string.isRequired,
    liveUpdate: PropTypes.bool,
    onUpdate: PropTypes.func,
    _onUpdateValue: PropTypes.func
  };

  static defaultProps = {
    className: null,
    style: null,
    data: null,
    path: null,
    label: null,
    liveUpdate: true,
    onUpdate: () => null,
    _onUpdateValue: () => null
  };

  constructor() {
    super();
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
    const { value } = event.target;
    const { liveUpdate } = this.props;

    if (liveUpdate) this.update(value);
  };

  handleFocus = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  };

  handleBlur = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
    window.getSelection().removeAllRanges();

    const { liveUpdate } = this.props;
    if (!liveUpdate) this.update();
  };

  handleKeyDown = event => {
    const key = event.keyCode || event.which;
    const { liveUpdate } = this.props;

    if (key === 13 && !liveUpdate) this.update();
  };

  update(value) {
    const { _onUpdateValue, onUpdate, path } = this.props;
    _onUpdateValue(path, value);
    onUpdate(value);
  }

  render() {
    const { path, label, labelWidth, className, style } = this.props;
    const labelText = isString(label) ? label : path;

    return (
      <li className={cx('cr', 'string', className)} style={style}>
        <label>
          <span className="label-text" style={{ width: labelWidth }}>
            {labelText}
          </span>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </label>
      </li>
    );
  }
}
