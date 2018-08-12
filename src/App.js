import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar'
import HomeHeader from './components/HomeHeader'
import HomeMessage from './components/HomeMessage'
import About from './components/About'
class App extends Component {
	render() {
		return (
			<div className="App">
				<div
					className="home-head"
				>
					<Navbar />
					<HomeHeader />
				</div>
				<HomeMessage />
				<About />
				<h1>
					Footer
				</h1>
			</div>
		);
	}
}

export default App;
