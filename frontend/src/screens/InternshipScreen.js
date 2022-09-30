import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Checkbox,
  Slider,
} from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from '../styles/User/Internship';
import InternshipCard from '../components/InternshipCard';

const SideBar = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant='h6'> Category</Typography>
          <Typography variant='subtitle2'>
            <Checkbox
              backgroundColor='#00B074'
              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
            />
            Frontend
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Backend
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            FullStack
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Mobile Development
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            UI/UX Designer
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Project Management
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h6'>Salary</Typography>
          <Slider
            max='1200'
            valueLabelDisplay='auto'
            aria-labelledby='range-slider'
          />
        </Grid>
        <Grid item>
          <Typography variant='h6'> Type</Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Full Time
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Part Time
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Remote
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h6'>Experiance level</Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Junior
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Intermediate
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Experiance
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const InternshipScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify='space-around'>
        <Grid item lg={2}>
          <SideBar />
        </Grid>
        <Grid item lg={9}>
          <Grid container direction='column' justify='space-around' spacing={1}>
            <Grid item lg={12}>
              <Paper className={classes.search} variant={4}>
                <Container>
                  <Grid container>
                    <Grid lg={4} item spacing={4} alignItems='flex-start'>
                      <SearchIcon className={classes.icon} opacity='50%' />
                      <TextField id='Search-Job' label='Search for job' />
                    </Grid>
                    <hr color='grey'></hr>
                    <Grid item lg={4} alignItems='flex-start'>
                      <LocationOnIcon className={classes.icon} opacity='50%' />
                      <TextField id='location' label='location' />
                    </Grid>
                    <Grid item lg={2} alignItems='flex-start'>
                      <Button
                        color='secondary'
                        fullWidth
                        type='submit'
                        variant='contained'
                        className={classes.submit}
                      >
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>
            <Grid item lg={12}>
              <InternshipCard />
            </Grid>
            <Grid item lg={12}>
              <InternshipCard />
            </Grid>
            <Grid item lg={12}>
              <InternshipCard />
            </Grid>
            <Grid item lg={12}>
              <InternshipCard />
            </Grid>
            <Grid item lg={12}>
              <InternshipCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InternshipScreen;
