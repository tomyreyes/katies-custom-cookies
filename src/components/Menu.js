import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/cookies" aria-label="Cookies">
            Cookies
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/contact" aria-label="Contact">
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
    <a
      className="close"
      onClick={props.onToggleMenu}
      href="javascript:;"
      aria-label="Menu"
    >
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
