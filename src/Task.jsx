import React, {Component} from 'react'
import styles from './Task.css.js'

class Task extends Component {

	// data
	state = {
		task: this.props.task
	}

	// renders html
	render() {
		return (
			<li className="list-group-item">
				<button className="btn btn-primary btn-sm mr-3" onClick={() => this.props.toggleTask(this.state.task._id)}>-</button>
				<span className={this.state.task.done ? 'done' : ''} style={styles.span}>{this.state.task.name}</span>
				<button className="btn btn-danger btn-sm align-right" onClick={() => this.props.deleteTask(this.state.task._id)}>x</button>
			</li>
		)
	}

}

export default Task;
