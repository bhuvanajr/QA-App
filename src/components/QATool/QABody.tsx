import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import { useQAOverviewContext } from '../../context';
import { QuotesGridBodyCollapse } from './QuotesGridBodyCollapse';
import { QAGridRow } from './QAGridRow';

export const QABody = () => {
  const {
    state: { questionAnswerList },
  } = useQAOverviewContext();
  // const { methods:{getSortedItems} } = useSortContext();
  //const sortedItems = //getSortedItems(results);

  return (
    <tbody>
      {questionAnswerList &&
        questionAnswerList.map((row, index) => (
          <Fragment key={index}>
            <Accordion.Item className="accordion" as="tr" eventKey={`accordionKey-${index}`} key={index}>
              <QAGridRow data={row} key={index} id={index} />
            </Accordion.Item>
            <QuotesGridBodyCollapse row={row} index={index} />
          </Fragment>
        ))}
    </tbody>
  );
};
