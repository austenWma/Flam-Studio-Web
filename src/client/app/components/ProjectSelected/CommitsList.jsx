import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import CommitsListItem from './CommitsListItem.jsx'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class CommitsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
			commitsListArr: []
		};
	}

  componentDidMount() {
		let cutProjectID = sessionStorage.getItem('project_selected').split(',')[1].slice(2)

		db.ref(`users/${sessionStorage.getItem('access_token')}/projectCommits/${cutProjectID}`).on('value', (data) => {
			this.setState({
				commitsListArr: data.val().slice(1)
			})
		})
  }

  render() {
    return (
      <div className="projectSelectedCommitsListContainer">
				{this.state.commitsListArr.map(commit =>
					<CommitsListItem projectInfo={commit}/> 
				)}
    	</div>
    )
  }
}

export default CommitsList;