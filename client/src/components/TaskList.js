import React, { Component } from 'react'
import axios from 'axios';
import TaskComponent from './Task';
import TaskFormComponent from './TaskForm';

export default class TaskListComponent extends Component {
  state = {
    data: [],
    isShowForm: false
  }

  onUpdateTask = (_id) => {
    axios.post('http://localhost:3030/api/task', { _id })
    .then(({ data }) => this.setState({ data: data.tasks }));
  }

  onDeleteTask = (_id) => {
    axios.post(`http://localhost:3030/api/task/${_id}`)
    .then(({ data }) => this.setState({ data: data.tasks }));
  }

  toggleShow = () => {
    this.setState({isShowForm: !this.state.isShowForm});
  }

  onAddTask = (name) => {
    axios.post(`http://localhost:3030/api/newtask`, { name })
    .then(({ data }) => this.setState({ data: data.tasks }));
  }

  render() {
    return (
      <React.Fragment>
        { this.state.isShowForm ? 
          <TaskFormComponent addTask={this.onAddTask} toggleShow={this.toggleShow} /> :
          <div className="row">
            <button className="btn btn-primary" onClick={this.toggleShow}>Add New Task</button>
            <hr />
            <h2 className="display-4">Task List App</h2>
          </div> 
        }
        
        { this.state.data.map(e => (
          <TaskComponent {...e} key={e._id} 
            updateTask={this.onUpdateTask.bind(this, e._id)} 
            deleteTask={this.onDeleteTask.bind(this, e._id)} 
          />
        )) }
      </React.Fragment>
    )
  };

  componentDidMount() {
    axios.get('http://localhost:3030/api/task')
    .then(({ data }) => this.setState({ data: data.tasks }));
  }
}
