import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokecard from './Pokecard'

function App() {
  return (
    <div className="App">
      <Pokecard 
      id={4}
      name="Charmender"
      type="fire"
      exp={62}
      />
    </div>
  );
}

export default App;
