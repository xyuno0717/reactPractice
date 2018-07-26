import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => {
	return (
	<React.Fragment>
	<div>こんにちは</div>
	<div>坂本龍馬さん</div>
	</React.Fragment>
	);
}

class App extends Component {
	render() {
		return (
			<div>
			<Hello />
			<Hello />
			<Hello />
			</div>
		);
	}
}

export default App;
