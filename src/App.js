import React, {Component} from 'react';
import axios from 'axios/dist/axios.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Tasks from './Tasks';
import Title from './Title';
import TaskCreate from './TaskCreate';

class App extends Component {

	state = {
		newTask: {}
	}

	createTask = (e, name) => {
		e.preventDefault()
		axios.post('http://localhost:3220/api/tasks/', {
			name: name
		}).then( (response) => {
			this.setState({
				newTask: response.data
			})
		}).catch( (error) => {
			console.log(error);
		})
		
    }
	
	
	render() {
		return (
			<div className="container">
				<Title></Title>
				<TaskCreate createTask={this.createTask}></TaskCreate>
				<Tasks newTask={this.state.newTask}></Tasks>
			</div>
		)
	}
}

export default App;
