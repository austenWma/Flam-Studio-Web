import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import Toc from 'material-ui/svg-icons/action/toc';
import UploadIcon from 'material-ui/svg-icons/action/backup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';

import $ from 'jquery'

class ProjectsNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    $(".projectsWindowSidebarContainer").toggleClass("projectsWindowSidebarContainerShow");
  }

  render() {
    return (
      <div className="projectsNavContainer">
        <div className="projectsNavContainerStudioTitle" onClick={this.props.goToStudioHome}>Flam Studio</div>
        <div className="projectsNavUtilitiesContainer">
          <MuiThemeProvider>
          <div className="projectsNavUtilitiesIcons">
            <IconButton iconStyle={{color: 'white', float: 'right'}} onClick={this.toggleSidebar}>
              <Toc />
            </IconButton>
            <div className="projectsNavUtilitiesShareButtonContainer" >
              <div className="projectsNavUtilitiesShareButton">
                <UploadIcon style={{color: '#F5F5F5', marginRight: 5}}/> Share
              </div>
            </div>
          </div>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

export default ProjectsNav;