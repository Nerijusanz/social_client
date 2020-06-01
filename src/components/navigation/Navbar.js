import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



const Navbar = ({ isAuthenticated }) => (
  
  isAuthenticated ? (
      <AppBar>
        <Toolbar style={cssNavContainer}>
        
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/screams">Screams</Button>
                  
        </Toolbar>
      </AppBar>
    ):(

    <AppBar>
      <Toolbar style={cssNavContainer}>
      
        <Button color="inherit" component={Link} to="/">Home</Button>  
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/signup">Signup</Button>
        
      </Toolbar>
    </AppBar>
  )

);
  


const cssNavContainer = {
  margin: '0 auto',
  maxWidth: '1200px'
};


Navbar.propTypes={
  isAuthenticated: propTypes.bool.isRequired,
}

export default (Navbar);

