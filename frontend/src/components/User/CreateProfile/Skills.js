import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import useStyles from '../../../styles/User/ProfileForm';
import FormContainer from '../../FromContainer';

const Skills = ({ skills, setSkills }) => {
  const classes = useStyles();
  const skillsList = [
    'JavaScript',
    'Python',
    'Flutter',
    'Backend',
    'Mobile App Design',
    'Adobe XD',
  ];

  const renderSkillElement = skillsList.map((skill, index) => {
    return (
      <Grid item key={index}>
        <Typography className={classes.skill}>
          <Button onClick={() => setSkills([...skills, skill])}>{skill}</Button>
        </Typography>
      </Grid>
    );
  });

  return (
    <FormContainer>
      <Typography variant='h6'>Skills</Typography>
      <Grid item>
        <Grid container spacing={1} direction='row'>
          {renderSkillElement}
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default Skills;
