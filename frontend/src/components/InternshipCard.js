import React from 'react';
import {
  Paper,
  Container,
  Grid,
  Avatar,
  Typography,
  Button,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ScheduleIcon from '@material-ui/icons/Schedule';
import useStyles from '../styles/User/Internship';

const InternshipCard = () => {
  const classes = useStyles();
  return (
    <Paper elevation={4}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Grid
              container
              direction='column'
              justify='space-around'
              spacing={2}
            >
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/1.jpg'
                    />
                  </Grid>
                  <Grid item>
                    <Typography className={classes.jobTitle} variant='h6'>
                      Senior Product Designer
                    </Typography>
                    <Typography variant='subtitle2'>Behance</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  color='secondary'
                  className={classes.submit}
                  type='submit'
                  variant='contained'
                >
                  Sign In
                </Button>
                <Button
                  color='secondary'
                  className={classes.submit}
                  type='submit'
                  variant='contained'
                >
                  Sign In
                </Button>
                <Button
                  color='secondary'
                  type='submit'
                  variant='contained'
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6}>
            <Grid
              container
              direction='column'
              spacing={8}
              alignItems='flex-end'
            >
              <Grid className={classes.stipned} item>
                10000-12000INR
              </Grid>
              <Grid item direction='row'>
                <Grid container spacing={4}>
                  <Grid direction='row' item>
                    <Grid container>
                      <Grid item>
                        <LocationOnIcon opacity='40%' fontSize='small' />
                      </Grid>
                      <Grid item>
                        <Typography className={classes.text}>Remote</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid direction='row' item>
                    <Grid container>
                      <Grid item>
                        <WorkRoundedIcon opacity='40%' fontSize='small' />
                      </Grid>
                      <Grid item>
                        <Typography className={classes.text}>
                          {' '}
                          Full-time
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid direction='row' item>
                    <Grid container>
                      <Grid item>
                        <ScheduleIcon opacity='40%' fontSize='small' />
                      </Grid>
                      <Grid item>
                        <Typography className={classes.text}>
                          21,Oct,2020
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default InternshipCard;
