import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class CommitsListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
			commitMessage: '',
			commitDownload: '',
			commitNumber: ''
		};

		this.commitDownload = this.commitDownload.bind(this)
	}
	
	componentDidMount() {

		let projectCommitInfo = this.props.projectInfo.split(' | ')

		console.log('PROJECT COMIT INFO', projectCommitInfo)

		this.setState({
			commitMessage: projectCommitInfo[1],
			commitDownload: projectCommitInfo[0],
			commitNumber: projectCommitInfo[4],
			commitUser: projectCommitInfo[3]
		})
	}

	commitDownload() {
		console.log('COMMIT DOWNLOAD', sessionStorage.getItem('project_selected').split(',')[0] + this.state.commitNumber)
		// Send update to FB OpeningProject property containing the DLlink of the new project

		db.ref(`users/${sessionStorage.getItem('access_token')}`).update({
			openingProject: this.state.commitDownload + ' | ' + sessionStorage.getItem('project_selected').split(',')[0] + this.state.commitNumber
		})
	}

  render() {
		console.log(this.state.commitDownload)
    return (
      <div>
				<div className="commitInfo">
					<div>{this.state.commitMessage}</div>
					<div>{this.state.commitUser}</div>
				</div>
				<a onClick={this.commitDownload}>Open in Logic</a>
	    </div>
    )
  }
}

export default CommitsListItem;