import React, { Component } from 'react';

import { EditableInput } from 'react-color/lib/components/common';
import color from 'react-color/lib/helpers/color';

export default class Fields extends Component {
  state = {
    view: '',
  }

  handleChange = (value, e) => {
    color.isValidHex(value) && this.props.onChange({
      hex: value,
      source: 'hex',
    }, e);
  }

  render() {
    return (
      <div className="flexbox-fix fields-wrap">
        <div className="flexbox-fix fields">
          <div className='field'>
            <EditableInput
              value={this.props.hex}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
