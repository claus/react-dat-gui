import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditableInput } from 'react-color/lib/components/common';
import color from 'react-color/lib/helpers/color';

export default class Fields extends Component {
  static propTypes = {
    hex: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  handleChange = (value, e) => {
    const { onChange } = this.props;

    if (color.isValidHex(value))
      onChange(
        {
          hex: value,
          source: 'hex'
        },
        e
      );
  };

  render() {
    const { hex } = this.props;

    return (
      <div className="flexbox-fix fields-wrap">
        <div className="flexbox-fix fields">
          <div className="field">
            <EditableInput value={hex} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}
