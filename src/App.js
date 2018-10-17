import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from './components/Home';
import Cookies from './components/Cookies';
import MobileContact from './components/MobileContact'


class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/cookies" component={Cookies} />
					<Route path="/contact" component={MobileContact} />
				</Switch>
			</Router >
		)
	}
}

export default App;
