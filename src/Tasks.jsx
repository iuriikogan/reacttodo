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

	// renders html
	render() {
		return (
			<ul>
				{this.state.tasks.map( (task) => <Task task={task} key={task._id}></Task> )}
			</ul>
		)
	}

}

export default Tasks;
