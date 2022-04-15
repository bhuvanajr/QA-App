import React, { Fragment } from 'react';
import { useQAOverviewContext, useSortContext } from '../../../context';
import { AccordionRow } from '../../_shared';
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

  if (questionAnswerList === undefined) return <div>This list is empty</div>;

  return (
    <tbody>
      {sortedQaList &&
        sortedQaList.map((row, index) => (
          <Fragment key={index}>
            <AccordionRow eventKey={`accordionKey-${index}`}>
              <QAGridRow data={row} key={index} id={index} />
            </AccordionRow>
            <QAGridBodyCollapse row={row} index={index} />
          </Fragment>
        ))}
    </tbody>
  );
};
