import React from 'react';
import { QAType } from '../../../types/QAType';
import { TextInput } from '../../_shared';

type Props = {
  defaultQA?: QAType;
};

export const AnswerInput: React.FC<Props> = ({ defaultQA }) => {
  return (
    <div className="form-group row">
      <label htmlFor="question" className="col-lg-8 col-form-label">
        Answer
      </label>
      <div className="col-lg-8">
        <TextInput
          name="answer"
          className="form-control"
          placeholder="Enter your answer here"
          rules={{
            required: "'Answer' is a required field",
          }}
          autoComplete="off"
          defaultValue={defaultQA?.answer ?? ''}
        />
      </div>
    </div>
  );
};
