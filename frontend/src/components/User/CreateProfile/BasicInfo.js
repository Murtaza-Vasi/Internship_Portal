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
import useStyles from '../../../styles/CreateProfile';
import FormContainer from '../../FromContainer';

const BasicInfo = ({
  history,
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
  // const storedUser = JSON.parse(localStorage.getItem('userInfo'));
  // if (!storedUser) {
  //   history.push('/');
  //   alert('Session timeout please login again');
  // }

  // const [user, setUser] = useState(storedUser);

  // // console.log('BASIC INFO ', user.profile.basicInfo);

  // const [age, setAge] = useState(
  //   user.profile.basicInfo !== undefined ? user.profile.basicInfo.age : null
  // );

  // const [phoneNo, setPhoneNo] = useState(
  //   user.profile.basicInfo !== undefined ? user.profile.basicInfo.phoneNo : null
  // );

  // const [experiance, setExperiance] = useState(
  //   user.profile.basicInfo !== undefined
  //     ? user.profile.basicInfo.experiance
  //     : null
  // );

  // const [ctc, setCTC] = useState(
  //   user.profile.basicInfo !== undefined ? user.profile.basicInfo.ctc : null
  // );

  // const [location, setLocation] = useState(
  //   user.profile.basicInfo !== undefined
  //     ? user.profile.basicInfo.location
  //     : null
  // );

  // const [email, setEmail] = useState(
  //   user.profile.basicInfo !== undefined ? user.profile.basicInfo.email : null
  // );

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
          />
        </Grid>
        <Grid item lg={3} xl={12}>
          <InputBase
            className={classes.info}
            placeholder='Email ID'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default BasicInfo;
