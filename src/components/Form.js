import React, { Component } from 'react'
import FormValidator from './utils/FormValidator'

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
    }

    this.submitted = false
  }

  handleInputChange = event => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    console.log(event)
    const { email, password } = this.state
    const validation = this.validator.validate(this.state)
    this.setState({ validation })
    this.submitted = true
    // if (validation.isValid) {
    //   axios
    //     .post('http://localhost:5000/login', {
    //       email,
    //       password,
    //     })
    //     .then(response => {
    //       if (response.data.status === 200) {
    //         localStorage.setItem('jwt', response.data.token)
    //         this.setState({ user: response.data.email })
    //         return this.props.history.push('/')
    //       } else if (response.data.status === 400) {
    //         return this.setState({
    //           errorMessage: response.data.message,
    //         })
    //       } else return alert('Server Error')
    //     })
    //     .catch(error => {
    //       return alert(error)
    //     })
  }
  //   }

  render() {
    const { errorMessage } = this.state
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation
    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#">
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
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                    onClick={this.handleFormSubmit}
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
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
                <a href="mailto:katiescustomcookies@gmail.com?Subject=Cookie%20Order">
                  katiescustomcookies@gmail.com
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
