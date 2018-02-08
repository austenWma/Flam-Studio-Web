import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import $ from 'jquery'

class ProjectsSelectedCollaboratorsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
	}

  render() {
    return (
      <div className="projectsSidebarSelectedCollaboratorsContainer">
        <div>Collaborators</div>
				{this.props.collaboratorsArr.map(collaborator =>
					<div>{collaborator}</div> 
				)}
      </div>
    )
  }
}

export default ProjectsSelectedCollaboratorsList;