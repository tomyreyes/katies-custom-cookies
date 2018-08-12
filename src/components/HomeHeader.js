import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class HomeHeader extends Component {
	render() {
		return (
			<Container>
				<Header
					className="header-msg"
					as="h1"
					textAlign={"center"}
				>
					Katies Custom Cookies
				</Header>
			</Container>
		)
	}
}