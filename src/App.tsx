import React from 'react';
import { ContainerFooter, ContainerHeader, QAOverview } from './components';

const App: React.FC = () => {
  return (
    <div className="application-container">
      <header>
        <ContainerHeader />
      </header>
      <main className="container">
        <QAOverview />
      </main>
      <footer>
        <ContainerFooter />
      </footer>
    </div>
  );
};

export default App;
