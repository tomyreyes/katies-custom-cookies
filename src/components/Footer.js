import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.instagram.com/katiescustomcookies/"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <Link to="/" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cookies" className="logo" aria-label="Cookies">
            Cookies
          </Link>
        </li>
        <li>
          <Link to="/contact" className="logo" aria-label="Contact">
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
