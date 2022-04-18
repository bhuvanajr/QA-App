import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

jest.mock('../components', () => ({
  ContainerFooter: () => <div>ContainerFooter</div>,
  ContainerHeader: () => <div>ContainerHeader</div>,
  QAOverview: () => <div>QAOverview</div>,
}));

test('should render correctly', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
