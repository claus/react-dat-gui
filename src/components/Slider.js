/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash.clamp';
import cx from 'classnames';
import { toNumber } from './utils';

export default class Slider extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    min: PropTypes.number,
    max: PropTypes.number,
    width: PropTypes.number,
    onUpdate: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: null,
    style: null,
    value: null,
    min: null,
    max: null,
    width: null
  };

  constructor() {
    super();
    this.state = { value: null };
    this.sliderRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextValue = toNumber(nextProps.value);

    if (prevState.value === nextValue) return null;

    return {
      value: nextValue
    };
  }

  handleMouseDown = event => {
    this.update(event.pageX);

    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseMove = event => {
    this.update(event.pageX);

    event.preventDefault();
  };

  handleMouseUp = event => {
    this.update(event.pageX, false);

    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  handleClick = event => {
    // do not focus input field on slider click
    event.preventDefault();
  };

  update(pageX, isLive = true) {
    const { min, max, onUpdate } = this.props;
    const rect = this.sliderRef.current.getBoundingClientRect();
    const x = pageX - rect.left;
    const w = rect.right - rect.left;
    const value = min + clamp(x / w, 0, 1) * (max - min);

    this.setState({ value }, () => {
      onUpdate(value, isLive);
    });
  }

  render() {
    const { min, max, width, className, style } = this.props;
    const { value } = this.state;
    const widthBackground = clamp(((value - min) * 100) / (max - min), 0, 100);
    const sliderStyles = {
      width: `${width}%`,
      backgroundSize: `${widthBackground}% 100%`,
      ...style
    };

    return (
      <span
        ref={this.sliderRef}
        className={cx('slider', className)}
        style={sliderStyles}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        role="slider"
        tabIndex={0}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      />
    );
  }
}
