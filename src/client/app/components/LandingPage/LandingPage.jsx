import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingWelcome from './LandingWelcome.jsx'
import LandingMenuBar from './LandingMenuBar.jsx'

import jump from 'jump.js'

import $ from 'jquery'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
    this.toggleMenu = this.toggleMenu.bind(this)
    this.scrollToTab = this.scrollToTab.bind(this)
  }

  componentDidMount() {
    $('.landingMenuBar').hide()
  }

  toggleMenu() {
    $('.landingMenuBar').slideToggle(250)
  }

  scrollToTab(tabN) {
    let tab = (tabN === 0) ? ".landingWelcomeContainer" : '.landingTabContentContainer' + tabN.toString();
    console.log(tab)
    jump(tab, {
      duration: 400
    })
  }

  render() {
    return (
      <div>
        <div className="landingWelcomeContainer">
          <div className="landingMenuBar">
            <LandingMenuBar scrollToTab={this.scrollToTab}/>
          </div>
          <LandingWelcome toggleMenu={this.toggleMenu}/>
        </div>
        <div className="landingTabContentContainer1">
          Who We Are
        </div>
        <div className="landingTabContentContainer2">
          How it Works
        </div>
        <div className="landingTabContentContainer3">
          Products
        </div>
        <div className="landingTabContentContainer4">
          Contact
        </div>
      </div>
    )
  }
}

export default LandingPage;