import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Context'
import '../src/App.scss'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
      </header>
    </div>
  );
}

