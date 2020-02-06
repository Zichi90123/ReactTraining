import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
          <NavLink exact activeClassName="active-link" to="/">About</NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
        </nav>
        <Switch>
          <Route exact path="/dog" component={Dog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
