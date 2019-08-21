import React from 'react';
import { render } from '@testing-library/react';
import DatGUI from '../../dist/index.cjs';

test('Renders without errors', () => {
  render(<DatGUI data={{ data: {} }} onUpdate={() => null} />);
});
