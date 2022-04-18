import { render, screen } from '@testing-library/react';
import React from 'react';
import { QAForm } from '../QAForm';
import userEvent from '@testing-library/user-event';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: () => ({
    register: () => jest.fn(),
    formState: () => jest.fn(),
    handleSubmit: jest.fn(handleSubmit => () => handleSubmit({ question: 'test', answer: 'test' })),
  }),
}));

const mockSubmitNewQA = jest.fn();

jest.mock('context', () => ({
  useQAOverviewContext: () => ({
    methods: {
      submitNewQA: mockSubmitNewQA,
    },
  }),
}));

jest.mock('../AnswerInput.tsx', () => ({
  AnswerInput: () => <div>AnswerInput</div>,
}));
jest.mock('../QuestionInput.tsx', () => ({
  QuestionInput: () => <div>QuestionInput</div>,
}));
jest.mock('../DelayInput.tsx', () => ({
  DelayInput: () => <div>DelayInput</div>,
}));

const mockGetUuid = jest.fn();
jest.mock('helpers/helperFunctions', () => ({
  getUuid: () => 'eb06c88e-c2ca-4fb1-99f3-316262806fa8',
}));

test('should render QAForm correctly', () => {
  mockGetUuid.mockReturnValue('eb06c88e-c2ca-4fb1-99f3-316262806fa8');
  render(<QAForm />);
  userEvent.click(screen.getByText('Submit'));
  expect(mockSubmitNewQA).toHaveBeenCalledWith(
    { answer: 'test', qaId: 'eb06c88e-c2ca-4fb1-99f3-316262806fa8', question: 'test' },
    undefined
  );
});
