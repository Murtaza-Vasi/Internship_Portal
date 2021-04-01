import { Avatar, Button, Container, Grid } from '@material-ui/core';
import React, { useState, useReducer, useEffect } from 'react';
import useStyles from '../../../styles/CreateProfile';
import axios from 'axios';
import FormInfo from './FormInfo';
import BasicInfo from './BasicInfo';
import Skills from './Skills';
import ProjectInfo from './ProjectInfo';
import EducationInfo from './EducationInfo';
import CertificationInfo from './CertificationInfo';
import Image from './Image';

export const ProfileContext = React.createContext();

const CreateProfile = () => {
  const initialState = {
    name: '',
    title: '',
    description: '',

    photo: '',

    skills: [],

    basicInfo: {
      age: '',
      phoneno: '',
      experiance: '',
      ctc: '',
      location: '',
      email: '',
    },

    education: {
      university: '',
      edescription: '',
    },

    projects: {
      projectname: '',
      pdescription: '',
    },

    certification: {
      certiname: '',
      cdescription: '',
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'update-name':
        return {
          ...state,
          name: action.payload,
        };

      case 'update-title':
        return {
          ...state,
          title: action.payload,
        };

      case 'update-description':
        return {
          ...state,
          description: action.payload,
        };

      case 'update-photo':
        return {
          ...state,
          photo: action.payload,
        };

      case 'update-skills':
        return {
          ...state,
          skills: [...state.skills].concat(action.payload),
        };

      case 'update-age':
        return {
          ...state,
          basicInfo: {
            ...state.basicInfo,
            age: action.payload,
          },
        };
      case 'update-phoneno':
        return {
          ...state,
          basicInfo: {
            ...state.basicInfo,
            phoneno: action.payload,
          },
        };
      case 'update-experiance':
        return {
          ...state,
          basicInfo: {
            ...state.basicInfo,
            experiance: action.payload,
          },
        };
      case 'update-ctc':
        return {
          ...state,
          basicInfo: {
            ...state.basicInfo,
            ctc: action.payload,
          },
        };
      case 'update-location':
        return {
          ...state,
          basicInfo: {
            ...state.basicInfo,
            location: action.payload,
          },
        };
      case 'update-email':
        return {
          ...state,
          basicInfo: {
            ...state.basicInfo,
            email: action.payload,
          },
        };

      case 'update-university':
        return {
          ...state,
          education: {
            ...state.education,
            university: action.payload,
          },
        };
      case 'update-edescription':
        return {
          ...state,
          education: {
            ...state.education,
            edescription: action.payload,
          },
        };

      case 'update-projectname':
        return {
          ...state,
          projects: {
            ...state.projects,
            projectname: action.payload,
          },
        };
      case 'update-pdescription':
        return {
          ...state,
          projects: {
            ...state.projects,
            pdescription: action.payload,
          },
        };

      case 'update-certiname':
        return {
          ...state,
          certification: {
            ...state.certification,
            certiname: action.payload,
          },
        };
      case 'update-cdescription':
        return {
          ...state,
          certification: {
            ...state.certification,
            cdescription: action.payload,
          },
        };

      default:
        throw new Error('Error');
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState();

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem('userInfo'))
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null;

    if (!existingUser) {
      // Redirect to the login page
    }

    setUser(existingUser);
  }, []);

  const register = async () => {
    try {
      const updatedData = {
        profile: state,
      };

      console.log(user._id);
      await axios.patch(
        `http://localhost:5000/auth/update-profile/${user._id}`,
        updatedData
      );
    } catch (err) {
      console.error(err);
    }
  };

  const classes = useStyles();

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      <div className={classes.root}>
        <form onSubmit={register} encType='multipart-form'>
          <Container>
            <Grid container spacing={3}>
              <Grid item lg={2}>
                {/* Image Information */}
                <Image />
              </Grid>
              <Grid item lg={8}>
                {/* Information Form */}
                <FormInfo />
              </Grid>
              <Grid item lg={12}>
                {/* Skills Form */}
                <Skills />
              </Grid>
              <Grid item lg={12}>
                {/* Basic Information Form */}
                <BasicInfo />
              </Grid>
              <Grid item lg={12}>
                {/* Educations Information Form */}
                <EducationInfo />
              </Grid>
              <Grid item lg={12}>
                {/* Projects Information Form */}
                <ProjectInfo />
              </Grid>
              <Grid item lg={12}>
                {/* Certificates Information Form */}
                <CertificationInfo />
              </Grid>
            </Grid>
            <Button
              fullWidth
              className={classes.button}
              color='secondary'
              type='submit'
              variant='contained'
            >
              Submit
            </Button>
          </Container>
        </form>
      </div>
    </ProfileContext.Provider>
  );
};

export default CreateProfile;
