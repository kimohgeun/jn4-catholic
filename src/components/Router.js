import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../routes/Home';
import Notice from '../routes/Notice';

export default () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/notice" component={Notice} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
