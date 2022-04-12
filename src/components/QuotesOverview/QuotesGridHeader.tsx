import React from 'react';
import { useSortContext } from '../../service/SortService';

export const QuotesGridHeader: React.FC = () => {
  const { sortConfig, requestSort } = useSortContext();

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <thead className="table-light">
      <tr>
        <th scope="col"></th>
        <th scope="col">
          <button type="button" className="table-sort" onClick={() => requestSort('solution')}>
            <div className="d-flex">
              Solution Name
              {getClassNamesFor('solution') && <div className={`icon ${getClassNamesFor('solution')}`} />}
            </div>
          </button>
        </th>
        <th scope="col">
          <button type="button" className="table-sort" onClick={() => requestSort('created')}>
            <div className="d-flex">
              Date created
              {getClassNamesFor('created') && <div className={`icon ${getClassNamesFor('created')}`} />}
            </div>
          </button>
        </th>
        <th scope="col">
          <button type="button" className="table-sort" onClick={() => requestSort('expirationDate')}>
            <div className="d-flex">
              Expiration date
              {getClassNamesFor('expirationDate') && <div className={`icon ${getClassNamesFor('expirationDate')}`} />}
            </div>
          </button>
        </th>
        <th scope="col">Total price</th>
        <th scope="col"></th>
      </tr>
    </thead>
  );
};
