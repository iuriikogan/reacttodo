import React, {Component} from 'react'
import styles from './Task.css.js'

class TaskCreate extends Component {

	// data
	state = {
		task: this.props.task
    }
    
    //functions

    TaskCreate = (e) => {
        e.preventDefault();
        console.log('hello');
    }
	// renders html
	render() {
		return (
            <form onSubmit={ (e) => this.TaskCreate(e)}>
            <div className="input-group create-task">
            <form className="input-group-append">
                <input className="form-control" placeholder="New Task"></input>
                <button className="create-task-btn btn btn-success btn-sm">Add</button>
            </form>
            </div>
            </form>
		)
	}
}

export default TaskCreate;
