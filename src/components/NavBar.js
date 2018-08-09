import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavBar extends Component {
	constructor() {
		super()
		this.state = {
			activeItem: 'home'
		}
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	renderNavBar = () => {
		const { activeItem } = this.state
		return (
			<Menu pointing secondary>
				<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
				<Menu.Item
					name='gallery'
					active={activeItem === 'gallery'}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name='contact'
					active={activeItem === 'contact'}
					onClick={this.handleItemClick}
				/>
			</Menu>
		)
	}
	render() {
		return (
			<nav>
				{this.renderNavBar()}
			</nav>
		)
	}
}
