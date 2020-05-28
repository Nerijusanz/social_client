import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}