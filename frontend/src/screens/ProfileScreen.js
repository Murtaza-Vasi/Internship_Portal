import React, { useEffect, useState } from 'react';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import axios from 'axios';
import EmailIcon from '@material-ui/icons/Email';
import {
  Container,
  Avatar,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress,
} from '@material-ui/core';

import useStyles from '../styles/User/Profile';

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
  const storedUserId = JSON.parse(localStorage.getItem('userId'));

  if (!storedUserId) {
    history.push('/');
    alert('Session timeout please login again');
  }

  // const [profile, setProfile] = useState({});
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [uni, setUni] = useState('');
  const [eDesc, setEDesc] = useState('');
  const [project, setProject] = useState('');
  const [pDesc, setPDesc] = useState('');
  const [certiName, setCertiName] = useState('');
  const [cDesc, setCDesc] = useState('');
  const [age, setAge] = useState(0);
  const [ctc, setCTC] = useState('');
  const [email, setEmail] = useState('');
  const [experiance, setExperiance] = useState('');
  const [location, setLocation] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [loading, setLoading] = useState(false);

  // Checking if the data is undefined or not and if it is not defined pushing the user to the create profile page

  const setData = (data) => {
    setName(data.name);
    setTitle(data.title);
    setDesc(data.description);

    // Setting the basic info
    if (data.basicInfo === undefined) {
      history.push('/create-profile');
    } else {
      setAge(data.basicInfo.age);
      setCTC(data.basicInfo.ctc);
      setEmail(data.basicInfo.email);
      setLocation(data.basicInfo.location);
      setPhoneNo(data.basicInfo.phoneno);
      setExperiance(data.basicInfo.experiance);
    }

    // setting the university info
    if (data.education === undefined) {
      history.push('/create-profile');
    } else {
      setUni(data.education.univeristy);
      setEDesc(data.education.edescription);
    }

    // setting the project info
    if (data.projects === undefined) {
      history.push('/create-profile');
    } else {
      setProject(data.projects.projectname);
      setPDesc(data.projects.pdescription);
    }

    // setting the certification info
    if (data.certification === undefined) {
      history.push('/create-profile');
    } else {
      setCertiName(data.certification.certiname);
      setCDesc(data.certification.cdescription);
    }
  };

  useEffect(async () => {
    try {
      setLoading(true);
      const userProfile = await axios.get(
        `http://localhost:5000/user/get-profile/${storedUserId}`
      );

      console.log('USER PROFILE :', userProfile.data.profile);
      setData(userProfile.data.profile);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container justify='space-evenly' spacing={6}>
            <Grid item lg={4} md={4}>
              <Paper>
                <SideBar
                  name={name}
                  title={title}
                  description={desc}
                  // photo={photo}
                />
              </Paper>
            </Grid>
            <Grid item lg={8} md={7}>
              <Grid direction='column' container spacing={8}>
                <Grid item>
                  <BasicInfo
                    age={age}
                    phoneNo={phoneno}
                    experiance={experiance}
                    ctc={ctc}
                    location={location}
                    email={email}
                  />
                </Grid>
                <Grid item>
                  <EduInfo univeristyName={uni} description={eDesc} />
                </Grid>
                <Grid item>
                  <ProjectInfo projectName={project} description={pDesc} />
                </Grid>
                <Grid item>
                  <CertyInfo certiName={certiName} description={cDesc} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default ProfileScreen;
