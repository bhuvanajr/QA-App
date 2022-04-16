import { QAOverviewContextState } from '../QAOverviewProvider';

export const resetQA = (setState: React.Dispatch<React.SetStateAction<QAOverviewContextState>>) => {
  setState(s => ({ ...s, questionAnswerList: undefined }));
};
