import React, { Component } from 'react'
import { Menu, Responsive } from 'semantic-ui-react'

export default class NavBar extends Component {
	constructor() {
		super()
		this.state = {
			activeItem: 'home'
		}
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })


	renderDesktopNav = () => {
		const { activeItem } = this.state
		return (
			<Menu pointing secondary>
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={this.handleItemClick}
					position={"right"}
				/>
				<Menu.Item
					name='gallery'
					active={activeItem === 'gallery'}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name='prices'
					active={activeItem === 'prices'}
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
				<Responsive minWidth={768}>
					{this.renderDesktopNav()}
				</Responsive>
				{/* <Responsive maxWith={767}>

				</Responsive> */}
			</nav>
		)
	}
}
