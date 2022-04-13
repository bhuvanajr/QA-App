import React from 'react';
import { Accordion } from 'react-bootstrap';
import { SortProvider } from '../../context';
import { QABody } from './QABody';
import { QuotesGridHeader } from './QuotesGridHeader';

type Props = {};

export const QAList = (props: Props) => {
  return (
    <div className="container-lg rounded mb-10 ">
      <Accordion>
        <div className="table-responsive rounded">
          <table className="table mb-0">
            <QuotesGridHeader />
            <QABody />
          </table>
        </div>
      </Accordion>
    </div>
  );
};
