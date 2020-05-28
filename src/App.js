import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import './App.css';

import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Auth/Signup/Signup';
import Login from './components/pages/Auth/Login/Login';
import Screams from './components/pages/Dashboard/Screams/Screams';


export default class App extends Component {
  render() {
    return (

      <MuiThemeProvider theme={cssTheme}>
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

const cssTheme = createMuiTheme({
  palette:{
    primary:{
      light: '#33c9dc',
      main:'#00bcd4',
      dark:'#008394',
      contrastText:'#fff'
    },
    secondary:{
      light:'#ff6333',
      main:'#ff3d00',
      dark:'#b22a00',
      contrastText:'#fff'
    }
  },typography:{
    useNextVariants: true
  }

});