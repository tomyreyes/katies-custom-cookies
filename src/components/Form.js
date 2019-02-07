import React, { Component } from 'react'
import FormValidator from './utils/FormValidator'
import fetch from 'node-fetch'

class Form extends Component {
  constructor() {
    super()
    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please provide me your name.',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'That is not a valid email.',
      },
      {
        field: 'message',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please leave a message.',
      },
    ])

    this.state = {
      name: '',
      email: '',
      message: '',
      validation: this.validator.valid(),
      errorMessage: null,
      messageSuccess: false,
    }

    this.submitted = false
  }

  handleInputChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  handleFormSubmit = event => {
    event.preventDefault()
    const { name, email, message } = this.state
    const validation = this.validator.validate(this.state)
    this.setState({ validation })
    this.submitted = true
    if (validation.isValid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', name, email, message }),
      })
        .then(() => {
          this.setState({
            messageSuccess: true,
            name: '',
            email: '',
            message: '',
          })
        })
        .catch(error => alert(error))

      event.preventDefault()
    }
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation

    const { messageSuccess } = this.state
    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleFormSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="field half first">
                <label htmlFor="name">
                  Name <span className="required-field">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.handleInputChange}
                />
                <span className="error">{validation.name.message}</span>
              </div>
              <div className="field half">
                <label htmlFor="email">
                  Email <span className="required-field">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleInputChange}
                />
                <span className="error">{validation.email.message}</span>
              </div>
              <div className="field">
                <label htmlFor="message">
                  Message <span className="required-field">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  onChange={this.handleInputChange}
                />
                <span className="error">{validation.message.message}</span>
              </div>
              <ul className="actions">
                <li>
                  <button type="submit" className="special">
                    Send Message
                  </button>
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
            {messageSuccess && (
              <h4 className="success-message">
                Message Received - I will get back to you as soon as I can!
              </h4>
            )}
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-info-circle" />
                <h3>Make an Order</h3>
                <span>
                  If you would like to make an order, please use the form or
                  send me an email directly. Thank you!
                </span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope" />
                <h3>Email</h3>
                <a href="mailto:kdscustomcookies@gmail.com?Subject=Cookie%20Order">
                  kdscustomcookies@gmail.com
                </a>
              </div>
            </section>
          </section>
        </div>
      </section>
    )
  }
}

export default Form
