/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isFinite from 'lodash.isfinite';
import isString from 'lodash.isstring';
import result from 'lodash.result';
import cx from 'classnames';
import Slider from './Slider';
import { isInteger, toNumber } from './utils';

const applyConstraints = ({ value, min, max, step }) => {
  const [hasMin, hasMax, hasStep] = [
    isFinite(min),
    isFinite(max),
    isFinite(step)
  ];
  const decimalPlaces =
    hasStep && !isInteger(step) ? step.toString().split('.')[1].length : 0;
  let [isMin, isMax] = [false, false];

  value = toNumber(value);

  if (hasMin && value <= min) {
    value = min;
    isMin = true;
  }

  if (hasMax && value >= max) {
    value = max;
    isMax = true;
  }

  if (!isMin && !isMax) {
    if (hasStep && step !== 0) {
      value = Math.round(value / step) * step;
    }
  }

  return value.toFixed(decimalPlaces);
};

export default class DatNumber extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    data: PropTypes.object.isRequired,
    path: PropTypes.string,
    label: PropTypes.string,
    labelWidth: PropTypes.string.isRequired,
    _onUpdateValue: PropTypes.func.isRequired,
    disableSlider: PropTypes.bool
  };

  static defaultProps = {
    className: null,
    style: null,
    min: null,
    max: null,
    step: null,
    path: null,
    label: null,
    disableSlider: null
  };

  constructor() {
    super();
    this.state = { value: null };
  }

  static getDerivedStateFromProps(nextProps) {
    const { min, max, step } = nextProps;
    const nextValue = applyConstraints({
      value: result(nextProps.data, nextProps.path),
      min,
      max,
      step
    });

    return {
      value: nextValue
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.update(value);
  };

  handleSliderUpdate = value => {
    const { min, max, step } = this.props;

    this.update(applyConstraints({ value, min, max, step }));
  };

  update = value => {
    const { _onUpdateValue, path } = this.props;

    _onUpdateValue(path, toNumber(value));
  };

  renderSlider(width) {
    const { min, max } = this.props;
    const { value } = this.state;

    return (
      <Slider
        value={value}
        min={min}
        max={max}
        width={width}
        onUpdate={this.handleSliderUpdate}
      />
    );
  }

  render() {
    const {
      min,
      max,
      path,
      label,
      labelWidth,
      step,
      disableSlider,
      className,
      style
    } = this.props;
    const labelText = isString(label) ? label : path;
    const hasSlider = isFinite(min) && isFinite(max);
    const controlsWidth = 100;
    const inputWidth =
      hasSlider && disableSlider !== true
        ? Math.round(controlsWidth / 3)
        : controlsWidth;
    const sliderWidth = controlsWidth - inputWidth;

    return (
      <li className={cx('cr', 'number', className)} style={style}>
        <label>
          <span className="label-text" style={{ width: labelWidth }}>
            {labelText}
          </span>
          {hasSlider && disableSlider !== true
            ? this.renderSlider(sliderWidth)
            : null}
          <input
            type="number"
            step={step}
            min={min}
            max={max}
            inputMode="numeric"
            value={this.state.value}
            style={{ width: `${inputWidth}%` }}
            onChange={this.handleChange}
          />
        </label>
      </li>
    );
  }
}
