import React from 'react';

export const ContainerHeader = () => {
  return (
    <div className="head-wrapper">
      <div className="branding">
        <a href="/">
          <img src="/assets/qa_logo.png" alt="Brand logo" className="brand-image" />
        </a>
        QA Tool
      </div>
    </div>
  );
};
