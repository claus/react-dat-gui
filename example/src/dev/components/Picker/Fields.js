/* eslint-disable react/no-did-mount-set-state, no-param-reassign */

import { EditableInput } from 'react-color/lib/components/common';
import React from 'react';
import color from 'react-color/lib/helpers/color';
import reactCSS from 'reactcss';

export default class Fields extends React.Component {
  state = {
    view: '',
  }

  handleChange = (value, e) => {
    color.isValidHex(value) && this.props.onChange({
      hex: value,
      source: 'hex',
    }, e);
  }

  showHighlight = e => {
    e.target.style.background = '#eee';
  }

  hideHighlight = e => {
    e.target.style.background = 'transparent';
  }

  render() {
    const styles = reactCSS({
      'default': {
        wrap: {
          paddingTop: '16px',
          display: 'flex',
        },
        fields: {
          flex: '1',
          display: 'flex',
          marginLeft: '-6px',
        },
        field: {
          paddingLeft: '6px',
          width: '100%',
        },
        alpha: {
          paddingLeft: '6px',
          width: '100%',
        },
        toggle: {
          width: '32px',
          textAlign: 'right',
          position: 'relative',
        },
        icon: {
          marginRight: '-4px',
          marginTop: '12px',
          cursor: 'pointer',
          position: 'relative',
        },
        iconHighlight: {
          position: 'absolute',
          width: '24px',
          height: '28px',
          background: '#eee',
          borderRadius: '4px',
          top: '10px',
          left: '12px',
          display: 'none',
        },
        input: {
          fontSize: '11px',
          color: '#333',
          width: '100%',
          borderRadius: '2px',
          border: 'none',
          boxShadow: 'inset 0 0 0 1px #dadada',
          height: '21px',
          textAlign: 'center',
        },
        label: {
          textTransform: 'uppercase',
          fontSize: '11px',
          lineHeight: '11px',
          color: '#969696',
          textAlign: 'center',
          display: 'block',
          marginTop: '12px',
        },
        svg: {
          width: '24px',
          height: '24px',
          border: '1px transparent solid',
          borderRadius: '5px',
        },
      },
      'disableAlpha': {
        alpha: {
          display: 'none',
        },
      },
    }, this.props, this.state);

    return (
      <div style={ styles.wrap } className="flexbox-fix">
        <div style={ styles.fields } className="flexbox-fix">
          <div style={ styles.field }>
            <EditableInput
              style={{ input: styles.input, label: styles.label }}
              label="" value={ this.props.hex }
              onChange={ this.handleChange }
            />
          </div>
        </div>
      </div>
    );
  }
}
