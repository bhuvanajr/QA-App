import { render } from '@testing-library/react';
import React from 'react';
import { QAOverview } from '../QAOverview';

test('should render QAOverview correctly', () => {
  const { container } = render(<QAOverview />);
  expect(container).toMatchSnapshot();
});
