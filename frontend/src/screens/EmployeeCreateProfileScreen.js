import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  CircularProgress,
  Container,
  Fab,
  Grid,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core';

import useStyles from '../styles/Employee/EmployeeForm';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const EmployeeCreateProfileScreen = () => {
  const storedEmployeeId = JSON.parse(localStorage.getItem('employeeId'));

  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyURL, setCompanyURL] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);

    const employeeDetails = await axios.get(
      `http://localhost:5000/employee/profile/${storedEmployeeId}`
    );

    const CompanyProfile = employeeDetails.data.employee.companyInfo;
    console.log(CompanyProfile);

    if (CompanyProfile !== undefined) {
      if (CompanyProfile.companyName !== undefined) {
        setCompanyName(CompanyProfile.companyName);
      }
      if (CompanyProfile.companyLocation !== undefined) {
        setCompanyLocation(CompanyProfile.companyLocation);
      }
      if (CompanyProfile.companyDescription !== undefined) {
        setCompanyURL(CompanyProfile.companyURL);
      }
      if (CompanyProfile.companyURL !== undefined) {
        setCompanyDescription(CompanyProfile.companyDescription);
      }
    }

    setLoading(false);
  }, []);

  const OnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const companyInfo = {
        companyInfo: {
          companyName,
          companyURL,
          companyDescription,
          companyLocation,
        },
      };

      await axios.patch(
        `http://localhost:5000/employee/profile/${storedEmployeeId}`,
        companyInfo
      );

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Error updating the data');
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <form
          onSubmit={OnSubmit}
          className={classes.employeeForm}
          encType='multipart-form'
        >
          <Grid container spacing={3} justify='center'>
            <Paper>
              <Grid item lg={10}>
                <Grid
                  className={classes.imageform}
                  container
                  spacing={3}
                  justify='center'
                >
                  <input
                    accept='image/*'
                    className={classes.input}
                    id='contained-button-file'
                    multiple
                    type='file'
                  />
                  <label htmlFor='contained-button-file'>
                    <Fab component='span' className={classes.profilePic}>
                      <AddPhotoAlternateIcon />
                    </Fab>
                  </label>
                </Grid>
              </Grid>

              <Grid item lg={12}>
                <Grid container spacing={3} justify='center'>
                  <Grid item xs={12} lg={7}>
                    <Typography className={classes.info}>
                      <InputBase
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        fullWidth
                        placeholder='Company Name*'
                      />{' '}
                      {loading && <CircularProgress />}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Typography className={classes.info}>
                      <InputBase
                        value={companyLocation}
                        onChange={(e) => setCompanyLocation(e.target.value)}
                        fullWidth
                        placeholder='Company Location*'
                      />
                      {loading && <CircularProgress />}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Typography className={classes.info}>
                      <InputBase
                        value={companyURL}
                        onChange={(e) => setCompanyURL(e.target.value)}
                        fullWidth
                        placeholder='Company URL*'
                      />
                      {loading && <CircularProgress />}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Typography className={classes.info}>
                      <InputBase
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                        placeholder='Description*'
                      />
                      {loading && <CircularProgress />}
                    </Typography>
                  </Grid>
                  <Grid item lg={7}>
                    <Button
                      fullWidth
                      className={classes.button}
                      color='secondary'
                      type='submit'
                      variant='contained'
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default EmployeeCreateProfileScreen;
