import React, { Fragment } from 'react';
import { QuotesGridRow } from './QuotesGridRow';
import { Accordion } from 'react-bootstrap';
import { ContextAwareToggle } from './ContextAwareToggle';
import { Quotes } from '../../types/quote';
import { QuotesGridBodyCollapse } from './QuotesGridBodyCollapse';
import { useSortContext } from '../../service/SortService';

type Props = {
  results: Quotes[];
};

export const QuotesGridBody: React.FC<Props> = ({ results }) => {
  const { getSortedItems } = useSortContext();
  const sortedItems = getSortedItems(results);

  return (
    <tbody>
      {sortedItems.map((row, index) => (
        <Fragment key={index}>
          <Accordion.Item className="accordion" as="tr" eventKey={`accordionKey-${index}`} key={index}>
            <QuotesGridRow data={row} key={index} id={index} />
            <ContextAwareToggle eventKey={`accordionKey-${index}`} />
          </Accordion.Item>
          <QuotesGridBodyCollapse row={row} index={index} />
        </Fragment>
      ))}
    </tbody>
  );
};
