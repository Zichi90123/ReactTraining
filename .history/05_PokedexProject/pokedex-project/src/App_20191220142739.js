import React from 'react';
import './App.css';
import Pokecard from './Pokecard'

function App() {
  return (
    <div className="App">
      <Pokecard 
      id={004}
      name="Charmender"
      type="fire"
      exp={62}
      />
    </div>
  );
}

export default App;
