import React, { useContext, useState } from 'react';
import {
  Grid,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import useStyles from '../../../styles/User/ProfileForm';
import FormContainer from '../../FromContainer';

const BasicInfo = ({
  age,
  setAge,
  experiance,
  setExperiance,
  email,
  setEmail,
  location,
  setLocation,
  ctc,
  setCTC,
  phoneno,
  setPhoneNo,
}) => {
  const classes = useStyles();

  return (
    <FormContainer>
      <Typography variant='h6'>Basic Information</Typography>
      <Grid container spacing={3}>
        <Grid item lg={3} xl={12}>
          <Select
            className={classes.info}
            onChange={(e) => setAge(e.target.value)}
          >
            <MenuItem>Age :</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={21}>21</MenuItem>
            <MenuItem value={22}>22</MenuItem>
            <MenuItem value={23}>23</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={3} xl={12}>
          <InputBase
            fullWidth
            className={classes.info}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder='Phone No. '
            value={phoneno}
          />
        </Grid>
        <Grid item lg={3} xl={12}>
          <Select
            fullWidth
            className={classes.info}
            onChange={(e) => setExperiance(e.target.value)}
          >
            <MenuItem>Years Of Experiance :</MenuItem>
            <MenuItem value={0}>Fresher</MenuItem>
            <MenuItem value={1}>1 Year</MenuItem>
            <MenuItem value={2}>2 Year</MenuItem>
            <MenuItem value={3}>3 Year</MenuItem>
            <MenuItem value={4}>4 Year</MenuItem>
            <MenuItem value={5}>5 Year</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={3} xl={12}>
          <Select
            fullWidth
            className={classes.info}
            onChange={(e) => setCTC(e.target.value)}
          >
            <MenuItem>CTC(In Lakhs) :</MenuItem>
            <MenuItem value={2}>2 lakh</MenuItem>
            <MenuItem value={3}>3 lakh</MenuItem>
            <MenuItem value={4}>4 lakh</MenuItem>
            <MenuItem value={5}>5 lakh</MenuItem>
            <MenuItem value={6}>6 lakh</MenuItem>
            <MenuItem value={7}>7 lakh</MenuItem>
            <MenuItem value={7}>7+ lakh</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={3} xl={12}>
          <InputBase
            className={classes.info}
            placeholder='Location'
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </Grid>
        <Grid item lg={3} xl={12}>
          <InputBase
            className={classes.info}
            placeholder='Email ID'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default BasicInfo;
