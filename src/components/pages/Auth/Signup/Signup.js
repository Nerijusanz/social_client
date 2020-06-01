import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';


import {Grid,Typography} from '@material-ui/core';
//import {Link} from 'react-router-dom';

import styles from './styles';
import SignupForm from './SignupForm';

class Signup extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="h2">Signup</Typography>
        <Grid container>
          <Grid item sm />
          <Grid item sm >
            <SignupForm />
          </Grid>
          <Grid item sm/>
        </Grid>
      </div>
    )
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Signup);
