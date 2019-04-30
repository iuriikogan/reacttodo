import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Tasks from './Tasks';
import Title from './Title';
import TaskCreate from './TaskCreate';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Title></Title>
				<TaskCreate></TaskCreate>
				<Tasks></Tasks>
			</div>
		)
	}
}

export default App;
