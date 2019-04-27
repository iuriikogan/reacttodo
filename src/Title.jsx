import React, {Component} from 'react'

class Title extends Component {

	// data
	state = {
		name: 'Task List'
	}

	// renders html
	render() {
		return (
			<h2>
				<span>{this.state.name}</span>
			</h2>
		)
	}

}

export default Title;
