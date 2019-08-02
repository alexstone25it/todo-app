import React, { Component } from "react";

import TaskHeader from "../../headers/TaskHeader";

class OneTask extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(event) {
    const value = event.target.value;
    const id = this.props.taskInfo.id;
    this.props.taskClicked(id, value);
  }
  render() {
    return (
      <section className="container">
        <TaskHeader stricken={this.props.taskInfo.done}>
          {this.props.taskInfo.title}
        </TaskHeader>
        <div className="row">
          <span className="col-4">
            {!this.props.taskInfo.done ? (
              <button
                value="done"
                onClick={this.onClickHandler}
                className="btn btn-outline-success"
              >
                done
              </button>
            ) : null}
          </span>
          <span className="col-4">
            <button
              value="edit"
              onClick={this.onClickHandler}
              className="btn btn-outline-warning"
            >
              edit
            </button>
          </span>
          <span className="col-4">
            <button
              value="delete"
              onClick={this.onClickHandler}
              className="btn btn-outline-danger"
            >
              delete
            </button>
          </span>
        </div>
      </section>
    );
  }
}

export default OneTask;
