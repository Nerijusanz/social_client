import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


export default class home extends Component {


  render() {

    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          Home Page
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    )
  }
}
