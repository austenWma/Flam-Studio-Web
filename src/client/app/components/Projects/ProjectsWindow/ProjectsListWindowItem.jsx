import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

class ProjectsListWindow extends Component {
  constructor (props) {
    super(props)
    this.state = {
		};

		this.goToProjectSelected = this.goToProjectSelected.bind(this)
	}
	
	goToProjectSelected() {
		sessionStorage.setItem('project_selected', this.props.projectInfo)
		this.props.reRender()
	}

  render() {
    return (
      <div className="projectsListWindowItemContainer" onClick={this.goToProjectSelected}>
        <div>
            <img src={"http://i64.tinypic.com/33k7tww.png"} style={{height: '75%', width: '95%', marginLeft: 5}}/>
        </div>
				<div className="projectsListWindowItemTitle">{this.props.projectInfo[0]}</div>
      </div>
    )
  }
}

export default ProjectsListWindow;