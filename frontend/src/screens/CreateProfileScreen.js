import { Grid, Container, Button, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useStyles from '../styles/CreateProfile';
import Image from '../components/User/CreateProfile/Image';
import FormInfo from '../components/User/CreateProfile/FormInfo';
import Skills from '../components/User/CreateProfile/Skills';
import BasicInfo from '../components/User/CreateProfile/BasicInfo';
import NameDescriptionFrom from '../components/NameDescriptionFrom';

const CreateProfileScreen = ({ history }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const storedUserId = JSON.parse(localStorage.getItem('userId'));

  if (!storedUserId) {
    history.push('/');
    alert('Session timeout please login again');
  }

  const [profile, setProfile] = useState({});
  const [uni, setUni] = useState('');
  const [eDesc, setEDesc] = useState('');
  const [project, setProject] = useState('');
  const [pDesc, setPDesc] = useState('');
  const [certiName, setCertiName] = useState('');
  const [cDesc, setCDesc] = useState('');
  const [age, setAge] = useState('');
  const [ctc, setCTC] = useState('');
  const [email, setEmail] = useState('');
  const [experiance, setExperiance] = useState('');
  const [location, setLocation] = useState('');
  const [phoneno, setPhoneNo] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const newProfile = {
      profile: {
        ...profile,
        basicInfo: {
          ...profile.basicInfo,
          age: age,
          ctc: ctc,
          email: email,
          location: location,
          phoneno: phoneno,
          experiance: experiance,
        },
        projects: {
          projectname: project,
          pdescription: pDesc,
        },
        education: {
          university: uni,
          edescription: eDesc,
        },
        certification: {
          certiname: certiName,
          cdescription: cDesc,
        },
      },
    };

    setProfile(newProfile);

    try {
      setLoading(true);

      await axios.patch(
        `http://localhost:5000/auth/update-profile/${storedUserId}`,
        newProfile
      );

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(async () => {
    try {
      setLoading(true);

      const profile = await axios.get(
        `http://localhost:5000/user/get-profile/${storedUserId}`
      );

      setProfile(profile);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  });

  const onChangeHandler = (data) => {
    setProfile({
      profile: { ...profile, ...data.profile },
    });
  };

  const onChangeSkillHandler = (data) => {
    const newSkill = data.profile.skills;
    const skillList = profile.skills.concat(newSkill);

    setProfile({
      profile: { ...profile, skills: skillList },
    });
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid lg={2}>
            <Image onChangeHandler={onChangeHandler} />
          </Grid>
          <Grid lg={8}>
            <FormInfo onChangeHandler={onChangeHandler} />
          </Grid>
          <Grid item lg={12}>
            <Skills onChangeSkillHandler={onChangeSkillHandler} />
          </Grid>
          <Grid item lg={12}>
            <BasicInfo
              age={age}
              setAge={setAge}
              email={email}
              setEmail={setEmail}
              location={location}
              setLocation={setLocation}
              experiance={experiance}
              setExperiance={setExperiance}
              ctc={ctc}
              setCTC={setCTC}
              phoneno={phoneno}
              setPhoneNo={setPhoneNo}
            />
          </Grid>
          <Grid item lg={12}>
            <NameDescriptionFrom
              name='education'
              nameValue={uni}
              nameValueChangeHandler={setUni}
              descValue={eDesc}
              descValueChangeHandler={setEDesc}
            />
          </Grid>
          <Grid item lg={12}>
            <NameDescriptionFrom
              name='project'
              nameValue={project}
              nameValueChangeHandler={setProject}
              descValue={pDesc}
              descValueChangeHandler={setPDesc}
            />
          </Grid>
          <Grid item lg={12}>
            <NameDescriptionFrom
              name='certification'
              nameValue={certiName}
              nameValueChangeHandler={setCertiName}
              descValue={cDesc}
              descValueChangeHandler={setCDesc}
            />
          </Grid>
        </Grid>
        <Button
          className={classes.button}
          color='secondary'
          type='submit'
          variant='contained'
          onClick={submitHandler}
        >
          Submit
        </Button>
        {loading && <CircularProgress color='primary' />}
      </Container>
    </div>
  );
};

export default CreateProfileScreen;
