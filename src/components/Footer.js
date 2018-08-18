import React, { Component } from 'react'
import { Menu, Icon, Responsive } from 'semantic-ui-react'
import Contact from './Contact'

export default class Footer extends Component {

	renderDesktopFooter = () => {
		const { activeItem, handleItemClick } = this.props
		return (
			<Menu pointing secondary className="footer-nav">
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='cookies'
					active={activeItem === 'cookies'}
					onClick={handleItemClick}
				/>
				<Contact />
			</Menu>
		)
	}

	renderMobileFooter = () => {
		const { activeItem, handleItemClick } = this.props
		return (
			<Menu icon='labeled' secondary className="footer-nav mobile-nav">
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					// position={"right"}
					onClick={handleItemClick}
				>
					<Icon name="home" />
					Home
				</Menu.Item>
				<Menu.Item
					name='cookies'
					active={activeItem === 'cookies'}
					onClick={handleItemClick}
				>
					<Icon name="cookie" />
					Gallery
				</Menu.Item>
				<Menu.Item
					name='Contact'
					active={activeItem === 'Contact'}
					onClick={handleItemClick}
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