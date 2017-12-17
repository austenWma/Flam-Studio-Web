import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class InvitationsListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
		this.acceptInvite = this.acceptInvite.bind(this)
	}
	
	componentDidMount() {
		console.log(this.props.invitationInfo)
	}

	acceptInvite() {
		// Update projectIDs to include invitation ID

		let projectID = this.props.invitationInfo[0].slice(2)
		let projectName = this.props.invitationInfo[1]
		let inviterID = this.props.invitationInfo[2]
		let invitationKey = this.props.invitationInfo[5]

		db.ref(`users/${sessionStorage.getItem('access_token')}/projectIDs`).update({
			[projectID]: projectName
		})

		// Grab inviter's projectID commit history, and add to invitee's commit history

		db.ref(`users/${inviterID}/projectCommits/${projectID}`).once('value', (data) => {
			db.ref(`users/${sessionStorage.getItem('access_token')}/projectCommits`).update({
				[projectID]: data.val()
			})
			.then(() => {
				// Delete invitation

				db.ref(`users/${sessionStorage.getItem('access_token')}/invitationRequests/${invitationKey}`).remove()
			})
			.catch(err => console.log(err))
		})
		.catch(err => console.log(err))

	}

  render() {
    return (
      <div className="invitationsListItemContainer">
				<div>
					{this.props.invitationInfo[1]}
				</div>
				<div>
					From: {this.props.invitationInfo[3]}
				</div>
				<div>
					{this.props.invitationInfo[4]}
				</div>
				<button onClick={this.acceptInvite}>
					Accept Invite
				</button>
      </div>
    )
  }
}

export default InvitationsListItem;