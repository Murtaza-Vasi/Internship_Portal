import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core';
import useStyles from '../../styles/User/Profile';
import Internship from '../../screens/InternshipScreen';

const User = () => {
  const classes = useStyles();

  const [anchor, setAnchor] = useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = (PageUrl) => {
    history.push(PageUrl);
    setAnchor(null);
  };

  const logOut = async () => {
    await Axios.get('http://localhost:5000/auth/logout');
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleClick}>
        <Avatar className={classes.profilePic}>S</Avatar>
      </Button>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('/profile')}>My Profile</MenuItem>
        <MenuItem onClick={() => handleClose('/create-profile')}>
          Create Profile
        </MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
      <hr></hr>
      <Internship />
    </div>
  );
};

export default User;
