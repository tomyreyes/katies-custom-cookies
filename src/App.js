import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar'
import HomeHeader from './components/HomeHeader'
import HomeMessage from './components/HomeMessage'
import { Segment } from 'semantic-ui-react'
class App extends Component {
	render() {
		return (
			<div>
				<div
					className="home-head"
				>
					<Navbar />
					<HomeHeader />
				</div>
				<HomeMessage />
				<h1>
					About
				</h1>
				<h1>
					Footer
				</h1>
			</div>
		);
	}
}

export default App;
