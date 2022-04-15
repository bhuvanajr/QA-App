import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQAOverviewContext } from '../../../context';
import { AnswerInput } from './AnswerInput';
import { DelayInput } from './DelayInput';
import { QuestionInput } from './QuestionInput';

export const QAForm: React.FC = () => {
  const formMethods = useForm();
  const {
    formState: { isSubmitSuccessful },
    reset,
  } = formMethods;

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
        <DelayInput />
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary btn-submit">
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
