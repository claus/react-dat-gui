import React, { Component } from 'react';
import { isInteger, toNumber } from './utils';

import PropTypes from 'prop-types';
import Slider from './Slider';
import isFinite from 'lodash.isfinite';
import isString from 'lodash.isstring';
import result from 'lodash.result';

export default class DatNumber extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    data: PropTypes.object,
    path: PropTypes.string,
    label: PropTypes.string,
    labelWidth: PropTypes.number,
    customLabelWidth: PropTypes.number,
    liveUpdate: PropTypes.bool,
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
    return this.applyConstraints(result(props.data, props.path));
  }

  applyConstraints(value) {
    const { min, max, step } = this.props;
    const [ hasMin, hasMax, hasStep ] = [ isFinite(min), isFinite(max), isFinite(step) ];
    const decimalPlaces = (hasStep && !isInteger(step)) ? step.toString().split('.')[1].length : 0;
    let [ isMin, isMax ] = [ false, false ];

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
  }

  handleChange = event => {
    this.setState({ value: event.target.value }, this.update);
  }

  handleFocus = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleBlur = event => {
    const value = this.applyConstraints(event.target.value);

    document.removeEventListener('keydown', this.handleKeyDown);
    window.getSelection().removeAllRanges();

    this.setState({ value }, this.update);
  }

  handleKeyDown = event => {
    const key = event.keyCode || event.which;

    if (key === 13) {
      const value = this.applyConstraints(this.state.value);

      this.setState({ value }, this.update);
    }
  }

  handleSliderUpdate = (value, isLive) => {
    const constrained = this.applyConstraints(value);
    const shouldUpdate = (!isLive || this.props.liveUpdate);

    this.setState({ value: constrained }, () => {
      if (shouldUpdate) {
        this.update();
      }
    });
  }

  update() {
    const { value } = this.state;

    this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
    this.props.onUpdate && this.props.onUpdate(value);
  }

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
    const { min, max, path, label, labelWidth, step } = this.props;
    const labelText = isString(label) ? label : path;
    const hasSlider = isFinite(min) && isFinite(max);
    const controlsWidth = 100 - labelWidth;
    const inputWidth = hasSlider ? Math.round(controlsWidth / 3) : controlsWidth;
    const sliderWidth = controlsWidth - inputWidth;

    return (
      <li className="cr number">
        <label>
          <span className="label-text" style={{ width: `${labelWidth}%` }}>{labelText}</span>
          {hasSlider ? this.renderSlider(sliderWidth) : null}
          <input
            type="number"
            step={step}
            inputMode="numeric"
            value={this.state.value}
            style={{ width: `${inputWidth}%` }}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </label>
      </li>
    );
  }
}
