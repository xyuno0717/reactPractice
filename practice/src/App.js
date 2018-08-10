import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
	return (
	<React.Fragment>
	<div>こんにちは</div>
	<div>{props.name}さん</div>
	</React.Fragment>
	);
}

class App extends Component {
	render() {
		return (
			<div>
			<Hello name="坂本龍馬"/>
			<Hello name="西郷隆盛"/>
			<Hello name="勝海舟"/>
			</div>
		);
	}
}

export default App;
