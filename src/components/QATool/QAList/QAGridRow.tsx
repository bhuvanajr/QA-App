import React from 'react';
import { Anchor } from 'react-bootstrap';
import { QAType } from '../../../types/QAType';
import { ContextAwareToggle } from './ContextAwareToggle';

type Props = {
  data: QAType;
  id: number;
};

export const QAGridRow: React.FC<Props> = ({ data, id }) => {
  //const { register } = useFormContext();

  return (
    <>
      <td className="col-lg-1">
        <Anchor>
          <span className="icon icon-edit"></span>
        </Anchor>
      </td>
      <th scope="row" className="text-primary text-break">
        {data.question}
      </th>
      <ContextAwareToggle eventKey={`accordionKey-${id}`} />
    </>
  );
};
