import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LoginLeft from './LoginLeft.jsx'
import LoginRight from './LoginRight.jsx'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div className="loginContainer">
        <LoginLeft />
        <LoginRight loginProps={this.props}/>
      </div>
    )
  }
}

export default Login;