import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from './components/Home';
import Cookies from './components/Cookies';


class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/cookies" component={Cookies} />
				</Switch>
			</Router >
		)
	}
}

export default App;
