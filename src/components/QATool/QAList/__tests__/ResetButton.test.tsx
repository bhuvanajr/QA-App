import { render, screen } from '@testing-library/react';
import React from 'react';
import { ResetButton } from '../ResetButton';
import userEvent from '@testing-library/user-event';

const mockreset = jest.fn();

jest.mock('context', () => ({
  useQAOverviewContext: () => ({
    methods: {
      resetQA: mockreset,
    },
  }),
}));

test('should call mockreset fn correctly', () => {
  render(<ResetButton />);
  userEvent.click(screen.getByRole('button'));
  expect(mockreset).toHaveBeenCalled();
});
