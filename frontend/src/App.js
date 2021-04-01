import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import theme from './style';
import { ThemeProvider } from '@material-ui/styles';

import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import Internship from './screens/InternshipScreen';
import Profile from './screens/ProfileScreen';
import JobPostScreen from './screens/JobPostScreen';
import CreateProfileScreen from './screens/CreateProfileScreen';

import CreateProfile from './components/User/CreateProfile/CreateProfile';
import User from './components/User/User';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/about' component={AboutUsScreen} />

            <Route
              path='/studentlogin'
              render={(props) => <LoginScreen {...props} student={true} />}
            />
            <Route
              path='/studentsignup'
              render={(props) => <SignupScreen {...props} student={true} />}
            />
            <Route
              path='/employeelogin'
              render={(props) => <LoginScreen {...props} student={false} />}
            />
            <Route
              path='/employeesignup'
              render={(props) => <SignupScreen {...props} student={false} />}
            />

            <Route path='/contact' component={ContactUsScreen} />
            <Route path='/user' component={User} />
            <Route path='/internship' component={Internship} />
            <Route path='/profile' component={Profile} />
            <Route path='/create-profile' component={CreateProfileScreen} />
            <Route />
          </Switch>
        </Router>
        {/* <PostJobForm /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
