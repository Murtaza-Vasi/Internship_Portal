import React, { useState } from 'react';
import { Grid, Typography, InputBase } from '@material-ui/core';

import FromContainer from './FromContainer';
import useStyles from '../styles/CreateProfile';

const NameDescriptionFrom = ({
  name,
  history,
  nameValue,
  nameValueChangeHandler,
  descValue,
  descValueChangeHandler,
}) => {
  const classes = useStyles();

  let updateName;
  let updateDescription;

  const findUpdateName = () => {
    if (name === 'education') {
      updateName = 'university';
      updateDescription = 'edescription';
    } else if (name === 'project') {
      updateName = 'projectname';
      updateDescription = 'pdescription';
    } else if (name === 'certification') {
      updateName = 'certiname';
      updateDescription = 'cdescription';
    }
  };

  findUpdateName();

  return (
    <div>
      <FromContainer>
        <Typography variant='h6'>{name}</Typography>
        <Grid container spacing={2}>
          <Grid item lg={12} xl={12} sm={12} md={12}>
            <Typography className={classes.info} variant='subtitle2'>
              <InputBase
                onChange={(e) => nameValueChangeHandler(e.target.value)}
                fullWidth
                placeholder={`${
                  name === 'Education' ? 'University' : name
                } Name*`}
              />
            </Typography>
          </Grid>
          <Grid item lg={12} xl={12}>
            <Typography className={classes.info} variant='subtitle2'>
              <InputBase
                onChange={(e) => descValueChangeHandler(e.target.value)}
                fullWidth
                multiline
                rows={4}
                placeholder='Description*'
              />
            </Typography>
          </Grid>
        </Grid>
      </FromContainer>
    </div>
  );
};

export default NameDescriptionFrom;
