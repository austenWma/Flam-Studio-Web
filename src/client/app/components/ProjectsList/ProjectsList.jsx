import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ProjectsListItem from './ProjectsListItem.jsx'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
			projectsArr: []
		};
	}
	
	componentDidMount() {
		db.ref(`users/${sessionStorage.getItem('access_token')}/projectIDs`).on('value', (data) => {
			let newProjectsArr = []
			for (var key in data.val()) {
				newProjectsArr.push(data.val()[key])
			}

			this.setState({
				projectsArr: newProjectsArr
			})
		})
	}

  render() {
    return (
      <div className="projectsListContainer">
        {this.state.projectsArr.map(project =>
					<ProjectsListItem projectName={project}/> 
				)}
      </div>
    )
  }
}

export default Projects;