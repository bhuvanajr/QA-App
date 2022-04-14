import React from 'react';
import { SortProvider } from '../../context';
import { QAOverviewProvider } from '../../context/QAOverviewContext/QAOverviewProvider';
import { QAForm } from './QAForm';
import { QAList } from './QAList';

export const QAOverview = () => {
  const initialConfig = { key: 'solution', direction: 'ascending' };

  return (
    <SortProvider initalConfig={initialConfig}>
      <QAOverviewProvider>
        <div className="title-block">
          <h1 className="title">The awesome QA Tool</h1>
          <h3 className="subtitle">Feel free to add new questions</h3>
        </div>
        <QAList />
        <QAForm />
      </QAOverviewProvider>
    </SortProvider>
  );
};
