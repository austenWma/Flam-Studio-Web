import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import $ from 'jquery'

import { firebaseRef } from '../../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class ProjectsWindowSidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
			invitee: ''
		}
		this.emailInviteSubmit = this.emailInviteSubmit.bind(this)
		this.sendInvite = this.sendInvite.bind(this)
		this.handleInviteeEmail = this.handleInviteeEmail.bind(this)
	}

	handleInviteeEmail(e) {
		this.setState({
			invitee: e.target.value
		})
	}

	sendInvite() {
		let projectInfoArr = sessionStorage.getItem('project_selected').split(',')
		let inviteProjectName = projectInfoArr[0]
		let inviteProjectID = projectInfoArr[1]
		this.emailInviteSubmit(this.state.invitee, inviteProjectName, inviteProjectID)
	}

	emailInviteSubmit(email, projectName, projectID) {
		console.log(email)
		let invitee = '';

		db.ref(`users/`).once('value', (data) => {

			let userObj = data.val();
			for (var key in userObj) {
				if (userObj[key].email === email) {
					invitee = userObj[key]
				}
			}

			if (invitee === '') {
				alert('No email found!')
			}	else {
				db.ref(`users/${invitee.uid}/invitationRequests`).once('value', (data) => {
					let invitationCount = 0;
					for (var key in data.val()) {
						invitationCount++
					}
		
					db.ref(`users/${invitee.uid}/invitationRequests`).update({
						[invitationCount]: projectID + ' | ' + projectName + ' | ' + sessionStorage.getItem('access_token') + ' | ' + sessionStorage.getItem('user_email') + ' | ' + Date()
					})
					.then(() => {
						alert('Invitation Sent!')
					})
				})
			}
		})
	}

  render() {
    return (
      <div className="projectsWindowSidebarContainer">
				<div className="projectsWindowSidebarProjectDetails"></div>
				<div className="projectsWindowSidebarCollaboratorsContainer">
					<div>Collaborators</div>
				</div>
				<div className="projectsWindowSidebarInvitationsContainer">
					<div className="projectsWindowSidebarInvitationsText">Invite a Collaborator:</div>
					<div><input className="projectsWindowSidebarInvitationsInput" type="text" onChange={this.handleInviteeEmail}/></div>
						<div className="inviteButtonContainer" onClick={this.sendInvite}>
							<div className="inviteButton">
								Send Invitation
							</div>
						</div>
				</div>
      </div>
    )
  }
}

export default ProjectsWindowSidebar;