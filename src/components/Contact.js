import React, { Component } from 'react';
import { Button, Form, Menu, Modal } from 'semantic-ui-react';
import axios from 'axios';
export default class Contact extends Component {
	constructor() {
		super()
		this.state = {
			fullName: '',
			email: '',
			phone: '',
			message: '',
			nameError: false,
			emailError: false,
			messageError: false,
			disableSubmit: true,
		}
	}

	handleUserInput(e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}
	handleSubmit = () => {
		const { fullName, email, phone, message } = this.state
		axios.post('http://localhost:8080/send', {
			fullName, email, phone, message
		})
	}
	checkError = (e) => {
		const { fullName, email, message } = this.state
		const { name } = e.target
		let emailValidation = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
		let error = false
		if (name === 'fullName') {
			if (fullName === '') {
				this.setState({ nameError: true })
				error = true
			} else {
				this.setState({ nameError: false })
			}
		}
		if (name === 'email') {
			if (email === '' || emailValidation === null) {
				this.setState({ emailError: true })
				error = true
			} else {
				this.setState({ emailError: false })
			}
		}
		if (name === 'message') {
			if (message === '') {
				this.setState({ messageError: true })
				error = true
			} else {
				this.setState({ messageError: false })
			}
		}
		if (error) {
			this.setState({ disableSubmit: true })
		} else {
			this.setState({ disableSubmit: false })
		}
	}

	render() {
		const { fullName, email, phone, message, nameError, emailError, messageError, disableSubmit } = this.state
		return (
			<Modal trigger={< Menu.Item name='contact' />} >
				<Modal.Header>Contact Me</Modal.Header>
				<Modal.Content>
					<Form>
						<Form.Field error={nameError}>
							<label>Full Name</label>
							<input value={fullName} name="fullName" onBlur={(e) => this.checkError(e)} onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field error={emailError}>
							<label>Email</label>
							<input value={email} name="email" onBlur={(e) => this.checkError(e)} onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field>
							<label>Phone Number</label>
							<input value={phone} name="phone" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field error={messageError}>
							<label>Message</label>
							<textarea value={message} name="message" onBlur={(e) => this.checkError(e)} onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Button color='blue' disabled={disableSubmit} onClick={this.handleSubmit}>Submit</Button>
						{/* {formSuccess === true && <span>Message Sent - Thank You</span>}
						{formSuccess === false && <span> Please Double Check Your Information</span>} */}
					</Form>
				</Modal.Content>
			</Modal >
		)
	}
}