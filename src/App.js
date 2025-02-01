// App.js corrigido
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import PracticeAreas from './components/PracticeAreas';
import UsefulLinks from './components/UsefulLinks';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <About />
        <PracticeAreas />
        <Contact />
        <UsefulLinks />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;