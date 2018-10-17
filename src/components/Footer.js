import React, { Component } from 'react';
import { Menu, Icon, Responsive } from 'semantic-ui-react';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
	renderDesktopFooter = () => {
		return (
			<Menu pointing secondary className="footer-nav">
				<Menu.Item
					as={NavLink}
					to='/'
					name='home'
				/>
				<Menu.Item
					as={NavLink}
					to='/cookies'
					name='cookies'
				/>
				<Contact />
			</Menu>
		)
	}

	renderMobileFooter = () => {
		return (
			<Menu icon='labeled' secondary className="footer-nav mobile-nav">
				<Menu.Item
					as={NavLink}
					to='/'
					name='home'
				>
					<Icon name="home" />
					Home
				</Menu.Item>
				<Menu.Item
					as={NavLink}
					to='/cookies'
					name='cookies'
				>
					<Icon name="camera" />
					Cookies
				</Menu.Item>
				<Menu.Item
					as={NavLink}
					to="/contact"
					name='Contact'
				>
					<Icon name="mail" />
					Contact
				</Menu.Item>
			</Menu>
		)
	}
	render() {
		return (
			<footer>
				<Responsive minWidth={768}>
					{this.renderDesktopFooter()}
				</Responsive>
				<Responsive maxWidth={767}>
					{this.renderMobileFooter()}
				</Responsive>
			</footer>
		)
	}
}


