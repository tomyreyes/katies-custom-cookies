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
			formSuccess: null,
			newContactMessage: false
		}
	}

	handleUserInput(e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = () => {
		const { fullName, email, message, newContactMessage } = this.state
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
			this.setState({ formSuccess: true, newContactMessage: false })
		}
		// axios.post('http://localhost:8080/send', {
		// 	fullName, email, phone, message
		// })
	}
	createNew = () => {
		this.setState({
			fullName: '',
			email: '',
			phone: '',
			message: '',
			newContactMessage: true,
			formSuccess: false
		})
	}
	render() {
		const { fullName, email, phone, message, nameError, emailError, messageError, formSuccess, newContactMessage } = this.state
		return (
			<Modal trigger={< Menu.Item name='contact' />} >
				<Modal.Header>Contact Me</Modal.Header>
				{!formSuccess || newContactMessage ?
					<Modal.Content>
						<Form>
							<Form.Field error={nameError}>
								<label>Full Name </label><span className="required"> *</span>
								{nameError ? <div className="required">Please Include Your Name</div> : null}
								<input value={fullName} name="fullName" onChange={(e) => this.handleUserInput(e)} />
							</Form.Field>
							<Form.Field error={emailError}>
								<label>Email </label> <span className="required"> *</span>{
									emailError ? <div className="required">Please Include Your Email</div> : null}
								<input value={email} name="email" onChange={(e) => this.handleUserInput(e)} />
							</Form.Field>
							<Form.Field>
								<label>Phone Number</label>
								<input value={phone} name="phone" onChange={(e) => this.handleUserInput(e)} />
							</Form.Field>
							<Form.Field error={messageError}>
								<label>Message </label><span className="required"> *</span>
								{messageError ? <div className="required">Please Include A Message</div> : null}
								<textarea value={message} name="message" onChange={(e) => this.handleUserInput(e)} />
							</Form.Field>
							<Button color='blue' onClick={this.handleSubmit}>Submit</Button>
						</Form>
					</Modal.Content>
					: <div className="form-success"><h2>Message Sent</h2>
						<h3>I will get back to you by email as soon as I can! :)</h3>
						<Button onClick={this.createNew}>New Message?</Button>
					</div>
				}
			</Modal >
		)
	}
}