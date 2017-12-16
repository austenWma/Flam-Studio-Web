import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingPageNav from '../LandingPage/LandingPageNav.jsx'
import CommitsList from './CommitsList.jsx'

class ProjectSelected extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projectName: '',
      projectID: ''
		};
  }

  componentDidMount() {
    let projectSelectedInfo = sessionStorage.getItem('project_selected').split(',')
    this.setState({
      projectName: projectSelectedInfo[0],
    })
  }

  render() {
    console.log(this.state.projectName)
    return (
      <div className="projectSelectedContainer">
				<LandingPageNav landingPageProps={this.props}/> 
        <div className="projectSelectedTitle">
          {this.state.projectName}
        </div>
        <CommitsList projectName={this.state.projectName}/>
			</div>
    )
  }
}

export default ProjectSelected;