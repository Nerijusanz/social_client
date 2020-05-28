import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import createMixins from '@material-ui/core/styles/createMixins';

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

    let screamsList = !this.state.screams ? (<p>no screams</p>):( this.state.screams.map(scream => <p key={scream.screamId}>{scream.body}</p>))


    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {screamsList}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    )
  }
}
