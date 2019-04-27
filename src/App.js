import React, {Component} from 'react';
import './App.css';
import Task from './Task';
import Title from './Title';

class App extends Component {
	render() {
		return (
			<div>
				<Title></Title>
				<Task></Task>
			</div>
		)
	}
}

export default App;
