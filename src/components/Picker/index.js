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
  disableAlpha: PropTypes.bool
};

Picker.defaultProps = {
  disableAlpha: false
};

export default ColorWrap(Picker);
