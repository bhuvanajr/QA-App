import React from 'react';
import { TextInput } from '../../_shared';

export const AnswerInput = () => {
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
        />
      </div>
    </div>
  );
};
