import React, {Component} from 'react';
import './App.css';
import Game from './Game'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Game color="purple"/>
      </div>
    )
  }
}



