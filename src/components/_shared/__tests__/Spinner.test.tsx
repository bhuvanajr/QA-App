import { render } from '@testing-library/react';
import React from 'react';
import { Spinner } from '../Spinner';

test('should render Spinner correctly', () => {
  const { container } = render(<Spinner />);
  expect(container).toMatchSnapshot();
});
