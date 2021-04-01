import React, { useContext, useState } from 'react';
import { Grid, InputBase, Paper, Typography } from '@material-ui/core';

import useStyles from '../../../styles/CreateProfile';

const FormInfo = ({ history, onChangeHandler }) => {
  const storedUser = JSON.parse(localStorage.getItem('userInfo'));

  if (!storedUser) {
    history.push('/');
    alert('Session timeout please login again');
  }

  const [user, setUser] = useState(storedUser);
  const [name, setName] = useState(user.profile.name ? user.profile.name : '');
  const [title, setTitle] = useState(
    user.profile.title ? user.profile.title : ''
  );
  const [desc, setDesc] = useState(
    user.profile.description ? user.profile.description : ''
  );

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={6} justify='center'>
        <Grid item xs={12} lg={5}>
          <Paper>
            <Typography className={classes.finput}>
              <InputBase
                onChange={(e) => {
                  let user = {
                    profile: {
                      name: e.target.value,
                    },
                  };
                  onChangeHandler(user);
                }}
                fullWidth
                placeholder='Name*'
              />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Paper>
            <Typography className={classes.finput}>
              <InputBase
                // value={title}
                onChange={(e) => {
                  let user = {
                    profile: {
                      title: e.target.value,
                    },
                  };
                  onChangeHandler(user);
                }}
                fullWidth
                placeholder='Title*'
              />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Paper>
            <Typography className={classes.finput}>
              <InputBase
                fullWidth
                multiline
                // value={description}
                onChange={(e) => {
                  let user = {
                    profile: {
                      description: e.target.value,
                    },
                  };
                  onChangeHandler(user);
                }}
                rows={4}
                placeholder='Description*'
              />
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormInfo;
