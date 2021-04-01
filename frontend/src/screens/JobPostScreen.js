import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../styles/Header";

const PostJobForm = () => {
  const classes = useStyles();
  const [job, setJob] = React.useState("");

  const handleChange = (event) => {
    setJob(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Typography>Post Job</Typography>
          </Grid>
          <Grid item lg={12}>
            <form>
              <Grid container spacing={3} justify="space-between">
                <Grid item lg={6}>
                  <TextField label="Job title" />
                </Grid>
                <Grid item lg={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Full Time</InputLabel>
                    <Select value={job} onChange={handleChange}>
                      <MenuItem>Full Time</MenuItem>
                      <MenuItem>Part Time</MenuItem>
                      <MenuItem>Internship</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={6}>
                  <TextField label="Company name" />
                </Grid>
                <Grid item lg={6}>
                  <TextField label="Company URL" />
                </Grid>
                <Grid item lg={6}>
                  <TextField label="Remote" />
                </Grid>
                <Grid item lg={6}>
                  <TextField label="Pay Scale" />
                </Grid>
                <Grid item lg={12}>
                  <TextField fullWidth multiline rows={4} label="Description" />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PostJobForm;
