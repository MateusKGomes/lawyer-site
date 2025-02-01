import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import PracticeAreas from './components/PracticeAreas';
import UsefulLinks from './components/UsefulLinks';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="container">
        <Header/>
        <About />
        <PracticeAreas />
        <Contact />
        <UsefulLinks />
        <WhatsAppButton />
      </main>
    </div>
  );
}

export default App;