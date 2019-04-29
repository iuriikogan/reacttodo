import React, {Component} from 'react';
import './App.css';
import Tasks from './Tasks';
import Title from './Title';

class App extends Component {
	render() {
		return (
			<div>
				<Title></Title>
				<Tasks></Tasks>
			</div>
		)
	}
}

export default App;
