import {
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import Auth from '../images/auth.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from '../styles/Login';
import axios from 'axios';

const LoginScreen = ({ student, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const loginData = {
        email,
        password,
      };

      if (student) {
        const createdUser = await axios.post(
          'http://localhost:5000/user/login',
          loginData
        );

        localStorage.setItem('userId', JSON.stringify(createdUser.data._id));
        history.push('/user');
      } else {
        // If employee then make request to the employees login in the backend

        const createdEmployee = await axios.post(
          'http://localhost:5000/employee/login',
          loginData
        );

        localStorage.setItem(
          'employeeId',
          JSON.stringify(createdEmployee.data._id)
        );
        history.push('/employee');
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <img className={classes.image} src={Auth} alt='Login' />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <form className={classes.form}>
              <Typography className={classes.title}>
                {student ? 'STUDENT' : 'EMPLOYEE'} LOGIN
              </Typography>
              <TextField
                className={classes.text}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                className={classes.text}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <br></br>
              <Button
                color='secondary'
                type='submit'
                variant='contained'
                className={classes.submit}
                onClick={login}
              >
                Sign In
              </Button>
              {loading && <CircularProgress color='primary' />}

              <Typography className={classes.label}>
                Don't have an account?
                <Button
                  onClick={() => {
                    history.push(
                      student ? '/studentsignup' : '/employeesignup'
                    );
                  }}
                  style={{
                    textDecorationLine: 'none',
                    color: '#00B074',
                  }}
                >
                  Sign Up
                </Button>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginScreen;
