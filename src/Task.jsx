import React, {Component} from 'react'
import styles from './Task.css.js'

class Task extends Component {

	// data
	state = {
		task: {
			title: 'Buy fruits'
		}
	}

	// renders html
	render() {
		return (
			<li>
				<span style={styles.span}>{this.state.task.title}</span>
			</li>
		)
	}

}

export default Task;
