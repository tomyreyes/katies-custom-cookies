import React, { Component } from 'react';
import '../App.css';
import Navbar from './NavBar';
import HomeHeader from './HomeHeader';
import HomeMessage from './HomeMessage';
import About from './About';
import Footer from './Footer';
import MobileContact from './MobileContact';


class Home extends Component {
	constructor() {
		super()
		this.state = {
			activeItem: 'home',
			openModal: false
		}
		this.timeOutId = null;
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

	onBlurHandler = () => {
		this.timeOutId = setTimeout(() => {
			this.setState({
				openModal: false
			});
		});
	}

	// If a child receives focus, do not close the popover.
	onFocusHandler = () => {
		clearTimeout(this.timeOutId);
	}

	render() {
		const { activeItem, openModal } = this.state
		return (
			<div className="App"
				onBlur={this.onBlurHandler}
				onFocus={this.onFocusHandler}
			>
				<div
					className="home-head"
				>
					<Navbar />
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

export default Home;
