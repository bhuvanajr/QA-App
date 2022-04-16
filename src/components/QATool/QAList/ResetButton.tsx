import React from 'react';
import { useQAOverviewContext } from '../../../context';

export const ResetButton: React.FC = () => {
  const {
    methods: { resetQA },
  } = useQAOverviewContext();

  return (
    <button type="button" className="btn-icon" onClick={() => resetQA()}>
      <div className="icon icon-delete" />
    </button>
  );
};
