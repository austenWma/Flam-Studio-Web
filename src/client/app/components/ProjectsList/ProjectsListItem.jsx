import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class ProjectsListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
			value: this.props.defaultValue
    };
    this.goToProjectSelected = this.goToProjectSelected.bind(this)
		this.invite = this.invite.bind(this)
		this.onPromptChange = this.onPromptChange.bind(this)
  }

  goToProjectSelected() {
      sessionStorage.setItem('project_selected', this.props.projectInfo)
      this.props.projectsListProps.history.push('/ProjectSelected')
  }

	invite(context) {
		console.log('Inviting collaborator')
	}

  render() {
    return (
			<div>
        <div className="projectsListItemContainer" onClick={this.goToProjectSelected}>
          {this.props.projectInfo[0]}
        </div>
				<button onClick={() => { this.invite(this) }}>Invite Collaborator</button>
			</div>
    )
  }
}

export default ProjectsListItem;