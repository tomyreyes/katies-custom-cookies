import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar'
import HomeHeader from './components/HomeHeader'
import HomeMessage from './components/HomeMessage'
import About from './components/About'
import Footer from './components/Footer'
import MobileContact from './components/MobileContact';


class App extends Component {
	constructor() {
		super()
		this.state = {
			activeItem: 'home',
			openModal: false
		}
	}
	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name })
		if (name === 'Contact') {
			console.log('hi')
			this.setState({
				openModal: true
			})
		}
	}

	componentDidMount() {
		document.body.addEventListener('click', this.closeModal);
	}

	closeModal = () => {
		this.setState({
			openModal: false
		})
	}



	render() {
		const { activeItem, openModal } = this.state
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
				<MobileContact openModal={openModal} />
				<Footer handleItemClick={this.handleItemClick} activeItem={activeItem} openModal={openModal} />
			</div>
		);
	}
}

export default App;
