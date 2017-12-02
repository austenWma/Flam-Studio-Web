import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ProjectsNav from './ProjectsNav.jsx'
import ProjectsList from '../ProjectsList/ProjectsList.jsx'

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
  }

  render() {
    return (
      <div className="projectsContainer">
        <ProjectsNav />
				<ProjectsList /> 
      </div>
    )
  }
}

export default Projects;