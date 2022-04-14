import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQAOverviewContext } from '../../../context';
import { AnswerInput } from './AnswerInput';
import { QuestionInput } from './QuestionInput';

export const QAForm: React.FC = () => {
  const formMethods = useForm();
  const {
    formState: { isSubmitSuccessful },
    reset,
  } = formMethods;
  const [delay, setDelay] = useState();
  const {
    methods: { submitNewQA },
  } = useQAOverviewContext();

  const onSubmit = (data: any) => {
    var uuid = require('uuid');
    var id = uuid.v4();
    submitNewQA({ question: data.question, answer: data.answer, qaId: id }, data.delay);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <h2>Create a new question</h2>
        <QuestionInput />
        <AnswerInput />

        <div className="col-auto my-2">
          <div className="custom-control custom-checkbox mr-sm-2">
            <input
              type="checkbox"
              className="custom-control-input mx-2"
              value={delay}
              {...formMethods.register('delay')}
            />
            <label className="custom-control-label" htmlFor="customControlAutosizing">
              Introduce 5 second delay
            </label>
          </div>
        </div>

        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary btn-submit">
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
