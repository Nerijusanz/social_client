import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';

import {Typography,TextField,Button,CircularProgress} from '@material-ui/core';
import {Link} from 'react-router-dom';

import styles from './styles';
import UserIcon from '../../../images/user.png'

class SignupForm extends Component {

  state={
    data:{
      email:'',
      handle:'',
      password:'',
      confirmPassword:''
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
    const URL = API + '/auth/signup';

    try{
      this.setState({loading:true});
      const res = await axios.post(URL,this.state.data);

      if(!res.data) return;
      
      console.log(res.data);


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
    const {email,handle,password,confirmPassword} = this.state.data;


    return (
      <div className={classes.container}>
        
          <img src={UserIcon} className={classes.userIcon} alt="user icon" />

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
              id="handle" 
              type="text" 
              name="handle" 
              label="handle"
              error={errors.handle ? true :false}
              helperText={errors.handle}
              onChange={this.onChangeHandler}
              className={classes.textField} value={handle}
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

            <TextField 
              id="confirmPassword" 
              type="password" 
              name="confirmPassword" 
              label="Confirm password"
              error={errors.confirmPassword ? true :false}
              helperText={errors.confirmPassword}
              onChange={this.onChangeHandler}
              className={classes.textField} value={confirmPassword}
              fullWidth
            />

            <Button 
              type="submit"
              variant="contained" 
              color="primary" 
              className={classes.submitButton}
              disabled={loading}
              >Signup</Button>
          </form>

            <div>
              <p>Already have account, please <Link to="/login">login</Link></p>
            </div>

      </div>
    )
  }
}

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(SignupForm);
