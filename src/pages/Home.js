import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

//api url: https://europe-west1-socialapi-c2ee5.cloudfunctions.net/api 

export default class home extends Component {

  state={
    screams:null
  }

  

  componentDidMount(){
    
    this.getScreams();
  }

  getScreams = async () => {

    const API = 'https://europe-west1-socialapi-c2ee5.cloudfunctions.net/api';

    try{
      const screams = await axios.get(API+'/screams');

      this.setState({screams: screams.data});
  
      console.log(this.state.screams);
    }catch(err){console.log(err)}


  }


  render() {
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <p>Content...</p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    )
  }
}
