// src/App.tsx
import React from 'react';
import Header from './components/Header';
import MySkills from './components/MySkills';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Services from './components/Services';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Portfolio />
        <MySkills />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default App;
