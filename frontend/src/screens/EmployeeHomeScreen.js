import React, { useState } from 'react';
import { Close as CloseIcon } from '@material-ui/icons';
import Axios from 'axios';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FilledInput,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';

import useStyles from '../styles/Employee/Employee';
import EmployeeHeader from '../components/EmployeeHeader';

const skillList = ['JavaScript', 'NodeJs', 'React Js'];

const EmployeeHomeScreen = ({ history }) => {
  const classes = useStyles();

  const storedEmployeeId = localStorage.getItem('employeeId');

  const [open, setOpen] = React.useState(false);
  const [postJob, setPostJob] = useState({});
  const [skills, setSkills] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const post = async (e) => {
    e.preventDefault();
    try {
      const getData = {
        ...postJob,
        skills,
      };

      console.log(getData);

      const job = await Axios.post('http://localhost:5000/jobs', getData);
      const employee = await Axios.patch(
        `http://localhost:5000/employee/profile/${storedEmployeeId}`,
        {
          jobsPosted: [job.data._id],
        }
      );
      console.log(employee);
      console.log(getData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <EmployeeHeader />
      <Container>
        <Grid className={classes.button} container justify='center' spacing={2}>
          <Grid item lg={4}>
            <Button
              className={classes.submit}
              color='secondary'
              fullWidth
              type='submit'
              variant='contained'
              onClick={handleClickOpen}
            >
              Post an Iternship
            </Button>
            <form type='submit'>
              <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    Post Job
                    <IconButton onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </DialogTitle>
                <DialogContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FilledInput
                        value={postJob.jobTitle}
                        onChange={(e) =>
                          setPostJob({ ...postJob, jobTitle: e.target.value })
                        }
                        autoComplete='off'
                        placeholder='Job title *'
                        disableUnderline
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Select
                        onChange={(e) =>
                          setPostJob({ ...postJob, jobType: e.target.value })
                        }
                        name='type'
                        variant='filled'
                        disableUnderline
                        fullWidth
                      >
                        <MenuItem value='Full time'>Full time</MenuItem>
                        <MenuItem value='Part time'>Part time</MenuItem>
                        <MenuItem value='Contract'>Contract</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={6}>
                      <FilledInput
                        value={postJob.companyName}
                        onChange={(e) =>
                          setPostJob({
                            ...postJob,
                            companyName: e.target.value,
                          })
                        }
                        autoComplete='off'
                        placeholder='Company name *'
                        disableUnderline
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FilledInput
                        value={postJob.companyUrl}
                        onChange={(e) =>
                          setPostJob({ ...postJob, companyUrl: e.target.value })
                        }
                        autoComplete='off'
                        placeholder='Company Url *'
                        disableUnderline
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Select
                        onChange={(e) =>
                          setPostJob({ ...postJob, workType: e.target.value })
                        }
                        disableUnderline
                        variant='filled'
                        fullWidth
                      >
                        <MenuItem value='Remote'>Remote</MenuItem>
                        <MenuItem value='In-house'>In-Office</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={6}>
                      <FilledInput
                        value={postJob.payScale}
                        onChange={(e) =>
                          setPostJob({ ...postJob, payScale: e.target.value })
                        }
                        autoComplete='off'
                        placeholder='Pay Scale *'
                        disableUnderline
                        fullWidth
                        color='primary'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FilledInput
                        value={postJob.jobDescription}
                        onChange={(e) =>
                          setPostJob({
                            ...postJob,
                            jobDescription: e.target.value,
                          })
                        }
                        autoComplete='off'
                        placeholder='Job description *'
                        disableUnderline
                        fullWidth
                        multiline
                        rows={4}
                      />
                    </Grid>
                  </Grid>

                  <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display='flex'>
                      {skillList.map((skill) => (
                        <Box
                          onClick={() => setSkills([...skills, skill])}
                          className={classes.skill}
                          key={skill}
                        >
                          {skill}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Box
                    color='red'
                    width='100%'
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Typography variant='caption'>*Required fields</Typography>
                    <Button
                      onClick={post}
                      variant='contained'
                      disableElevation
                      color='secondary'
                      className={classes.submit}
                      type='submit'
                      // disabled={loading}
                    >
                      Post Job
                      {/* {loading ? (
                          <CircularProgress color="secondary" size={22} />
                        ) : (
                          "Post job"
                        )} */}
                    </Button>
                  </Box>
                </DialogActions>
              </Dialog>
            </form>
          </Grid>
          <Grid item lg={4}>
            <Button
              className={classes.submit}
              color='secondary'
              fullWidth
              type='submit'
              variant='contained'
              onClick={() => {
                history.push('/posted-internship');
              }}
            >
              Posted Iternship
            </Button>
          </Grid>
        </Grid>
      </Container>
      <hr></hr>
      <Container>
        <Grid container justify='center' spacing={3}>
          <Grid item lg={12}>
            <Typography className={classes.stepheading} variant='h5'>
              Steps For Posting an Internship : <br></br>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography className={classes.steps} variant='h6'>
              Step - 1 :- First of all, Press the Icon of First Left Corner of
              the page and Create a Profile.
            </Typography>
            <Typography className={classes.steps} variant='h6'>
              Step - 2 :- Click on the Post an Internship Button.
            </Typography>
            <Typography className={classes.steps} variant='h6'>
              Step - 3 :- After that Post an Internship form will appear.
            </Typography>
            <Typography className={classes.steps} variant='h6'>
              Step - 4 :- Fill in the necessary details that are required for
              posting the internship.
            </Typography>
            <Typography className={classes.steps} variant='h6'>
              Step - 5 :- After filling the necessary details click on the post
              button.
            </Typography>
            <Typography className={classes.steps} variant='h6'>
              Step - 6 :- To check if internship has been posted or not go
              through the posted internships page and verify it.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EmployeeHomeScreen;
