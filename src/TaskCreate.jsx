import React, {Component} from 'react'


class TaskCreate extends Component {

	// data
	state = {
		name: ''
    }
    
    //functions

    updateName = (e) => {

        this.setState({
            name: e.target.value
        })
    }

    clearName = () => {
		this.setState({name: ''})
	}


	// renders html
	render() {
		return (
            <form onSubmit={ (e) => {
                this.props.createTask(e, this.state.name);
                this.clearName()
            } }>
            <div className="input-group mb-2">
                <input placeholder="New Task..." className="form-control" value={this.state.name} onChange={this.updateName} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-success btn-sm">Add</button>
                </div>
            </div>
        </form>

		)
	}
}

export default TaskCreate;
