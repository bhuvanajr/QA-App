import React from 'react';
import { QAType } from '../../../types/QAType';
import { TextInput } from '../../_shared';

type Props = {
  defaultQA?: QAType;
};
export const QuestionInput: React.FC<Props> = ({ defaultQA }) => {
  return (
    <div className="form-group row">
      <label htmlFor="question" className="col-lg-8 col-form-label">
        Question
      </label>
      <div className="col-lg-8">
        <TextInput
          name="question"
          className="form-control"
          placeholder="Enter your question here"
          rules={{
            required: "'Question' is a required field",
          }}
          autoComplete="off"
          defaultValue={defaultQA?.question ?? ''}
        />
      </div>
    </div>
  );
};
