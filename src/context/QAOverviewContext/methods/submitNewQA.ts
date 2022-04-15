import { QAType } from '../../../types/QAType';
import { QAOverviewContextState } from '../QAOverviewProvider';

export const submitNewQA = async (
  data: QAType,
  delay: boolean,
  setState: React.Dispatch<React.SetStateAction<QAOverviewContextState>>,
  state: QAOverviewContextState
) => {
  if (state.questionAnswerList) {
    if (delay) {
      setState({ ...state, isQALoading: true });
      setInterval(
        () => setState({ ...state, questionAnswerList: [...state.questionAnswerList!, data], isQALoading: false }),
        10000
      );
    } else setState({ ...state, questionAnswerList: [...state.questionAnswerList!, data] });
  } else setState({ ...state, questionAnswerList: [data!] });
};
