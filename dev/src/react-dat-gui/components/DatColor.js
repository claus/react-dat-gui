import React, { Component } from 'react';

import ColorPicker from './Picker/';
import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
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

  renderPicker() {
    const { value, displayColorPicker } = this.state;

    return (!displayColorPicker) ? null : (
      <div className='popover'>
        <div className='cover' onClick={ this.handleClose }/>
        <ColorPicker color={ value } onChange={ this.handleChange } />
      </div>
    );
  }

  render() {
    const { path, label, labelWidth } = this.props;
    const { value } = this.state;
    const labelText = isString(label) ? label : path;

    return (
      <li className="cr color" style={{borderLeftColor: `${value}`}}>
        <label>
          <span className="label-text" style={{ width: `${labelWidth}%` }}>{labelText}</span>
          <div style={{ width: `${100 - labelWidth}%`, backgroundColor: `${value}` }}>
            <div className='swatch' onClick={ this.handleClick }>
              {value}
            </div>
            {this.renderPicker()}
          </div>
        </label>
      </li>
    );
  }
}
