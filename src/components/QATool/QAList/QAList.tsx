import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useQAOverviewContext, useSortContext } from '../../../context';
import { QAGridBody } from './QAGridBody';

export const QAList = () => {
  const {
    methods: { requestSort },
    state: { sortConfig },
  } = useSortContext();
  const { state: isQALoading } = useQAOverviewContext();

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="rounded mb-5">
      <h2>
        Questions and Answers
        <button type="button" className="table-sort" onClick={() => requestSort('solution')}>
          {getClassNamesFor('solution') && <div className={`icon ${getClassNamesFor('solution')}`} />}
        </button>
      </h2>
      <Accordion>
        <div className="table-responsive rounded">
          <table className="table mb-0">
            <QAGridBody />
          </table>
        </div>
      </Accordion>
      {isQALoading && (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};
