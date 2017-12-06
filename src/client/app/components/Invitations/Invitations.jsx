import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingPageNav from '../LandingPage/LandingPageNav.jsx'
import InvitationsList from './InvitationsList.jsx'

class Invitations extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div className="invitationsContainer">
        <LandingPageNav landingPageProps={this.props}/> 
        <div className="invitationsNavTitleContainer">
            Invitations
        </div>
        <InvitationsList /> 
      </div>
    )
  }
}

export default Invitations;