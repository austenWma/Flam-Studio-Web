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

		this.commitDownload = this.commitDownload.bind(this)
	}
	
	componentDidMount() {
		console.log(this.props)

		let projectCommitInfo = this.props.projectInfo.split(' | ')

		this.setState({
			commitMessage: projectCommitInfo[1],
			commitDownload: projectCommitInfo[0]
		})
	}

	commitDownload() {
		console.log('COMMIT DOWNLOAD')
	}

  render() {
		console.log(this.state.commitDownload)
    return (
      <div>
				<div>{this.state.commitMessage}</div>
				<a onClick={this.commitDownload}>Open in Logic</a>
	    </div>
    )
  }
}

export default CommitsListItem;