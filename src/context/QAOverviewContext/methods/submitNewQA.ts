import { QAType } from '../../../types/QAType';
import { QAOverviewContextState } from '../QAOverviewProvider';

export const submitNewQA = (
  data: QAType,
  delay: boolean,
  setState: React.Dispatch<React.SetStateAction<QAOverviewContextState>>,
  state: QAOverviewContextState
) => {
  if (delay) {
    setState({ ...state, isQALoading: true });
    const timer = setTimeout(
      () => setState({ ...state, questionAnswerList: [...state.questionAnswerList!, data], isQALoading: false }),
      1000
    );
    clearTimeout(timer);
  }
  setState({ ...state, questionAnswerList: [...state.questionAnswerList!, data] });
};
