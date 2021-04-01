import React, { useContext, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import useStyles from '../../../styles/CreateProfile';
import FormContainer from '../../FromContainer';

const Skills = ({ history, onChangeSkillHandler }) => {
  const storedUser = JSON.parse(localStorage.getItem('userInfo'));

  if (!storedUser) {
    history.push('/');
    alert('Session timeout please login again');
  }

  const [user, setUser] = useState(storedUser);
  const [skills, setSkills] = useState(
    user.profile.skills ? user.profile.skills : []
  );

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
          <Button
            onClick={(e) => {
              console.log(e.target);
              let user = {
                profile: {
                  skills: skill,
                },
              };
              onChangeSkillHandler(user);
            }}
          >
            {skill}
          </Button>
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
