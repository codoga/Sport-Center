import React from 'react';
import { Classes } from './components/ClassesSection'; 
import Trainer from './components/Trainer';
import HomePage from './components/Homepage/HomePage'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Sport Center</h1>
      </header>
      <main>
        <HomePage />
        <Classes />
        <Trainer />
      </main>
    </div>
  );
}

export default App;
