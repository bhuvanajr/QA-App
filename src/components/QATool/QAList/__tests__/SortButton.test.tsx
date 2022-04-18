import { render, screen } from '@testing-library/react';
import React from 'react';
import { SortButton } from '../SortButton';
import userEvent from '@testing-library/user-event';

const mockrequestsort = jest.fn();
const mockgetsorticonclassName = jest.fn();

jest.mock('context', () => ({
  useSortContext: () => ({
    methods: {
      requestSort: mockrequestsort,
      getSortIconClassName: mockgetsorticonclassName,
    },
  }),
}));

test('should call requestSort fn correctly', () => {
  render(<SortButton />);
  userEvent.click(screen.getByRole('button'));
  expect(mockrequestsort).toHaveBeenCalled();
});

test('should render sort button in ascending correctly', () => {
  mockgetsorticonclassName.mockReturnValueOnce('ascending');
  const { container } = render(<SortButton />);
  expect(container).toMatchSnapshot();
});

test('should render sort button in descending correctly', () => {
  mockgetsorticonclassName.mockReturnValueOnce('descending');
  const { container } = render(<SortButton />);
  expect(container).toMatchSnapshot();
});
