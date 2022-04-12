import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import { Quotes } from '../../types/quote';
import { formatNumberToNlCurrency } from '../../helpers/helperFunctions';

type Props = {
  row: Quotes;
  index: number;
};

export const QuotesGridBodyCollapse: React.FC<Props> = ({ row, index }) => {
  return (
    <tr className="details text-wrap">
      <td colSpan={6} className="p-0">
        <Accordion.Collapse eventKey={`accordionKey-${index}`}>
          <div className="px-3 py-3">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <h3 className="h4 mb-4">Quote Details</h3>
                <dl className="row no-gutters text-dark mb-10">
                  <dt className="col-12">Adviser Name</dt>
                  <dd className="col-12">{row.adviserName}</dd>
                  <dt className="col-12">Reference code</dt>
                  <dd className="col-12">{row.reference}</dd>
                  <dt className="col-12">Investment</dt>
                  <dd className="col-12">{formatNumberToNlCurrency(row.investment)}</dd>
                </dl>
              </div>
              <div className="col-lg-6">
                <h3 className="h4 mb-4">Product Details</h3>
                <dl className="row no-gutters text-dark mb-10">
                  {row.items.map((item, index) => (
                    <Fragment key={index}>
                      <dt className="col-12">
                        {item.product.title}-{item.amount}
                      </dt>
                      <dd className="col-12">{item.retailPrice}</dd>
                    </Fragment>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Accordion.Collapse>
      </td>
    </tr>
  );
};
