import { ColorWrap, Hue, Saturation } from 'react-color/lib/components/common';
import PropTypes from 'prop-types';
import React from 'react';
import Fields from './Fields';
import Pointer from './Pointer';
import PointerCircle from './PointerCircle';

const Picker = ({ onChange, hsl, hsv, hex, className = '' }) => {
  return (
    <div className={`picker ${className}`}>
      <div className="saturation-wrap">
        <Saturation
          className="saturation"
          hsl={hsl}
          hsv={hsv}
          pointer={PointerCircle}
          onChange={onChange}
        />
      </div>
      <div className="body">
        <div className="controls">
          <div className="toggles">
            <div className="hue-wrap">
              <Hue
                className="hue"
                hsl={hsl}
                pointer={Pointer}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <Fields hex={hex} onChange={onChange} />
      </div>
    </div>
  );
};

Picker.propTypes = {
  onChange: PropTypes.func.isRequired,
  hsl: PropTypes.string,
  hsv: PropTypes.string,
  hex: PropTypes.string,
  className: PropTypes.string,
  disableAlpha: PropTypes.bool
};

Picker.defaultProps = {
  hsl: null,
  hsv: null,
  hex: null,
  className: null,
  disableAlpha: false
};

export default ColorWrap(Picker);
