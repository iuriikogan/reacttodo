import React, {Component} from 'react'
import axios from 'axios/dist/axios.min.js';
import Task from './Task'


class Tasks extends Component {

	
	// data
	state = {
		tasks: [
		]
	}
	componentDidMount() {axios.get('http://localhost:3220/api/tasks')
	.then( (response) => {
		let tasks = response.data
		this.setState({tasks})
	})
	.catch( (error) => {
		console.log(error);
	})
	}


	// functions
	toggleTask = (_id) => {
		let tasks = this.state.tasks
		let task = tasks.find( (task) => task._id === _id )
		task.done = !task.done
		this.setState({tasks}) // set tasks to this.state.tasks
		axios.patch('http://localhost:3220/api/tasks/' + _id, task)
	}


	deleteTask = (_id) => {
		let tasks = this.state.tasks
		tasks = tasks.filter( (task) => task._id !== _id )
		this.setState({tasks})
		axios.delete('http://localhost:3220/api/tasks/' + _id)
	
	}


	// renders html
	render() {
		return (
			<ul className="list-group">
				{this.state.tasks.map( (task) => <Task task={task} toggleTask={this.toggleTask} deleteTask={this.deleteTask} key={task._id}></Task> )}
			</ul>
		)
	}

}

export default Tasks;
