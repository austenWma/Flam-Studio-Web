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
		};

		this.commitDownload = this.commitDownload.bind(this)
	}

	commitDownload() {
		console.log('COMMIT DOWNLOAD', sessionStorage.getItem('project_selected').split(',')[0] + this.props.commitInfo[2])
		// Send update to FB OpeningProject property containing the DLlink of the new project

		db.ref(`users/${sessionStorage.getItem('access_token')}`).update({
			openingProject: this.props.commitInfo[1] + ' | ' + sessionStorage.getItem('project_selected').split(',')[0] + this.props.commitInfo[2]
		})
	}

  render() {
		console.log('+++++++++++++++++++', this.props.commitInfo)
    return (
      <div>
				<div className="commitInfo">
					<div>{this.props.commitInfo[0]}</div>
					<div>{this.props.commitInfo[3]}</div>
				</div>
				<a onClick={this.commitDownload}>Open in Logic</a>
	    </div>
    )
  }
}

export default CommitsListItem;