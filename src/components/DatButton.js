import React from 'react';
import PropTypes from 'prop-types';

const DatButton = ({ label, onClick }) => (
  <li className="cr button">
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
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

DatButton.defaultProps = {
  label: null
};

export default DatButton;
