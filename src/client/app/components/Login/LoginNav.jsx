import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

class LoginNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
			<div className="loginNavItemsContainer">
				<div className="loginNavLogo">
					<img src={'http://i66.tinypic.com/2zgu68p.png'} style={{height: '100%', width: '100%', marginTop: '10%'}} />
        </div>
				<div className="loginNavItems">
					<div className="loginNavItem">Home</div>
					<div className="loginNavItem">Download</div>
					<div className="loginNavItem">Flam Blog</div>
				</div>
			</div>
    )
  }
}

export default LoginNav;