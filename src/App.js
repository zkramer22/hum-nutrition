import React from 'react';
import './scss/App.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';
import MoreHum from './components/MoreHum';
import ShopNow from './components/ShopNow';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Hero />
      </header>
      <MoreHum />
      <ShopNow />
      <TermsAndConditions />
    </div>
  )
}

export default App;
