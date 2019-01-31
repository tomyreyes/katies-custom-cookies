import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/images/katieslogo.png'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo" aria-label="Home">
      <img src={logo} alt="Katie's Custom Cookies logo" />
    </Link>
    <nav>
      <a
        aria-label="menu"
        className="menu-link"
        onClick={props.onToggleMenu}
        href="javascript:;"
      >
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
