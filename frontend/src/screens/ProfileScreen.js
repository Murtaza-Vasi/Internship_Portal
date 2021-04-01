import React, { useState } from 'react';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EmailIcon from '@material-ui/icons/Email';
import {
  Container,
  Avatar,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Box,
  Button,
} from '@material-ui/core';

import useStyles from '../styles/Profile';

const SideBar = ({ name, title, description, photo }) => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Container>
        <Grid container direction='column' alignItems='center' spacing={2}>
          <Grid item>
            <Avatar alt='Remy Sharp' src={photo} className={classes.icon} />
            <Typography className={classes.name} variant='h6'>
              {name}
            </Typography>
            <Typography className={classes.jobTitle} variant='subtitle2'>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>{description}</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>

        <Grid container direction='column' spacing={3}>
          <Grid item>
            <Typography className={classes.skillTitle} variant='h6'>
              Skills
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1} direction='row'>
              <Grid item lg={6} xs={4}>
                <Typography className={classes.skill}>JavaScript</Typography>
              </Grid>
              <Grid item lg={6} xs={4}>
                <Typography className={classes.skill}>Frontend</Typography>
              </Grid>
              <Grid item lg={6} xs={4}>
                <Typography className={classes.skill}>Flutter</Typography>
              </Grid>

              <Grid item lg={6} xs={4}>
                <Typography className={classes.skill}>Backend</Typography>
              </Grid>
              <Grid item lg={6} xs={4}>
                <Typography className={classes.skill}>Mobile App</Typography>
              </Grid>
              <Grid item lg={6} xs={4}>
                <Typography className={classes.skill}>Adobe XD</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const BasicInfo = ({ age, phoneNo, experiance, ctc, location, email }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item lg={12} xs={12}>
            <Typography className={classes.titleCard} variant='h6'>
              Basic Information
            </Typography>
          </Grid>
          <Grid item lg={4} xs={12} sm={6} md={6}>
            <Typography className={classes.infoTitle} variant='subtitle1'>
              AGE
            </Typography>
            <Typography variant='subtitle2'>{age} years</Typography>
          </Grid>
          <Grid item lg={4} xs={12} sm={6} md={6}>
            <Typography className={classes.infoTitle} variant='subtitle1'>
              YEARS OF EXPERIENCE
            </Typography>
            <Typography variant='subtitle2'>{experiance} years</Typography>
          </Grid>
          <Grid item lg={4} xs={12} sm={6} md={6}>
            <Typography className={classes.infoTitle} variant='subtitle1'>
              PHONE
            </Typography>
            <Typography variant='subtitle2'>{phoneNo}</Typography>
          </Grid>
          <Grid item lg={4} xs={12} sm={6} md={6}>
            <Typography className={classes.infoTitle} variant='subtitle1'>
              CTC
            </Typography>
            <Typography variant='subtitle2'>{ctc} Lakh</Typography>
          </Grid>
          <Grid item lg={4} xs={12} sm={6} md={6}>
            <Typography className={classes.infoTitle} variant='subtitle1'>
              LOCATION
            </Typography>
            <Typography variant='subtitle2'>{location}</Typography>
          </Grid>
          <Grid item lg={4} xs={12} sm={6} md={6}>
            <Typography className={classes.infoTitle} variant='subtitle1'>
              EMAIL
            </Typography>
            <Typography variant='subtitle2'>{email}</Typography>
          </Grid>
          <Grid item lg={4} xs={12} sm={6} md={6}>
            <Button
              className={classes.fButton}
              variant='contained'
              color='secondary'
              startIcon={<CloudDownloadIcon />}
            >
              Download Resume
            </Button>
          </Grid>
          <Grid item lg={4}>
            <Button
              variant='outlined'
              color='secondary'
              startIcon={<EmailIcon />}
            >
              Sent Email
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

const EduInfo = ({ univeristyName, description }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} md={12}>
            <Typography className={classes.titleCard} variant='h6'>
              Education
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='subtitle1'>{univeristyName}</Typography>
            <Typography variant='subtitle2'>{description}</Typography>
            {/* <Typography variant="caption">
              Studied project planning, coordination, and ethics
            </Typography>
            <br></br>
            <Typography variant="caption">
              Worked with various startups on launching new apps and services
            </Typography> */}
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='subtitle1'>Cliffmoor College</Typography>
            <Typography variant='subtitle2'>
              BA Product Design | Dec 2008 - Dec 2012
            </Typography>
            <Typography variant='caption'>GPA: 3.26</Typography>
            <br></br>
            <Typography variant='caption'>Minor in Management</Typography>
            <br></br>
            <Typography variant='caption'>
              Thesis involved studying several technology companies and
              optimizing their product design process
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

const ProjectInfo = ({ projectName, description }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} md={12}>
            <Typography className={classes.titleCard} variant='h6'>
              Projects
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='subtitle2'>{projectName}</Typography>
            <Typography variant='caption'>{description}</Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='subtitle2'>Smart Parking System</Typography>
            <Typography variant='caption'>
              An Iot based project for smart parking of vehicles by online
              booking of slots and paying rupees with the help of rfid card.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

const CertyInfo = ({ certiName, description }) => {
  const classes = useStyles();

  return (
    <Paper>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} md={12}>
            <Typography className={classes.titleCard} variant='h6'>
              Certification
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='subtitle2'>{certiName}</Typography>
            <Typography variant='caption'>{description}</Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='subtitle2'>
              Image Classification using Ml with Tensorflow
            </Typography>
            <Typography variant='caption'>
              An event organised by Computer Society of India on Machine
              Learning
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

const ProfileScreen = ({ history }) => {
  const storedUser = JSON.parse(localStorage.getItem('userInfo'));

  if (!storedUser) {
    history.push('/');
    alert('Session timeout please login again');
  }

  const [user, setUser] = useState(storedUser);
  const [profile, setProfile] = useState(storedUser.profile);

  const checkInfoStatus = () => {
    // check profile items are defined or not if defined then return true else false
  }

  if (checkInfoStatus()) {
    history.push('/create-profile');
    // redirect user to create profile
  } else {
    // render the user profile page
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container justify='space-evenly' spacing={6}>
          <Grid item lg={4} md={4}>
            <Paper>
              <SideBar
                name={profile.name}
                title={profile.title}
                description={profile.description}
                photo={profile.photo}
              />
            </Paper>
          </Grid>
          <Grid item lg={8} md={7}>
            <Grid direction='column' container spacing={8}>
              <Grid item>
                <BasicInfo
                  age={profile.basicInfo.age}
                  phoneNo={profile.basicInfo.phoneno}
                  experiance={profile.basicInfo.experiance}
                  ctc={profile.basicInfo.ctc}
                  location={profile.basicInfo.location}
                  email={profile.basicInfo.email}
                />
              </Grid>
              <Grid item>
                <EduInfo
                  univeristyName={profile.education.univeristy}
                  description={profile.education.edescription}
                />
              </Grid>
              <Grid item>
                <ProjectInfo
                  projectName={profile.projects.projectname}
                  description={profile.projects.pdescription}
                />
              </Grid>
              <Grid item>
                <CertyInfo
                  certiName={profile.certification.certiname}
                  description={profile.certification.cdescription}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileScreen;
