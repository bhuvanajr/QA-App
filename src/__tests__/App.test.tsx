import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('should render correctly', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
