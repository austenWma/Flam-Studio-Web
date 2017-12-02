import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

class ProjectsListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div className="projectsListItemContainer">
        {this.props.projectName}
      </div>
    )
  }
}

export default ProjectsListItem;