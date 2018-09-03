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
			formSuccess: null
		}
	}

	handleUserInput(e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = () => {
		const { fullName, email, message, } = this.state
		let emailValidation = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
		let error = false
		if (fullName === '') {
			this.setState({ nameError: true })
			error = true
		} else {
			this.setState({ nameError: false })
		}
		if (email === '' || emailValidation === null) {
			this.setState({ emailError: true })
			error = true
		} else {
			this.setState({ emailError: false })
		}
		if (message === '') {
			this.setState({ messageError: true })
			error = true
		} else {
			this.setState({ messageError: false })
		}
		if (error) {
			console.log('ERROR')
			this.setState({ formSuccess: false })
		} else {
			console.log('GOOD')
			this.setState({ formSuccess: true })
		}
		// axios.post('http://localhost:8080/send', {
		// 	fullName, email, phone, message
		// })
	}
	render() {
		const { fullName, email, phone, message, nameError, emailError, messageError, formSuccess } = this.state
		return (
			<Modal trigger={< Menu.Item name='contact' />} >
				<Modal.Header>Contact Me</Modal.Header>
				<Modal.Content>
					<Form>
						<Form.Field error={nameError}>
							<label>Full Name *</label> {nameError ? <span>Please Include Your Name</span> : null}
							<input value={fullName} name="fullName" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field error={emailError}>
							<label>Email *</label> {emailError ? <span>Please Include Your Email</span> : null}
							<input value={email} name="email" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field>
							<label>Phone Number</label>
							<input value={phone} name="phone" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Form.Field error={messageError}>
							<label>Message *</label> {messageError ? <span>Please Include A Message</span> : null}
							<textarea value={message} name="message" onChange={(e) => this.handleUserInput(e)} />
						</Form.Field>
						<Button color='blue' onClick={this.handleSubmit}>Submit</Button>
					</Form>
				</Modal.Content>
			</Modal >
		)
	}
}