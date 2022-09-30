import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import React, { useState } from 'react';
import Auth from '../images/auth.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import useStyles from '../styles/Signup';
import axios from 'axios';

const SignupScreen = ({ student, history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async () => {
    try {
      setLoading(true);
      const registerData = {
        username,
        email,
        password,
      };

      if (student) {
        const data = await axios.post(
          'http://localhost:5000/user/',
          registerData
        );

        if (data.data) {
          setLoading(false);
        }

        history.push('/studentlogin');
      } else {
        const data = await axios.post(
          'http://localhost:5000/employee/',
          registerData
        );

        if (data.data) {
          setLoading(false);
        }
        history.push('/employeelogin');
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
            <img className={classes.image} src={Auth} alt='Signup' />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <form className={classes.form}>
              <Typography className={classes.title}>
                {student ? 'STUDENT' : 'EMPLOYEE'} REGISTER
              </Typography>
              <TextField
                className={classes.text}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='email'
                label='Email Address'
                type='email'
                id='email'
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

              <br></br>
              <Button
                color='secondary'
                type='submit'
                variant='contained'
                className={classes.submit}
                onClick={register}
              >
                Register
              </Button>
              {loading && <CircularProgress color='primary' />}
              <Typography className={classes.label}>
                Already a member?{' '}
                <Button
                  onClick={() => {
                    history.push(student ? '/studentlogin' : '/employeelogin');
                  }}
                  style={{
                    textDecorationLine: 'none',
                    color: '#00B074 ',
                  }}
                >
                  Log In
                </Button>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignupScreen;
