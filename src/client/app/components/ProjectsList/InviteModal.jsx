import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import { Button, Modal } from 'react-bootstrap';

class InviteModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
			email: ''
		};
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.submitEmail = this.submitEmail.bind(this)
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	}

	submitEmail() {
		this.props.emailInviteSubmit(this.state.email)
	}

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.toggleModal}>
				<Modal.Header closeButton>
					<Modal.Title></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="inviteModalBody">
						Email an Invite
					</div>
					<input type="text" onChange={this.handleEmailChange}/> 
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="info" onClick={this.submitEmail}>Invite</Button>
					<Button bsStyle="danger" onClick={this.props.toggleModal}>Close</Button>
				</Modal.Footer>
			</Modal>
    )
  }
}

export default InviteModal;