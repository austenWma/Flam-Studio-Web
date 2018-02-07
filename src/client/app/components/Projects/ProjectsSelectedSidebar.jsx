import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ProjectsList from '../ProjectsList/ProjectsList.jsx'

import SearchIcon from 'material-ui/svg-icons/action/search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class ProjectsSelectedSidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
  }

  render() {
    return (
      <div className="projectsSidebarContainer">
        <div className="projectsSidebarSearchContainer">
					<MuiThemeProvider>
					<div className="projectsSidebarSearchBar">
						<input type="text" name="search" placeholder="Search projects..." className="projectsSidebarSearchBarInput"/>
						<SearchIcon style={{color: 'white', float: 'right', marginRight: 5, marginTop: 3}}/>
					</div>
					</MuiThemeProvider>
				</div>
				<div className="projectsSidebarListContainer">
					<ProjectsList reRender={this.props.reRender}/> 
				</div>
      </div>
    )
  }
}

export default ProjectsSelectedSidebar;