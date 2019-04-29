import React, {Component} from 'react'
import Task from './Task'

class Tasks extends Component {

	// data
	state = {
		tasks: [
			{
				_id: '1',
				name: 'Buy groceries',
				done: false
			},
			{
				_id: '2',
				name: 'Wash car',
				done: true
			},
			{
				_id: '3',
				name: 'Go to school',
				done: false
			}
		]
	}

	// functions
	toggleTask = (_id) => {
		alert(_id)
	}

	deleteTask = (_id) => {
		alert('deleted' + _id)
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
