import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import { firebaseRef } from '../../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

import ProjectsListWindowItem from './ProjectsListWindowItem.jsx'

class ProjectsListWindow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projectsArr: []
		};
  }

  componentDidMount() {
		db.ref(`users/${sessionStorage.getItem('access_token')}/projectIDs`).on('value', (data) => {
			let newProjectsArr = []
			let newProjectsIDsArr = []
			for (var key in data.val()) {
				newProjectsArr.push([data.val()[key].Name, '0.' + key])
			}

			this.setState({
				projectsArr: newProjectsArr,
      })
    })
	}

  render() {
    return (
      <div className="projectsListWindow">
        {this.state.projectsArr.map(project =>
					<ProjectsListWindowItem projectInfo={project} reRender={this.props.reRender}/> 
				)}
      </div>
    )
  }
}

export default ProjectsListWindow;