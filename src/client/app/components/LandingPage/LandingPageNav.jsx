import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import $ from 'jquery'

import IconMenu from 'material-ui/IconMenu';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class LandingPageNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
			value: 1,
		};
		this.handleMenuChange = this.handleMenuChange.bind(this)
	}
	
	handleMenuChange(event, index, value) {
		this.setState({value})
	}

  render() {
    return (
      <div className="landingPageNavContainer">
        <div className="landingNavLogo">
					<img src={'http://i66.tinypic.com/2zgu68p.png'} style={{height: '100%', width: '100%', marginTop: '10%'}} />
        </div>
				<div className='landingPageNavSettingsContainer'>
					<MuiThemeProvider>
					<IconMenu
						iconButtonElement={<IconButton 
							iconStyle={{width: 37, height: 37}}
						>
							<MoreVertIcon />
						</IconButton>}
						anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						targetOrigin={{horizontal: 'left', vertical: 'top'}}
					>
						<MenuItem
							primaryText="Your Profile"
						/>
						<MenuItem
							primaryText="Account Settings"
						/>
						<Divider />
						<MenuItem 
							primaryText="Download" 
							leftIcon={<Download />} 
						/>
						<Divider />
						<MenuItem 
							primaryText="Sign Out" 
						/>
				
					</IconMenu>
					</MuiThemeProvider>
				</div>
				<div className="landingPageNavAccountContainer">
					<div className="landingPageNavAvatarContainer"></div>
					<div className="landingPageNavAcountDropdown">
						<MuiThemeProvider>
						<DropDownMenu value={this.state.value} onChange={this.handleMenuChange}>
							<MenuItem value={1} primaryText="austen@austen.com" />
							<Divider />
							<MenuItem value={2} primaryText="Your Projects" />
							<Divider />
							<MenuItem value={3} primaryText="Flam Blog" />
							<Divider />
							<MenuItem value={4} primaryText="Invitations" />
						</DropDownMenu>
						</MuiThemeProvider>
					</div>
				</div>
			</div>
    )
  }
}

export default LandingPageNav;