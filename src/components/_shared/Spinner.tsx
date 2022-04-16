import React from 'react';
import { Spinner as BSSpinner } from 'react-bootstrap';

export const Spinner: React.FC = () => {
  return (
    <BSSpinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </BSSpinner>
  );
};
