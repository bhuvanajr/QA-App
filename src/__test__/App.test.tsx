import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('should render correctly', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test('should render page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quotes Overview for you/i);
  expect(linkElement).toBeInTheDocument();
});
