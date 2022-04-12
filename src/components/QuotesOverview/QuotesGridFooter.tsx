import React from 'react';

export const QuotesGridFooter: React.FC = () => {
  return (
    <div className="rounded-bottom border-top px-6 py-4">
      <div className="row no-gutters ps-4">
        <button type="submit" className="btn">
          <span className="btn-inner--text">Accept Quotes</span>
        </button>
      </div>
    </div>
  );
};
