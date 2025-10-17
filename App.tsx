
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans leading-relaxed">
      <Header />
      <main>
        <Home />
        <Features />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default App;
