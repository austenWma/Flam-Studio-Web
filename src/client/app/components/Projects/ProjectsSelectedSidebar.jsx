import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ProjectsList from '../ProjectsList/ProjectsList.jsx'
import ProjectsSelectedSidebarCollaboratorsList from './ProjectsSelectedCollaboratorsList.jsx'

import $ from 'jquery'

import SearchIcon from 'material-ui/svg-icons/action/search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class ProjectsSelectedSidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
		this.emailInviteSubmit = this.emailInviteSubmit.bind(this)
		this.sendInvite = this.sendInvite.bind(this)
		this.handleInviteeEmail = this.handleInviteeEmail.bind(this)
		this.handleInviteMessage = this.handleInviteMessage.bind(this)		
	}
	
	componentDidMount() {
		$('.projectsSidebarSearchContainer').slideToggle(300)
	}

	handleInviteeEmail(e) {
		this.setState({
			invitee: e.target.value
		})
	}

	handleInviteMessage(e) {
		this.setState({
			message: e.target.value
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
      <div className="projectsSidebarContainer">
        <div className="projectsSidebarSearchContainer">
					<MuiThemeProvider>
					<div className="projectsSidebarSearchBar">
						<input type="text" name="search" placeholder="Search projects..." className="projectsSidebarSearchBarInput"/>
						<SearchIcon style={{color: 'white', float: 'right', marginRight: 5, marginTop: 3}}/>
					</div>
					</MuiThemeProvider>
				</div>
				<div className="projectsSidebarSelectedContainer">
					<div className="projectsSidebarSelectedProjectInfoContainer">
						<div className="projectsSidebarSelectedProjectInfoAvatar"></div>
						<div className="projectsSidebarSelectedProjectInfoText">
							<div>{this.props.projectName}</div>
							<div className="projectsSidebarSelectedProjectInfoTextCollaboratorsCount">{this.props.collaboratorsArr.length + ' Collaborator(s)'}</div>
						</div>
					</div>
					<div>
						<ProjectsSelectedSidebarCollaboratorsList collaboratorsArr={this.props.collaboratorsArr}/>
					</div>
					<div className="projectsSidebarSelectedInvitationsContainer">
						<div className="projectsSidebarSelectedInvitationsText">Invite a Collaborator:</div>
							<div>
							<MuiThemeProvider>
								<TextField
									hintText="Email"
									style={{width: '75%', marginTop: '3%'}}
									underlineFocusStyle={{borderColor: '#7300e6'}}
									inputStyle={{color: '#D8D8D8'}}
									hintStyle={{color: '#7C7C7C'}}
									className={"projectsWindowSidebarInvitationsInput"}
									onChange={this.handleInviteeEmail}
								/>
								<TextField
									hintText="Message"
									style={{width: '75%', marginTop: '3%', marginBottom: '3%'}}
									underlineFocusStyle={{borderColor: '#7300e6'}}
									textareaStyle={{color: '#D8D8D8'}}
									hintStyle={{color: '#7C7C7C'}}
									multiLine={true}
									rowsMax={2}
									className={"projectsWindowSidebarInvitationsInput"}
									onChange={this.handleInviteMessage}
								/>
							</MuiThemeProvider>
							</div>
							<div className="inviteButtonContainer" onClick={this.sendInvite}>
								<div className="inviteButton">
									Send Invitation
								</div>
							</div>
					</div>
				</div>
      </div>
    )
  }
}

export default ProjectsSelectedSidebar;