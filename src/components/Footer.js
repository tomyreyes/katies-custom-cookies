import React, { Component } from 'react'
import { Menu, Icon, Responsive, Segment } from 'semantic-ui-react'


export default class Footer extends Component {

	renderDesktopFooter = () => {
		const { activeItem, handleItemClick } = this.props
		return (
			<Menu pointing secondary className="footer-nav">
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					// position={"right"}
					onClick={handleItemClick}
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

	renderMobileFooter = () => {
		const { activeItem, handleItemClick } = this.props
		return (
			<Menu icon='labeled' secondary className="footer-nav">
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
					name='gallery'
					active={activeItem === 'gallery'}
					onClick={handleItemClick}
				>
					<Icon name="camera" />
					Gallery
				</Menu.Item>
				<Menu.Item
					name='prices'
					active={activeItem === 'prices'}
					onClick={handleItemClick}
				>
					<Icon name="dollar sign" />
					Prices
				</Menu.Item>
				<Menu.Item
					name='contact'
					active={activeItem === 'contact'}
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