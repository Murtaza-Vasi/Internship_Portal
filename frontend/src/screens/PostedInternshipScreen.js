import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

import useStyles from '../styles/Employee/PostedInternship';
import InternshipCard from '../components/InternshipCard';

const PostedInternshipScreen = () => {
  const [jobs, setJobs] = useState([]);

  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyURL, setCompanyURL] = useState('');

  const [loading, setLoading] = useState(false);

  const storedEmployeeId = JSON.parse(localStorage.getItem('employeeId'));

  useEffect(async () => {
    setLoading(true);

    try {
      const employeeInfo = await Axios.get(
        `http://localhost:5000/employee/profile/${storedEmployeeId}`
      );

      const { employee } = employeeInfo.data;
      console.log(employee);

      setCompanyName(employee.companyInfo.companyName);
      setCompanyLocation(employee.companyInfo.companyLocation);
      setCompanyURL(employee.companyInfo.companyURL);
      setCompanyDescription(employee.companyInfo.companyDescription);

      setJobs(employee.jobsPosted);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        alignItems='center'
        justify='center'
        className={classes.header}
      >
        {loading && <CircularProgress />}
        <Grid item lg={2}>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </Grid>
            <Grid item>
              <Typography variant='h6'>{companyName}</Typography>
              <Typography variant='subtitle1'>{companyLocation}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Button
            className={classes.submit}
            color='secondary'
            fullWidth
            type='text'
            variant='contained'
          >
            Posted Internship
          </Button>
        </Grid>
      </Grid>
      <hr></hr>

      <Container className={classes.jobCard}>
        <Grid container spacing={6} justify='center'>
          {loading && <CircularProgress />}
          {jobs.map((job) => (
            <Grid item lg={10}>
              <InternshipCard job={job.jobInfo} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PostedInternshipScreen;
