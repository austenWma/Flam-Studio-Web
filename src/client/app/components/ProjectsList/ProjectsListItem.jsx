import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import InviteModal from './InviteModal.jsx'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class ProjectsListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
			showModal: false,
			inviteEmail: ''
    };
    this.goToProjectSelected = this.goToProjectSelected.bind(this)
		this.invite = this.invite.bind(this)
		this.toggleModal = this.toggleModal.bind(this)
		this.emailInviteSubmit = this.emailInviteSubmit.bind(this)
  }

  goToProjectSelected() {
      sessionStorage.setItem('project_selected', this.props.projectInfo)
      this.props.projectsListProps.history.push('/ProjectSelected')
  }

	invite(context) {
		console.log('Inviting collaborator')
		this.toggleModal()
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	emailInviteSubmit(email) {
		console.log(email)
	}

  render() {
    return (
			<div>
        <div className="projectsListItemContainer" onClick={this.goToProjectSelected}>
          {this.props.projectInfo[0]}
        </div>
				<button onClick={this.invite}>Invite Collaborator</button>
				<InviteModal
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
					emailInviteSubmit={this.emailInviteSubmit}
        />
			</div>
    )
  }
}

export default ProjectsListItem;