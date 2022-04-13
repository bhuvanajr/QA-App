import sampleQA from '../../qnaSampleData.json';
import { QAType } from '../../types/QAType';

export const getQnA = () => {
  let qaData: QAType[] = sampleQA;
  return qaData;
};
