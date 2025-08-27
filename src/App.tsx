import React from 'react';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg-primary text-dark-text-primary font-sans min-h-screen">
      <AppRouter />
    </div>
  );
};

export default App;
