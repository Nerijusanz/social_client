import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import ScreamItem from './ScreamItem';

 

export default class Screams extends Component {

  state={
    screams:null,
    loading:false
  }

  componentDidMount(){
    
    this.getScreams();
  }

  getScreams = async () => {

    const API = 'https://europe-west1-socialapi-c2ee5.cloudfunctions.net/api';

    try{
      this.setState({loading:true});
      const screams = await axios.get(API+'/screams');

      if(! await screams.data) return;
      
      this.setState({screams: screams.data});

      console.log(this.state.screams);

      this.setState({loading:false});
      
    }catch(err){
      this.setState({loading:false});
      console.log(err)
    }


  }


  render() {

    const {loading,screams} = this.state;

    
    let screamsList = !screams ? (<p>no screams added yet. Add scream here</p>):( screams.map(scream => <ScreamItem key={scream.screamId} scream={scream} />))


    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {loading ? (<p>Loading...</p>):null}
          {!loading && screamsList}
        </Grid>
      </Grid>
    )
  }
}
