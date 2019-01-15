import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Katie's Custom Cookies"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="about-me">
            <div className="inner">
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>
                I am a cookie making enthusiast based in Maple Ridge, British
                Columbia. As a child, my love and skills in baking developed
                through the influence of my grandma and mom. I have taught
                myself to decorate and am often inspired to create beautifully
                designed cookies.
              </p>
            </div>
          </section>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Cookies</h3>
                <p>View my latest creations and prices</p>
              </header>
              <Link to="/cookies" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Contact Me</h3>
                <p>Make an order today!</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
