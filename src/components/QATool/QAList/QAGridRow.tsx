import React from 'react';
import { useQAOverviewContext } from 'context';
import { QAType } from 'types/QAType';
import { EditQA } from '../QAForm/EditQA';
import { ContextAwareToggle } from './ContextAwareToggle';

type Props = {
  data: QAType;
  eventKey: string;
};

export const QAGridRow: React.FC<Props> = ({ data, eventKey }) => {
  const {
    methods: { deleteQA, editQA },
  } = useQAOverviewContext();

  return (
    <>
      <td className="col-lg-1">
        <EditQA key={data.qaId} editData={data} deleteFn={deleteQA} editFn={editQA} />
      </td>
      <th scope="row" className="text-primary text-break">
        {data.question}
      </th>
      <ContextAwareToggle eventKey={eventKey} />
    </>
  );
};
