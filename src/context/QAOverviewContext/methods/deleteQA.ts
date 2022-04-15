import { QAType } from '../../../types/QAType';
import { QAOverviewContextState } from '../QAOverviewProvider';

export const deleteQA = async (
  data: QAType,
  setState: React.Dispatch<React.SetStateAction<QAOverviewContextState>>,
  state: QAOverviewContextState
) => {
  console.log('delete called');
  const updatedList = state.questionAnswerList?.filter(qa => qa.qaId !== data.qaId);
  setState({ ...state, questionAnswerList: updatedList });
};
