import React, {Component} from 'react';
import './App.css';
import Game from './Game'
import Demo from './Demo';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Game color="purple" />
        <Demo animal="Bobcat" food="Pineapple" />
      </div>
    )
  }
}



