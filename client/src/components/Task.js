import React, { Component } from 'react'

export default class TaskComponent extends Component {

  updateStatus = () => {
    this.props.updateTask();
  }

  deleteStatus = () => {
    this.props.deleteTask();
  }

  render() {
    const { _id, name, status } = this.props;
    return (
      <div className="row" key={_id}>
        <h3 className="text-success display-4">
          { status ? '-------------' : name }
        </h3>
        <div>
        <button
            className={status ? 'btn btn-success mr-3' : 'btn btn-danger mr-3'}
            onClick={this.updateStatus}
        >
            { status ? 'Hoàn thành' : 'Chưa hoàn thành' }
        </button>
        <button
            className="btn btn-warning"
            onClick={this.deleteStatus}
        >
            Remove
        </button>
        </div>
      </div>  
    )
  }
}



