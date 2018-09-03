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
			openModal: false
		}
		this.timeOutId = null;
	}
	onBlurHandler = () => {
		this.timeOutId = setTimeout(() => {
			this.setState({
				openModal: false
			});
		});
	}
	onFocusHandler = () => {
		clearTimeout(this.timeOutId);
	}
	render() {
		const { openModal } = this.state
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
				<Footer openModal={openModal} />
			</div>
		);
	}
}


export default Home;
