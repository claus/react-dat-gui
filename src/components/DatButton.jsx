import React, { PropTypes } from 'react';

const DatButton = ({ label, onClick }) => (
    <li className="cr button">
        <span onClick={onClick}>{label}</span>
    </li>    
);

DatButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};

export default DatButton;
