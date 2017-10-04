import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import isString from 'lodash.isstring';
import reactCSS from 'reactcss';
import result from 'lodash.result';

export default class DatColor extends Component {
  static propTypes = {
    data: PropTypes.object,
    path: PropTypes.string,
    label: PropTypes.string,
    labelWidth: PropTypes.number,
    liveUpdate: PropTypes.bool,
    onUpdate: PropTypes.func,
    _onUpdateValue: PropTypes.func,
  };

  state = {
    value: this.getValue(),
    displayColorPicker: false,
  }

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

  handleClick = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    });
  };

  handleClose = () => {
    this.setState({
      displayColorPicker: false
    });
  };

  handleChange = color => {
    const value = isString(color) ? color : color.hex;

    this.setState({ value }, () => {
      this.props.liveUpdate && this.update();
    });
  }

  update() {
    const { value } = this.state;

    this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
    this.props.onUpdate && this.props.onUpdate(value);
  }

  renderPicker(styles) {
    const { value, displayColorPicker } = this.state;

    return (!displayColorPicker) ? null : (
      <div style={ styles.popover }>
        <div style={ styles.cover } onClick={ this.handleClose }/>
        <SketchPicker color={ value } onChange={ this.handleChange } />
      </div>
    );
  }

  render() {
    const { path, label, labelWidth } = this.props;
    const { value } = this.state;
    const labelText = isString(label) ? label : path;
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          backgroundColor: `${value}`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
          left: '0px'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <li className="cr color">
        <label>
          <span className="label-text" style={{ width: `${labelWidth}%` }}>{labelText}</span>
          <div style={{ width: `${100 - labelWidth}%`, backgroundColor: `${value}` }}>
            <div className='swatch' onClick={ this.handleClick }>
              {value}
            </div>
            {this.renderPicker(styles)}
          </div>
        </label>
      </li>
    );
  }
}
