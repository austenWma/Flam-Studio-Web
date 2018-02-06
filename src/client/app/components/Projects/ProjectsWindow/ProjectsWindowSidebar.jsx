import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import $ from 'jquery'

class ProjectsWindowSidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
		}
	}
	
	componentDidMount() {
    // $('.projectsWindowSidebarContainer').hide()
	}

  render() {
    return (
      <div className="projectsWindowSidebarContainer">
				
      </div>
    )
  }
}

export default ProjectsWindowSidebar;