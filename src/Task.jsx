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
			<li>
				<span style={styles.span}>{this.state.task.name}</span>
			</li>
		)
	}

}

export default Task;
