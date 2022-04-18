import { render, screen } from '@testing-library/react';
import React from 'react';
import { QAList } from '../QAList';

let mockLoading: boolean;
jest.mock('context', () => ({
  useQAOverviewContext: () => ({
    state: {
      isQALoading: mockLoading,
    },
  }),
}));

jest.mock('../QAGridBody.tsx', () => ({
  QAGridBody: () => <div>QAGridBody</div>,
}));
jest.mock('../ResetButton.tsx', () => ({
  ResetButton: () => <div>ResetButton</div>,
}));
jest.mock('../SortButton.tsx', () => ({
  SortButton: () => <div>SortButton</div>,
}));
jest.mock('components/_shared', () => ({
  Spinner: () => <div>Spinner</div>,
}));

test('should render QAList with SPinner when isloading is true', () => {
  mockLoading = true;
  render(<QAList />);
  const spinnerElement = screen.getByText(/Spinner/i);
  expect(spinnerElement).toBeInTheDocument();
});
