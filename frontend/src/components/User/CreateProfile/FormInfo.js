import React from 'react';
import { Grid, InputBase, Paper, Typography } from '@material-ui/core';

import useStyles from '../../../styles/User/ProfileForm';

const FormInfo = ({ name, setName, title, setTitle, desc, setDesc }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={6} justify='center'>
        <Grid item xs={12} lg={5}>
          <Paper>
            <Typography className={classes.finput}>
              <InputBase
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
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
