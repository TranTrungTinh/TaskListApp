import React, { Component } from 'react'

export default class TaskFormComponent extends Component {

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  addTask = () => {
    const name = this.nameInput.current.value;
    if(!name) return;
    this.props.addTask(name);
    this.nameInput.current.value = '';
    this.props.toggleShow();
  }

  toggleFrom = () => {
    this.props.toggleShow();
  }

  render() {
    return (
      <div className="row">
        <div className="form-group" style={{ width: '200px', marginTop: '20px' }}>
          <input
              placeholder="Name"
              className="form-control"
              ref={this.nameInput}
          />
          <br />
          <button 
            className="btn btn-success"
            onClick={this.addTask}
          >
              Add task
          </button>
          <button
              className="btn btn-danger"
              onClick={this.toggleFrom}
          >
              Cancel
          </button>
        </div>
        <hr/>
        <h2 className="display-4">Task List App</h2>
      </div>
    )
  }
}
