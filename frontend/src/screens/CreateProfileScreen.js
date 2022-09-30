import { Grid, Container, Button, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useStyles from '../styles/User/ProfileForm';
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
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [skills, setSkills] = useState([]);
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

    console.log('FROM SUBMIT HANDLER PROFILE :', profile);

    const newProfile = {
      profile: {
        // ...profile,
        name: name,
        title: title,
        description: desc,
        skills: skills,
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
      console.log('NEW PROFILE', newProfile);
      await axios.patch(
        `http://localhost:5000/user/update-profile/${storedUserId}`,
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

      const data = await axios.get(
        `http://localhost:5000/user/get-profile/${storedUserId}`
      );
      // console.log('NAME ', data.data.name);
      setProfile(data.data);

      setName(data.data.profile.name);
      setTitle(data.data.profile.title);
      setDesc(data.data.profile.description);

      // Setting the basic info
      setAge(data.data.profile.basicInfo.age);
      setCTC(data.data.profile.basicInfo.ctc);
      setEmail(data.data.profile.basicInfo.email);
      setLocation(data.data.profile.basicInfo.location);
      setPhoneNo(data.data.profile.basicInfo.phoneno);
      setExperiance(data.data.profile.basicInfo.experiance);

      setSkills(data.data.profile.skills);

      // setting the university info
      setUni(data.data.profile.education.univeristy);
      setEDesc(data.data.profile.education.edescription);

      // setting the project info
      setProject(data.data.profile.projects.projectname);
      setPDesc(data.data.profile.projects.pdescription);

      // setting the certification info
      setCertiName(data.data.profile.certification.certiname);
      setCDesc(data.data.profile.certification.cdescription);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid lg={2}>
            <Image />
          </Grid>
          <Grid lg={8}>
            <FormInfo
              name={name}
              setName={setName}
              title={title}
              setTitle={setTitle}
              desc={desc}
              setDesc={setDesc}
            />
          </Grid>
          <Grid item lg={12}>
            <Skills skills={skills} setSkills={setSkills} />
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
              name='Education'
              nameValue={uni}
              nameValueChangeHandler={setUni}
              descValue={eDesc}
              descValueChangeHandler={setEDesc}
            />
          </Grid>
          <Grid item lg={12}>
            <NameDescriptionFrom
              name='Project'
              nameValue={project}
              nameValueChangeHandler={setProject}
              descValue={pDesc}
              descValueChangeHandler={setPDesc}
            />
          </Grid>
          <Grid item lg={12}>
            <NameDescriptionFrom
              name='Certification'
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
