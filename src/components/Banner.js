import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
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
