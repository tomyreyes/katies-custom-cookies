import React, { Component } from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'

export default class MobileContact extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			phone: '',
			message: '',
			nameError: false,
			emailError: false,
			messageError: false,
			formSuccess: null
		}
	}

	handleUserInput(e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}
	sendMessage = () => {
		const { name, email, message } = this.state
		let error = false
		let emailValidation = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
		if (name === '') {
			error = true
			this.setState({ nameError: true })
		} else {
			this.setState({ nameError: false })
		}
		if (email === '' || emailValidation === null) {
			error = true
			this.setState({ emailError: true })
		} else {
			this.setState({ emailError: false })
		}
		if (message === '') {
			error = true
			this.setState({ messageError: true })
		} else {
			this.setState({ messageError: false })
		}
		if (error) {
			this.setState({ formSuccess: false })
		} else {
			this.setState({ formSuccess: true })
		}
	}

	render() {
		const { name, email, phone, message, nameError, emailError, messageError, formSuccess } = this.state
		return (
			<Modal open={this.props.openModal}>
				<Modal.Header>Contact Me</Modal.Header>
				<Modal.Content>
					<Form>
						<Form.Field error={nameError}>
							<label>Full Name</label>
							<input value={name} name="name" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field error={emailError}>
							<label>Email</label>
							<input value={email} name="email" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field>
							<label>Phone Number</label>
							<input value={phone} name="phone" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field error={messageError}>
							<label>Message</label>
							<textarea value={message} name="message" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Button color='blue' onClick={this.sendMessage}>Submit</Button>{formSuccess === true ? <span> Message Sent - Thank You</span> : ''}
						{formSuccess === false ? <span> Please Double Check YourInformation</span> : ''}
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}