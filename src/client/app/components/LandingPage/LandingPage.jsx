import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingPageNav from './LandingPageNav.jsx'
import Projects from '../Projects/Projects.jsx'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div className="landingPageContainer">
        <LandingPageNav landingPageProps={this.props}/> 
        <Projects /> 
      </div>
    )
  }
}

export default LandingPage;