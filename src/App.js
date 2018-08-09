import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar'
import HomeHeader from './components/HomeHeader'
import { Segment } from 'semantic-ui-react'
class App extends Component {
	render() {
		return (
			<div>
				<Segment
					className="home-head"
				>
					<Navbar />
					<HomeHeader />
				</Segment>
				<h1>
					Parallax
				</h1>
				<h1>
					Message
				</h1>
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
