import React, { Fragment } from 'react';
import { useQAOverviewContext, useSortContext } from 'context';
import { QAType } from 'types/QAType';
import { AccordionRow } from 'components/_shared';
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
  // const sortedQaList = useMemo(() => {
  //   if (questionAnswerList) return getSortedItems(questionAnswerList);
  // }, [getSortedItems, questionAnswerList]);

  if (questionAnswerList === undefined) return <div>This list is empty</div>;

  return (
    <div className="table-responsive rounded">
      <table className="table mb-2">
        <tbody>
          {sortedQaList !== undefined &&
            sortedQaList.map((row: QAType) => (
              <Fragment key={row.qaId}>
                <AccordionRow eventKey={`accordionKey-${row.qaId}`}>
                  <QAGridRow data={row} key={row.qaId} eventKey={`accordionKey-${row.qaId}`} />
                </AccordionRow>
                <QAGridBodyCollapse row={row} eventKey={`accordionKey-${row.qaId}`} />
              </Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};
