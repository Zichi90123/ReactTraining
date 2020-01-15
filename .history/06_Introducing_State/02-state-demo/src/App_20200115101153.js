import React, {Component} from 'react';
import './App.css';
import Game from './Game'
import Demo from './Demo';
import Rando from './Rando';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Rando maxNum={7} />
      </div>
    )
  }
}



