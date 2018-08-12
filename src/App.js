import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar'
import HomeHeader from './components/HomeHeader'
import HomeMessage from './components/HomeMessage'
import About from './components/About'
import Footer from './components/Footer'
class App extends Component {
	constructor() {
		super()
		this.state = {
			activeItem: 'home'
		}
	}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	render() {
		const { activeItem } = this.state
		return (
			<div className="App">
				<div
					className="home-head"
				>
					<Navbar handleItemClick={this.handleItemClick} activeItem={activeItem} />
					<HomeHeader />
				</div>
				<HomeMessage />
				<About />
				<Footer handleItemClick={this.handleItemClick} activeItem={activeItem} />
			</div>
		);
	}
}

export default App;
