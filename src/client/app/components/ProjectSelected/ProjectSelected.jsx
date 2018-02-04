import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import CommitsList from './CommitsList.jsx'

class ProjectSelected extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};
  }

  // componentDidMount() {
  //   let projectSelectedInfo = sessionStorage.getItem('project_selected').split(',')
  //   this.setState({
  //     projectName: projectSelectedInfo[0],
  //   })
  // }

  render() {
    return (
      <div className="projectSelectedContainer">
        <div className="projectSelectedTitle">
          {this.props.projectName}
        </div>
        <CommitsList projectName={this.props.projectName} commitsListArr={this.props.commitsListArr} />
			</div>
    )
  }
}

export default ProjectSelected;