import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

export default class HomeMessage extends Component {
	render() {
		return (
			<section className="text-block">
				<Container>
					<h2>
						Are you in need of custom cookies?
				</h2>
					<p>
						I make custom decorated sugar cookies with royal icing for any special occasion.
						You choose the theme and I design the cookies. Make sure to view my gallery to see my most recent orders.
				</p>
				</Container>
			</section>
		)
	}
}