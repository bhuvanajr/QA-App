import { QAOverviewContextState } from 'context/QAOverviewContext/QAOverviewProvider';
import { QAType } from 'types/QAType';
import { editQA } from '../editQA';

const mockdata: QAType = { question: 'how are you dear user', answer: 'all good dear develoPer', qaId: 'qwe123' };
const mocksetState = jest.fn();
const mockstate: QAOverviewContextState = {
  questionAnswerList: [
    { question: 'how are you', answer: 'all good', qaId: 'qwe123' },
    { question: 'how old is React', answer: 'React was founded in 2013', qaId: 'qwe567' },
  ],
  isQALoading: false,
};

test('should edit one record from qaList ', () => {
  editQA(mockdata, mocksetState, mockstate);
  expect(mocksetState).toBeCalledTimes(1);
  expect(mocksetState).toBeCalledWith({
    isQALoading: false,
    questionAnswerList: [
      { answer: 'React was founded in 2013', qaId: 'qwe567', question: 'how old is React' },
      { answer: 'all good dear develoPer', qaId: 'qwe123', question: 'how are you dear user' },
    ],
  });
});
