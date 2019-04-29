import React, {Component} from 'react'
import styles from './Task.css.js'

class Task extends Component {

	// data
	state = {
		task: this.props.task
	}

	// functions
	// test = (_id) => alert(_id)


	// renders html
	render() {
		return (
			<li className="list-group-item">
				<button className="btn btn-primary btn-sm mr-3" onClick={() => this.props.toggleTask(this.state.task._id)}>-</button>
				<span className={this.state.task.done ? 'done' : ''} style={styles.span}>{this.state.task.name}</span>
			</li>
		)
	}

}

export default Task;
