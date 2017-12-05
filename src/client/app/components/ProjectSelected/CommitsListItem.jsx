import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

class CommitsListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
			commitMessage: '',
			commitDownload: ''
		};
	}
	
	componentDidMount() {
		console.log(this.props)

		let projectCommitInfo = this.props.projectInfo.split(' | ')

		this.setState({
			commitMessage: projectCommitInfo[1],
			commitDownload: projectCommitInfo[0]
		})
	}

  render() {
		console.log(this.state.commitDownload)
    return (
      <div>
				<div>{this.state.commitMessage}</div>
				<a href={this.state.commitDownload}>Open in Logic</a>
	    </div>
    )
  }
}

export default CommitsListItem;