import React from 'react';
import { Accordion } from 'react-bootstrap';
import { QAType } from '../../../types/QAType';

type Props = {
  row: QAType;
  eventKey: string;
};

export const QAGridBodyCollapse: React.FC<Props> = ({ row, eventKey }) => {
  return (
    <tr className="details text-wrap">
      <td colSpan={6} className="p-0">
        <Accordion.Collapse eventKey={eventKey}>
          <div className="px-3 py-3">
            <div className="row no-gutters">
              <div className="col-lg-11">
                <dl className="row no-gutters text-dark">
                  <dd className="col-12 text-break">{row.answer}</dd>
                </dl>
              </div>
            </div>
          </div>
        </Accordion.Collapse>
      </td>
    </tr>
  );
};
