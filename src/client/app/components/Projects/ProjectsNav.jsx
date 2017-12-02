import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

class ProjectsNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
  }

  render() {
    return (
      <div className="projectsNavContainer">
        <div className="projectsNavTitleContainer">
            Your Studio
        </div>
      </div>
    )
  }
}

export default ProjectsNav;