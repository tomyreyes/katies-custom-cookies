import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


export default class Cookies extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<NavBar />
				<h1>Cookies</h1>
				<Footer />
			</div>
		)
	}
}
