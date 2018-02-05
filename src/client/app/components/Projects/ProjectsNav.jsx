import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import SettingsApp from 'material-ui/svg-icons/action/settings';
import UploadIcon from 'material-ui/svg-icons/action/backup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';

class ProjectsNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
  }

  render() {
    return (
      <div className="projectsNavContainer">
        <div className="projectsNavContainerStudioTitle" onClick={this.props.goToStudioHome}>Flam Studio</div>
        <div className="projectsNavUtilitiesContainer">
          <MuiThemeProvider>
          <div className="projectsNavUtilitiesIcons">
            <IconButton iconStyle={{color: 'white', float: 'right'}}>
              <SettingsApp />
            </IconButton>
            <div className="projectsNavUtilitiesShareButtonContainer" >
              <div className="projectsNavUtilitiesShareButton">
                <UploadIcon style={{color: 'white', marginRight: 5}}/> Share
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