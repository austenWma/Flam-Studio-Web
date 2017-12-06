import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingPageNav from '../LandingPage/LandingPageNav.jsx'

class Invitations extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div className="landingPageContainer">
        <LandingPageNav landingPageProps={this.props}/> 
        Invitations
      </div>
    )
  }
}

export default Invitations;