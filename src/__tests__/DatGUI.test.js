import React from 'react';
import { render } from '@testing-library/react';
import DatGUI from '../index';

test('Renders without errors', () => {
  render(<DatGUI data={{ data: {} }} onUpdate={() => null} />);
});
