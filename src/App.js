import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Context'
import Thing from './hooks/index';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
        <Thing />
      </header>
    </div>
  );
}

