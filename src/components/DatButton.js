import React, { PropTypes } from 'react';

const DatButton = ({ label, onClick }) => (
    <li className="cr button" onClick={onClick}>
        <span className="label-text">{label}</span>
    </li>    
);

DatButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default DatButton;
