import React, {Component} from 'react';
import {render} from 'react-dom';
import { HashRouter, Route, Switch, PropsRoute } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage.jsx'
import Login from './Login/Login.jsx'
import ProjectsList from './ProjectsList/ProjectsList.jsx'
import ProjectSelected from './ProjectSelected/ProjectSelected.jsx'

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
            <Route exact path="/ProjectSelected" component={ProjectSelected}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
