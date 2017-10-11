import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import clamp from 'lodash.clamp';
import { toNumber } from './utils';

export default class Slider extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    min: PropTypes.number,
    max: PropTypes.number,
    width: PropTypes.number,
    onUpdate: PropTypes.func,
  };

  state = {
    value: toNumber(this.props.value),
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: toNumber(nextProps.value)
    });
  }

  handleMouseDown = event => {
    this.update(event.pageX);

    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = event => {
    this.update(event.pageX);

    event.preventDefault();
  }

  handleMouseUp = event => {
    this.update(event.pageX, false);

    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleClick = event => {
    // do not focus input field on slider click
    event.preventDefault();
  }

  update(pageX, isLive = true) {
    const { min, max, onUpdate } = this.props;
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const x = pageX - rect.left;
    const w = rect.right - rect.left;
    const value = min + clamp(x / w, 0, 1) * (max - min);

    this.setState({ value }, () => {
      onUpdate(value, isLive);
    });
  }

  render() {
    const { min, max, width } = this.props;
    const widthBackground = clamp((this.state.value - min) * 100 / (max - min), 0, 100);
    const style = {
      width: `${width}%`,
      backgroundSize: `${widthBackground}% 100%`
    };

    return (
      <span
        className="slider"
        style={style}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
      />
    );
  }
}
