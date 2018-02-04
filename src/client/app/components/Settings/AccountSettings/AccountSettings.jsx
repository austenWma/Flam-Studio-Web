import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingPageNav from '../../LandingPage/LandingPageNav.jsx'

class AcountSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div className="accountSettingsContainer">
        <LandingPageNav landingPageProps={this.props}/> 
        <div className="accountSettingsNavTitleContainer">
            Account Settings
        </div> 
      </div>
    )
  }
}

export default AcountSettings;