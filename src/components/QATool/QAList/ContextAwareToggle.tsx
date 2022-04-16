import classNames from 'classnames';
import React, { useContext } from 'react';
import { AccordionContext, useAccordionButton } from 'react-bootstrap';

type ToggleProps = {
  eventKey: string;
};

export const ContextAwareToggle: React.FC<ToggleProps> = ({ eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const handleClick = useAccordionButton(eventKey);
  const isCurrentEventKey = activeEventKey === eventKey;
  const className = classNames('accordion-button', { collapsed: !isCurrentEventKey });

  return (
    <td className="col-lg-1">
      <button type="button" onClick={handleClick} className={className} data-bs-toggle="collapse"></button>
    </td>
  );
};
