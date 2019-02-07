import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import ContactBanner from '../components/ContactBanner'
import Form from '../components/Form'

export default function Contact() {
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
