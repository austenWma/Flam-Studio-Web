import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LoginNav from './LoginNav.jsx'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
			email: '',
			password: ''
		};
		
		this.emailChange = this.emailChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
		this.signUp = this.signUp.bind(this)
		this.goToLogin = this.goToLogin.bind(this)
  }

  signUp() {
    if (this.state.password) {
			firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(data => {
					console.log('successfully created an account', data)
					firebase.database().ref(`users/${data.uid.substring(0, 10)}`).set({
							email: data.email,
							uid: data.uid.substring(0, 10),
							projectIDs: ''
					})
					sessionStorage.setItem('access_token', data.uid.substring(0, 10))
			})
			.catch(err => {
					console.log(err.code)
					console.log(err.message)
			})
		}
	}

	goToLogin() {
    this.props.history.push('/')
	}

  emailChange(e) {
    this.setState({
        email: e.target.value
    })
  }

  passwordChange(e) {
    this.setState({
        password: e.target.value
    })
  }

  render() {
    return (
			<div className="signUpActionContainer">
				<MuiThemeProvider>
					<div className="signUpInputFields">
							<TextField
								hintText="Full Name"
								style={{width: '55%', marginTop: '10%'}}
								onChange={this.handleEmailChange}
							/>
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
							<div className="signUpButtonContainer">
								<div className="loginButton">
									<RaisedButton label="Sign Up" fullWidth={true} onClick={this.signUp}/>
								</div>
							</div>
							<div className="loginSignupContainer">
								<div onClick={this.props.toggleSignup}>Back to Log In</div>
							</div>
					</div>
				</MuiThemeProvider>
			</div>
    )
  }
}

export default SignUp;