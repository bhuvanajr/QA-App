import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQAOverviewContext } from '../../../context';
import { getUuid } from '../../../helpers/helperFunctions';
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
    var id = getUuid();
    submitNewQA({ question: data.question, answer: data.answer, qaId: id }, data.delay);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="d-flex">
          <div data-tooltip="Create a new question and answer here">
            <h2>Create a new question</h2>
          </div>
        </div>
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
