import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ProjectsNav from './ProjectsNav.jsx'
import ProjectsList from '../ProjectsList/ProjectsList.jsx'
import ProjectsSidebar from '../Projects/ProjectsSidebar.jsx'
import ProjectsWindow from '../Projects/ProjectsWindow/ProjectsWindow.jsx'
import ProjectsListWindow from './ProjectsWindow/ProjectsListWindow.jsx'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projectName: '',
      commitsListArr: [],
      projectInfoArr: []
    };
    this.reRenderProjectWindow = this.reRenderProjectWindow.bind(this)
    this.generateCommitsList = this.generateCommitsList.bind(this)
    this.getProjectInfo = this.getProjectInfo.bind(this)
    this.goToStudioHome = this.goToStudioHome.bind(this)
  }
  
  reRenderProjectWindow() {
    let projectSelectedInfo = sessionStorage.getItem('project_selected').split(',')[0];
    this.generateCommitsList(projectSelectedInfo);
  }

  generateCommitsList(projectSelectedInfo) {
    let cutProjectID = sessionStorage.getItem('project_selected').split(',')[1].slice(2) || ''

		db.ref(`users/${sessionStorage.getItem('access_token')}/projectCommits/${cutProjectID}`).on('value', (data) => {
      let commitsListArr = [];
      let commitsListArrParsed = [];

			for (var key in data.val()) {
				commitsListArr.push(data.val()[key] + ' | ' + key)
      }

      for (let i = 0; i < commitsListArr.length; i++) {
        let commitInfo = commitsListArr[i].split(' | ')
        commitsListArrParsed.push([commitInfo[1], commitInfo[0], commitInfo[4], commitInfo[3]])
      }

			this.setState({
        projectName: projectSelectedInfo,
        commitsListArr: commitsListArrParsed,
      })
		})
  }

  getProjectInfo(info) {
    let commitInfo = info.split(' | ');

    return [commitInfo[1], commitInfo[0], commitInfo[4], commitInfo[3]]
  }

  goToStudioHome() {
    this.setState({
      projectName: '',
      commitsListArr: [],
      projectInfoArr: []
    })
  }

  render() {
    if (this.state.projectName.length === 0) {
      return (
        <div className="projectsContainer">
          <ProjectsNav goToStudioHome={this.goToStudioHome}/>
          <ProjectsSidebar reRender={this.reRenderProjectWindow}/>
          <ProjectsListWindow reRender={this.reRenderProjectWindow}/> 
        </div>
      )
    } else {
      return (
        <div className="projectsContainer">
          <ProjectsNav goToStudioHome={this.goToStudioHome}/>
          <ProjectsSidebar reRender={this.reRenderProjectWindow}/>
          <ProjectsWindow projectName={this.state.projectName} commitsListArr={this.state.commitsListArr} /> 
        </div>
      )
    }
  }
}

export default Projects;