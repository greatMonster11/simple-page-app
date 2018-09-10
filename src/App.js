import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import Stuff from './components/Stuff';
import Contact from "./components/Contact";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;