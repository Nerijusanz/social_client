import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Loader from 'react-loader';
//import propTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Auth/Signup/Signup';
import Login from './components/pages/Auth/Login/Login';

// --------------Auth Routes-------------------------------------
import GuestRoute from './components/routes/GuestRoute';
import AuthRoute from './components/routes/AuthRoute';
// ---------------------------------------------------------


import Screams from './components/pages/Dashboard/Screams/Screams';

import './App.css';
import theme from './components/styles/theme.js';
const MuiTheme = createMuiTheme(theme);




// -----------------end Pages----------------------------------------


const defaultRoute = () => <Redirect to="/" />






export default class App extends Component {

  state={
    auth:{
      isAuthenticated:false,
      loading:false,
    }
  }

  componentDidMount(){

    this.initApp();

  }

  initApp = () =>{

    this.authentication();

  };

  authentication = async () => {

    this.setState({
      auth:{
          ...this.state.auth,
          loading:true
      }
    });

    const token = localStorage.SC_token;
    let isAuthenticated=false
    if(token){
      const decodedToken =  await jwtDecode(token);
      //console.log(decodedToken);

      if(decodedToken.exp * 1000 > Date.now() )
        isAuthenticated=true;

    }

    this.setState({
      auth:{
          ...this.state.auth,
          isAuthenticated,
          loading:false
      }
    });

  };



  render() {

    const {loading,isAuthenticated} = this.state.auth;
    /*
    //test authentication
    const loading=false;
    const isAuthenticated=false;
    */
      

    return (

      <Loader loaded={!loading}>

        <MuiThemeProvider theme={MuiTheme}>
          <div className="App">       
            
          
            !loading ? 
            <>
              <Navbar isAuthenticated={isAuthenticated}/>
              <div className="container">
            
                <Switch>
                  <Route path="/" exact component={Home} />    
                  
                  <GuestRoute isAuthenticated={isAuthenticated} path="/signup" exact component={Signup} />
                  <GuestRoute isAuthenticated={isAuthenticated} path="/login" exact component={Login} />

                  <AuthRoute isAuthenticated={isAuthenticated} path="/screams" exact component={Screams} />
                  
                  <Route component={defaultRoute} />

                </Switch>
              </div>
            </>             
          
          </div>
        </MuiThemeProvider>

      </Loader>
    )
  }
}

