import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useQAOverviewContext } from 'context';
import { Spinner } from 'components/_shared';
import { QAGridBody } from './QAGridBody';
import { ResetButton } from './ResetButton';
import { SortButton } from './SortButton';

export const QAList = () => {
  const {
    state: { isQALoading },
  } = useQAOverviewContext();

  return (
    <div className="mb-5 col-lg-10">
      <div className="d-flex align-items-center mb-6">
        <div data-tooltip="Find all the questions here">
          <h2>Questions and Answers</h2>
        </div>
        <SortButton />
        <ResetButton />
      </div>
      <Accordion>
        <QAGridBody />
      </Accordion>
      {isQALoading && <Spinner />}
    </div>
  );
};
