import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useQAOverviewContext, useSortContext } from '../../../context';
import { QAGridBody } from './QAGridBody';

export const QAList = () => {
  const {
    methods: { requestSort, getSortIconClassName },
  } = useSortContext();
  const {
    state: { isQALoading },
    methods: { resetQA },
  } = useQAOverviewContext();
  const iconClass = getSortIconClassName('question');

  return (
    <div className="mb-5 col-lg-10">
      <div className="d-flex align-items-center mb-6">
        <div data-tooltip="Find all the questions here">
          <h2>Questions and Answers</h2>
        </div>
        <button type="button" className="btn-icon" onClick={() => requestSort('question')}>
          {iconClass && <div className={`icon ${iconClass}`} />}
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
