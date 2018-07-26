import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => {
	return <div>こんにちは、坂本龍馬さん</div>;
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
