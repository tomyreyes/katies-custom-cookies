import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class HomeMessage extends Component {
	render() {
		return (
			<Container>
				<Header as="h1">
					Are you in need of custom cookies?
				</Header>
				I make custom decorated sugar cookies with royal icing for any special occasion.
				You choose the theme and I design the cookies. Make sure to view my gallery to see my most recent orders.
			</Container>
		)
	}
}