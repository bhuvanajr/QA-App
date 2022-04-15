import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useQAOverviewContext, useSortContext } from '../../../context';
import { QAGridBody } from './QAGridBody';

export const QAList = () => {
  const {
    methods: { requestSort },
    state: { sortConfig },
  } = useSortContext();
  const {
    state: { isQALoading },
    methods: { resetQA },
  } = useQAOverviewContext();

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="mb-5 col-lg-10">
      <div className="d-flex align-items-center mb-6">
        <h2>Questions and Answers</h2>
        <button type="button" className="btn-icon" onClick={() => requestSort('question')}>
          {getClassNamesFor('question') && <div className={`icon ${getClassNamesFor('question')}`} />}
        </button>
        <button type="button" className="btn-icon" onClick={() => resetQA()}>
          <div className="icon icon-delete" />
        </button>
      </div>

      <Accordion>
        <div className="table-responsive rounded">
          <table className="table mb-0">
            <QAGridBody />
          </table>
        </div>
      </Accordion>
      {isQALoading && (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};
