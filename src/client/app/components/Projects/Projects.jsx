import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ProjectsNav from './ProjectsNav.jsx'
import ProjectsList from '../ProjectsList/ProjectsList.jsx'
import ProjectsSidebar from '../Projects/ProjectsSidebar.jsx'
import ProjectsWindow from '../Projects/ProjectsWindow/ProjectsWindow.jsx'
import ProjectsListWindow from './ProjectsWindow/ProjectsListWindow.jsx'
import ProjectsSelectedSidebar from '../Projects/ProjectsSelectedSidebar.jsx'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

import $ from 'jquery'

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projectName: '',
      commitsListArr: [],
      projectCollaboratorsArr: []
    };
    this.reRenderProjectWindow = this.reRenderProjectWindow.bind(this)
    this.generateCommitsAndCollaboratorsList = this.generateCommitsAndCollaboratorsList.bind(this)
    this.goToStudioHome = this.goToStudioHome.bind(this)
  }

  componentDidMount() {
    this.goToStudioHome()
  }
  
  reRenderProjectWindow() {
    let projectSelectedInfo = sessionStorage.getItem('project_selected').split(',')[0];
    this.generateCommitsAndCollaboratorsList(projectSelectedInfo);
  }

  generateCommitsAndCollaboratorsList(projectSelectedInfo) {
    let cutProjectID = sessionStorage.getItem('project_selected').split(',')[1].slice(2) || ''

    // Getting commits list to populate projectsWindow
		db.ref(`users/${sessionStorage.getItem('access_token')}/projectCommits/${cutProjectID}`).on('value', (data) => {
      let commitsListArr = [];
      let commitsListArrParsed = [];

      // Defining this first to expand scope
      let collaboratorsIDArr = [];
      let collaboratorsDataArrParsed = [];

			for (var key in data.val()) {
				commitsListArr.push(data.val()[key] + ' | ' + key)
      }

      for (let i = 0; i < commitsListArr.length; i++) {
        let commitInfo = commitsListArr[i].split(' | ')
        commitsListArrParsed.push([commitInfo[1], commitInfo[0], commitInfo[4], commitInfo[3]])
      }

      // Grab collaborators info to populate projectsSidebar
      db.ref(`users/${sessionStorage.getItem('access_token')}/projectIDs/${cutProjectID}/Collaborators`).once('value', (collaboratorsData) => {
        collaboratorsIDArr = collaboratorsData.val().split(' | ')

      })
      .then(() => {
        let count = 0;
        while (count < collaboratorsIDArr.length) {
          db.ref(`users/${collaboratorsIDArr[count]}`).once('value', function(val) {
            collaboratorsDataArrParsed.push(val.val()['email'])
          })
          count++;
        }
      })
      .then(() => {

        //Toggles the availability of the project search bar off if project is selected
        if (this.state.projectName.length === 0) {
          $('.projectsSidebarSearchContainer').slideToggle(300)
          $('.projectsNavUtilitiesContainer').slideToggle(300)
        }

        this.setState({
          projectName: projectSelectedInfo,
          commitsListArr: commitsListArrParsed,
        })

        //SetTimeout because pushing to the collaborators arr has asynch dependence
        setTimeout(() => {
          this.setState({
            projectCollaboratorsArr: collaboratorsDataArrParsed
          })
          $('.projectsSidebarSelectedCollaboratorsInnerContainer').fadeToggle(600)
        }, 250)
      })
		})
  }

  goToStudioHome() {

    // Toggles project search bar back on and utilities off
    if (this.state.projectName.length !== 0) {
      $('.projectsNavUtilitiesContainer').slideToggle(300)
    }

    this.setState({
      projectName: '',
      commitsListArr: [],
      projectCollaboratorsIDArr: []
    })

    setTimeout(() => {
      $('.projectsSidebarSearchContainer').slideToggle(300)
      $('.projectsSidebarListContainer').fadeToggle(500)
    }, 100)
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
          <ProjectsSelectedSidebar reRender={this.reRenderProjectWindow} collaboratorsArr={this.state.projectCollaboratorsArr} projectName={this.state.projectName}/>
          <ProjectsWindow projectName={this.state.projectName} commitsListArr={this.state.commitsListArr} /> 
        </div>
      )
    }
  }
}

export default Projects;