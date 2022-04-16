import { QAType } from '../../../types/QAType';
import { QAOverviewContextState } from '../QAOverviewProvider';

export const editQA = async (
  data: QAType,
  setState: React.Dispatch<React.SetStateAction<QAOverviewContextState>>,
  state: QAOverviewContextState
) => {
  let updatelist = state.questionAnswerList?.filter(qa => qa.qaId !== data.qaId);
  updatelist?.push(data);
  setState({ ...state, questionAnswerList: updatelist });
};
