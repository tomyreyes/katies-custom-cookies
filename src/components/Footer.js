import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="#" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cookies" className="logo">
            Cookies
          </Link>
        </li>
        <li>
          <Link to="/contact" className="logo">
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
