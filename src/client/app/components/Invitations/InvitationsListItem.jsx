import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

class InvitationsListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
			invitationDate: '',
			invitationProjectName: '',
			invitationID: ''
    };
	}
	
	componentDidMount() {
		console.log(this.props.invitationInfo)
	}

  render() {
    return (
      <div className="invitationsListItemContainer">
				{this.props.invitationInfo[1]}
      </div>
    )
  }
}

export default InvitationsListItem;