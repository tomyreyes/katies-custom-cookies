import React, { Component } from 'react'
import { Image, Menu, Responsive } from 'semantic-ui-react'
import logo from '../images/katieslogo.png'

export default class NavBar extends Component {
	renderDesktopNav = () => {
		const { activeItem, handleItemClick } = this.props
		return (
			<Menu pointing secondary>
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={handleItemClick}
				>
					<Image src={logo} />
				</Menu.Item>
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={handleItemClick}
					position={"right"}
				/>
				<Menu.Item
					name='gallery'
					active={activeItem === 'gallery'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='prices'
					active={activeItem === 'prices'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='contact'
					active={activeItem === 'contact'}
					onClick={handleItemClick}
				/>
			</Menu>
		)
	}

	renderMobileNav = () => {
		const { activeItem, handleItemClick } = this.props
		return (
			<Menu pointing secondary id="mobile-nav">
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={handleItemClick}
				>
					<Image src={logo} />
				</Menu.Item>
			</Menu>
		)
	}
	render() {
		return (
			<nav>
				<Responsive minWidth={768}>
					{this.renderDesktopNav()}
				</Responsive>
				<Responsive maxWidth={767}>
					{this.renderMobileNav()}
				</Responsive>
			</nav>
		)
	}
}
