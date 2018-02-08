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

	componentDidMount() {
		$('.projectsSidebarSelectedCollaboratorsInnerContainer').hide()
	}

  render() {
    return (
      <div className="projectsSidebarSelectedCollaboratorsContainer">
				<div className="projectsSidebarSelectedCollaboratorsInnerContainer">
					<div className="projectsSidebarSelectedCollaboratorsText">Collaborators</div>
					{this.props.collaboratorsArr.map(collaborator =>
						<div className="projectsSidebarSelectedCollaboratorItemContainer">
							<div className="projectsSidebarSelectedCollaboratorsAvatar"></div> 
							<div className="projectsSidebarSelectedCollaboratorsEmail">{collaborator}</div> 
						</div>
					)}
				</div>
      </div>
    )
  }
}

export default ProjectsSelectedCollaboratorsList;