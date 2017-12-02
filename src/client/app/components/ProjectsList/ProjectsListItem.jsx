import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import { firebaseRef } from '../../Firebase/firebase.js'
import * as firebase from 'firebase'
const db = firebase.database()

class ProjectsListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
    this.goToProjectSelected = this.goToProjectSelected.bind(this)
  }

  goToProjectSelected() {
      sessionStorage.setItem('project_selected', this.props.projectInfo)
      this.props.projectsListProps.history.push('/ProjectSelected')
  }

  render() {
    return (
      <div className="projectsListItemContainer" onClick={this.goToProjectSelected}>
        {this.props.projectInfo[0]}
      </div>
    )
  }
}

export default ProjectsListItem;