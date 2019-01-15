import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ContactBanner from '../components/ContactBanner'
import Form from '../components/Form'

class Contact extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Cookies</title>
          <meta name="description" content="pictures and prices" />
        </Helmet>
        <ContactBanner />
        <Form />
      </Layout>
    )
  }
}

export default Contact
