import React, {Component} from 'react';
import './App.css';
import Game from './Game'
import Demo from './Demo';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrokenClick />
      </div>
    )
  }
}



