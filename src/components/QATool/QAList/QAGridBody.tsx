import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import { useQAOverviewContext, useSortContext } from '../../../context';
import { QAGridBodyCollapse } from './QAGridBodyCollapse';
import { QAGridRow } from './QAGridRow';

export const QAGridBody = () => {
  const {
    state: { questionAnswerList },
  } = useQAOverviewContext();
  const {
    methods: { getSortedItems },
  } = useSortContext();

  const sortedQaList = questionAnswerList && getSortedItems(questionAnswerList);

  if (questionAnswerList === undefined) return <div>List is empty</div>;

  return (
    <tbody>
      {sortedQaList &&
        sortedQaList.map((row, index) => (
          <Fragment key={index}>
            <Accordion.Item className="accordion" as="tr" eventKey={`accordionKey-${index}`} key={index}>
              <QAGridRow data={row} key={index} id={index} />
            </Accordion.Item>
            <QAGridBodyCollapse row={row} index={index} />
          </Fragment>
        ))}
    </tbody>
  );
};
