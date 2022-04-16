import React from 'react';
import { useSortContext } from 'context';

export const SortButton: React.FC = () => {
  const {
    methods: { requestSort, getSortIconClassName },
  } = useSortContext();
  const iconClass = getSortIconClassName('question');

  return (
    <button type="button" className="btn-icon" onClick={() => requestSort('question')}>
      {iconClass && <div className={`icon ${iconClass}`} />}
    </button>
  );
};
