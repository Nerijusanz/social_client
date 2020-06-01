import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';

import {Grid,Typography,TextField,Button,CircularProgress} from '@material-ui/core';
import {Link} from 'react-router-dom';

import UserIcon from '../../../images/user.png'

class Login extends Component {

  state={
    data:{
      email:'',
      password:''
    },
    loading:false,
    errors:{}
  }

  onSubmitHandler = async (e) => {
    e.preventDefault();

    //if(!this.dataValidation(this.state.data)) return;

    //console.log(this.state.data);
    //this.props.login(this.state.data);

    const API = 'https://europe-west1-socialapi-c2ee5.cloudfunctions.net/api';

    try{
      this.setState({loading:true});
      const res = await axios.post(API+'/auth/login',this.state.data);

      if(!res.data) return;
      
      console.log(res.data);

      localStorage.setItem('SC_token',res.data.token);

      //this.setState({screams: screams.data});

      //console.log(this.state.screams);

      this.setState({loading:false});

      //this.props.history.push('/');
      
    }catch(err){
      this.setState({
        errors:err.response.data.errors,
        loading:false
      });
      console.log(err.response.data);
    }

  }

  onChangeHandler = (e) => {

    this.setState({
        data:{
            ...this.state.data,
            [e.target.name]:e.target.value
        }
    });

};

  render() {
    const {classes} = this.props;

    const {loading,errors} = this.state;
    const {email,password} = this.state.data;


    return (
      <div>
        <Grid className={classes.container}>
          <img src={UserIcon} className={classes.userIcon} alt="user icon" />
          <Typography variant="h2">Login</Typography>
          
        </Grid>
          
        <Grid container >
          <Grid item sm />
          <Grid item sm>

            {loading && <CircularProgress />}

            {
              errors.credentials && (
              <Typography 
                variant="body2"
                className={classes.errors}
                >
                {errors.credentials}
              </Typography>)
            }

            

            <form noValidate autoComplete="off" onSubmit={this.onSubmitHandler}>
              <TextField 
                id="email" 
                type="email" 
                name="email" 
                label="email"
                error={errors.email ? true :false}
                helperText={errors.email}
                onChange={this.onChangeHandler}
                className={classes.textField} value={email}
                fullWidth
              />

              <TextField 
                id="password" 
                type="password" 
                name="password" 
                label="Password"
                error={errors.password ? true :false}
                helperText={errors.password}
                onChange={this.onChangeHandler}
                className={classes.textField} value={password}
                fullWidth
              />

              <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                className={classes.submitButton}
                disabled={loading}
                >Login</Button>
            </form>

            <div>
              <p><Link to="/forgot_password">forgot password</Link></p>
              <p><Link to="/signup">signup</Link></p>
            </div>


          </Grid>
          <Grid item sm/>
        </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  
  container:{
    textAlign:'center',
    
  },
  userIcon:{
    width:'64px',
    height:'64px'
  },
  textField:{
    margin:'10px auto'
  },
  submitButton:{
    display:'flex',
    justifyContent:'center',
    margin:'20px auto'
  },
  errors:{
    color:'red',
    fontSize: '0.8rem'
  }

};

export default withStyles(styles)(Login);