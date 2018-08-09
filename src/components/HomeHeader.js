import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class HomeHeader extends Component {
	render() {
		return (
			<Container>
				<Header
					as="h1"
					textAlign={"center"}
				>
					Welcome
				</Header>
			</Container>
		)
	}
}