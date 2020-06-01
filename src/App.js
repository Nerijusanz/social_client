import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Auth/Signup/Signup';
import Login from './components/pages/Auth/Login/Login';
import Screams from './components/pages/Dashboard/Screams/Screams';

import './App.css';
import theme from './components/styles/theme.js';
const MuiTheme = createMuiTheme(theme)


export default class App extends Component {
  render() {
    return (

      <MuiThemeProvider theme={MuiTheme}>
        <div className="App">       
          <Router>
            <Navbar/>
            <div className="container">
            
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/screams" exact component={Screams} />
            </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}