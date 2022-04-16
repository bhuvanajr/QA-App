import React, { createContext, useContext, useEffect, useState } from 'react';
import { getQnA } from './api';
import { QAType } from 'types/QAType';
import { submitNewQA, resetQA, deleteQA, editQA } from './methods';

export type QAOverviewContextState = {
  questionAnswerList?: QAType[];
  isQALoading: boolean;
};

type QAOverviewContextType = {
  methods: {
    submitNewQA: (data: QAType, delay: boolean) => void;
    resetQA: () => void;
    deleteQA: (data: QAType) => void;
    editQA: (data: QAType) => void;
  };
  state: QAOverviewContextState;
};

export const QAOverviewContext = createContext<QAOverviewContextType | undefined>(undefined);

export const QAOverviewProvider: React.FC = props => {
  const [qaState, setQAState] = useState<QAOverviewContextState>({ questionAnswerList: undefined, isQALoading: false });

  useEffect(() => {
    const data = getQnA();
    if (data) setQAState(s => ({ ...s, questionAnswerList: data! }));
  }, []);

  return (
    <QAOverviewContext.Provider
      value={{
        methods: {
          submitNewQA: (data, delay) => submitNewQA(data, delay, setQAState, qaState),
          resetQA: () => resetQA(setQAState),
          deleteQA: data => deleteQA(data, setQAState, qaState),
          editQA: data => editQA(data, setQAState, qaState),
        },
        state: qaState,
      }}
    >
      {props.children}
    </QAOverviewContext.Provider>
  );
};

export const useQAOverviewContext = () => {
  const context = useContext(QAOverviewContext);
  if (context === undefined) throw new Error('No QAOverviewContext is provided');
  return context;
};
