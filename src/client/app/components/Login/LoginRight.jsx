import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import $ from 'jquery'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'

class LoginRight extends Component {
  constructor (props) {
    super(props)
    this.state = {
			email: '',
			password: '',
		};
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.login = this.login.bind(this)
	}

	login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(data => {
        if (data) {
            localStorage.setItem('access_token', data.uid.slice(0,10))
            alert('SIGNED IN!')
        }
    })
    .catch((err) => {
        console.log(err);
    })
  }
	
	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	}

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		})
	}

  render() {
    return (
      <div className="loginRightContainer">
        <div className="loginActionContainer">
				<MuiThemeProvider>
					<div className="loginInputFields">
							<TextField
								hintText="Email"
								style={{width: '55%', marginTop: '10%'}}
								onChange={this.handleEmailChange}
							/>
							<br />
							<br />
							<TextField
								hintText="Password"
								style={{width: '55%'}}
								type="password"
								onChange={this.handlePasswordChange}
							/>
							<div className="loginButtonContainer">
								<div className="loginButton">
									<RaisedButton label="Log In" fullWidth={true} onClick={this.login}/>
								</div>
							</div>
							<div className="loginSignupContainer">
								<div>Don't have an account with us?</div>
								<a>Sign Up</a>
							</div>
					</div>
				</MuiThemeProvider>
				</div>
      </div>
    )
  }
}

export default LoginRight;