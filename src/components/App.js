import React, { Component } from 'react';
import GlobalStyle from '../GlobalStyle';
import Router from './Router';

class App extends Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<Router/>
			</>
		);
	}
}

export default App;
