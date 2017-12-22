import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

class LoginNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
		this.goToFlamHome = this.goToFlamHome.bind(this)
		this.goToFlamBlog = this.goToFlamBlog.bind(this)
	}
	
	goToFlamHome() {
		window.location = 'https://www.flam-studio.com/'
	}

	goToFlamBlog() {
		window.location = 'https://www.flam-studio.com/community'
	}

  render() {
    return (
			<div className="loginNavItemsContainer">
				<div className="loginNavLogo">
					<img src={'http://i66.tinypic.com/2zgu68p.png'} style={{height: '100%', width: '100%', marginTop: '10%'}} />
        </div>
				<div className="loginNavItems">
					<div className="loginNavItem" onClick={this.goToFlamHome}>Home</div>
					<div className="loginNavItem">Download</div>
					<div className="loginNavItem" onClick={this.goToFlamBlog}>Community</div>
				</div>
			</div>
    )
  }
}

export default LoginNav;