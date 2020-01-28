import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Context'
import '../src/App.scss'
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Header />
        <Content />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
)

