import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import $ from 'jquery'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { firebaseRef } from '../../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class ProjectsWindowSidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
			invitee: '',
			message: ''
		}
	}

  render() {
    return (
      <div className="projectsWindowSidebarContainer">
				<div className="projectsWindowSidebarProjectDetails"></div>
				<div className="projectsWindowSidebarChatLogContainer">
					<div>History/Chat Box</div>
				</div>
      </div>
    )
  }
}

export default ProjectsWindowSidebar;