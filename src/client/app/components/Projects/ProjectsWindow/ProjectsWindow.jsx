import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ProjectActions from '../ProjectActions.jsx'
import ProjectSelected from '../../ProjectSelected/ProjectSelected.jsx'
import ProjectsWindowSidebar from './ProjectsWindowSidebar.jsx'

class ProjectsWindow extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
  }

  render() {
    return (
      <div className="projectsWindowContainer">
        <ProjectsWindowSidebar />
				<ProjectSelected projectName={this.props.projectName} commitsListArr={this.props.commitsListArr} projectInfoArr={this.props.projectInfoArr} />
      </div>
    )
  }
}

export default ProjectsWindow;