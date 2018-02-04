import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import IconMenu from 'material-ui/IconMenu';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'

class LandingPageNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
			value: 1,
		};
		this.handleMenuChange = this.handleMenuChange.bind(this)
		this.signOut = this.signOut.bind(this)
		this.goToStudioHome = this.goToStudioHome.bind(this)
		this.goToInvitations = this.goToInvitations.bind(this)
		this.goToFlamBlog = this.goToFlamBlog.bind(this)
		this.goToYourProfile = this.goToYourProfile.bind(this)
		this.goToAccountSettings = this.goToAccountSettings.bind(this)
		this.goToDownload = this.goToDownload.bind(this)
	}
	
	handleMenuChange(event, index, value) {
		this.setState({value})
	}

	signOut() {
		firebase.auth().signOut().then(() => {
      this.props.landingPageProps.history.push('/')
    })
	}

	goToStudioHome() {
		this.props.landingPageProps.history.push('/LandingPage')
	}

	goToInvitations() {
		this.props.landingPageProps.history.push('/Invitations')
	}

	goToFlamBlog() {
		window.location = 'https://www.flam-studio.com/community'
	}

	goToYourProfile() {
		this.props.landingPageProps.history.push('/YourProfile')
	}

	goToAccountSettings() {
		this.props.landingPageProps.history.push('/AccountSettings')
	}

	goToDownload() {
		this.props.landingPageProps.history.push('/LandingPage')
		alert('Download coming soon!')
	}

  render() {
    return (
      <div className="landingPageNavContainer">
        <div className="landingNavLogo">
					<img src={'http://i67.tinypic.com/2cct1fq.png'} style={{height: '100%', width: '100%'}} />
        </div>
				<div className="landingPageNavTitle">F L A M &nbsp; B E T A.</div>
				<div className="landingPageNavSettingsContainer">
						<MuiThemeProvider>
						<DropDownMenu underlineStyle={{display: 'none'}} value={this.state.value} onChange={this.handleMenuChange} 
						menuStyle={{backgroundColor: '#D8D8D8', fontWeight: 100}} 
						menuItemStyle={{color: 'black'}} 
						labelStyle={{color: 'white', fontWeight: 100}} 
						selectedMenuItemStyle={{color: 'black'}}
						iconButton={<IconButton 
							iconStyle={{width: 30, height: 30, marginTop: -30, marginLeft: -25, color: 'white'}}
						>
							<MoreVertIcon />
						</IconButton>}
						>
							<MenuItem primaryText="Your Profile" onClick={this.goToYourProfile}/>
							<Divider />
							<MenuItem primaryText="Account Settings" onClick={this.goToAccountSettings}/>
							<Divider />
							<MenuItem primaryText="Download" leftIcon={<Download style={{color: 'white'}}/>} onClick={this.goToDownload}/>
							<Divider />
							<MenuItem primaryText="Sign Out" onClick={this.signOut}/>
						</DropDownMenu>
						</MuiThemeProvider>
				</div>
				<div className="landingPageNavAccountContainer">
					<div className="landingPageNavAvatarContainer"></div>
					<div className="landingPageNavAcountDropdown">
						<MuiThemeProvider>
						<DropDownMenu underlineStyle={{display: 'none'}} value={this.state.value} onChange={this.handleMenuChange} 
							menuStyle={{backgroundColor: '#D8D8D8', fontWeight: 100}} 
							menuItemStyle={{color: 'black'}} 
							labelStyle={{color: 'white', fontWeight: 100}} 
							selectedMenuItemStyle={{color: 'black'}}>
							<MenuItem value={1} primaryText={sessionStorage.getItem('user_email')}/>
							<Divider />
							<MenuItem value={2} primaryText="Your Studio" onClick={this.goToStudioHome}/>
							<Divider />
							<MenuItem value={3} primaryText="Flam Blog" onClick={this.goToFlamBlog}/>
							<Divider />
							<MenuItem value={4} primaryText="Invitations" onClick={this.goToInvitations}/>
						</DropDownMenu>
						</MuiThemeProvider>
					</div>
				</div>
			</div>
    )
  }
}

export default LandingPageNav;