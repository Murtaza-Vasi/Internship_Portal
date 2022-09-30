import React, { useContext, useState } from 'react';
import { Avatar, Fab, Grid } from '@material-ui/core';
import useStyles from '../../../styles/User/ProfileForm';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const Image = ({ history }) => {
  const storedUser = JSON.parse(localStorage.getItem('userId'));

  if (!storedUser) {
    history.push('/');
    alert('Session timeout please login again');
  }

  const [user, setUser] = useState(storedUser);
  // const [image, setImage] = useState(user.profile.image)

  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.imageform}
        container
        spacing={3}
        justify='center'
      >
        <input
          // onChange={(e) =>
          //   profileContext.dispatch({
          //     type: 'update-photo',
          //     payload: e.target.value,
          //   })
          // }
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
    </div>
  );
};

export default Image;
