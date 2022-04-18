import React from 'react';
import { Accordion, useAccordionButton } from 'react-bootstrap';

type Props = {
  eventKey: string;
};

export const AccordionRow: React.FC<Props> = props => {
  const handleClick = useAccordionButton(props.eventKey);

  return (
    <Accordion.Item
      className="accordion"
      as="tr"
      eventKey={props.eventKey}
      //onClick={handleClick}
    >
      {props.children}
    </Accordion.Item>
  );
};
