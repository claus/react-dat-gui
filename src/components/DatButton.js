import { func, string } from 'prop-types';

import React from 'react';

const DatButton = ({ label, onClick }) => (
  <li className="cr button" onClick={onClick}>
      <span className="label-text">{label}</span>
  </li>
);

DatButton.propTypes = {
  label: string,
  onClick: func,
};

export default DatButton;
