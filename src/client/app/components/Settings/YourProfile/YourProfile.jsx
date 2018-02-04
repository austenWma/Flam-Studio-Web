import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingPageNav from '../../LandingPage/LandingPageNav.jsx'

class YourProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div className="yourProfileContainer">
        <LandingPageNav landingPageProps={this.props}/> 
        <div className="yourProfileNavTitleContainer">
            Profile
        </div> 
      </div>
    )
  }
}

export default YourProfile;