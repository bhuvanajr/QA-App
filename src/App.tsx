import React from 'react';
import { ContainerFooter, ContainerHeader, QuotesGrid } from './components';

const App: React.FC = () => {
  return (
    <div className="application-container">
      <header>
        <ContainerHeader />
      </header>
      <main>
        <QuotesGrid />
      </main>
      <footer>
        <ContainerFooter />
      </footer>
    </div>
  );
};

export default App;
