import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

import InvitationsListItem from './InvitationsListItem.jsx'

class InvitationsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
			invitationsArr: []
    };
	}
	
	componentDidMount() {
		db.ref(`users/${sessionStorage.getItem('access_token')}/invitationRequests`).on('value', (data) => {
			let newInvitationsArr = []
			for (var key in data.val()) {
				let splitItems = data.val()[key].split(' | ')
				splitItems.push(key)
				newInvitationsArr.push(splitItems)
			}

			this.setState({
				invitationsArr: newInvitationsArr,
			})
		})
	}

  render() {
    return (
      <div className="invitationsListContainer">
        Invitations List
				{this.state.invitationsArr.map(invitation =>
					<InvitationsListItem invitationInfo={invitation}/> 
				)}
      </div>
    )
  }
}

export default InvitationsList;