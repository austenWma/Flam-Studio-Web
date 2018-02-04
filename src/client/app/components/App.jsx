import React, {Component} from 'react';
import {render} from 'react-dom';
import { HashRouter, Route, Switch, PropsRoute } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage.jsx'
import Login from './Login/Login.jsx'
import ProjectsList from './ProjectsList/ProjectsList.jsx'
import Invitations from './Invitations/Invitations.jsx'
import YourProfile from './Settings/YourProfile/YourProfile.jsx'
import AccountSettings from './Settings/AccountSettings/AccountSettings.jsx'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/LandingPage" component={LandingPage}/>
            <Route exact path="/Invitations" component={Invitations}/>
            <Route exact path="/YourProfile" component={YourProfile}/>
            <Route exact path="/AccountSettings" component={AccountSettings}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
