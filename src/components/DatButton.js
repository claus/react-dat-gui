import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DatButton = ({ label, onClick, className, style }) => (
  <li className={cx('cr', 'button', className)} style={style}>
    <span
      className="label-text"
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      {label}
    </span>
  </li>
);

DatButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

DatButton.defaultProps = {
  className: null,
  style: null,
  label: null
};

export default DatButton;
