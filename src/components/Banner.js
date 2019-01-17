import React from 'react'
import Img from 'gatsby-image'

const Banner = props => (
  <section id="banner" className="major">
    <Img
      css={{ top: 0, left: 0, right: 0, bottom: 0 }}
      style={{ position: `absolute` }}
      fluid={props.imagesrc}
    />
    <div className="inner">
      <header className="major">
        <h1>Do you need cookies?</h1>
      </header>
      <div className="content">
        <p>
          Well, who doesn't? I make custom decorated sugar cookies
          <br />
          with royal icing.
        </p>
        <ul className="actions">
          <li>
            <a href="/cookies" className="button next scrolly">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
