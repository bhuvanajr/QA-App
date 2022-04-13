import React, { createContext, useContext, useEffect, useState } from 'react';
import { getQnA } from './api';
import { QAType } from '../../types/QAType';

type QAOverviewContextType = {
  methods: {};
  state: { questionAnswerList?: QAType[] };
};

export const QAOverviewContext = createContext<QAOverviewContextType | undefined>(undefined);

export const QAOverviewProvider: React.FC = props => {
  const [questionAnswerList, setQuestionAnswerList] = useState<QAType[]>();

  useEffect(() => {
    const data = getQnA();
    if (data) setQuestionAnswerList(data!);
  }, []);

  return (
    <QAOverviewContext.Provider
      value={{
        methods: {},
        state: {
          questionAnswerList: questionAnswerList,
        },
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
