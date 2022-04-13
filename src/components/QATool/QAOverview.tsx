import React, { useEffect, useState } from 'react';
import { SortProvider } from '../../context';
import { getQnA } from '../../context/QAOverviewContext/api';
import { QAOverviewProvider } from '../../context/QAOverviewContext/QAOverviewProvider';
import { QAType } from '../../types/QAType';
import { QAList } from './QAList';

type Props = {};

export const QAOverview = (props: Props) => {
  const [data, setData] = useState<QAType[]>([]);
  const initialConfig = { key: 'solution', direction: 'ascending' };

  return (
    <SortProvider initalConfig={initialConfig}>
      <QAOverviewProvider>
        <div className="title-block">
          <h2 className="title">The awesome QA Tool</h2>
          <h3 className="subtitle">Feel free to add new questions</h3>
        </div>
        <QAList />
      </QAOverviewProvider>
    </SortProvider>
  );
};
