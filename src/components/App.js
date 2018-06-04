import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
// import SignUpPage from './SignUp';
// import SignInPage from './SignIn';
// import PasswordForgetPage from './PasswordForget';
// import HomePage from './Home';
// import AccountPage from './Account';

import * as routes from '../constants/routes';


const App = () => {
    return(
      <Router>
        <div>
          <Navigation />

          <hr />

          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />

       </div>
      </Router>
    )

  }

export default App;
