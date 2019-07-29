import React, { Component } from "react";

import TodoHeader from "../headers/TodoHeader";

class OneTodo extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(event) {
    const value = event.target.value;
    const id = this.props.todoInfo.id;
    this.props.todoClicked(id, value);
  }
  render() {
    return (
      <section className="container">
        <TodoHeader stricken={this.props.todoInfo.done}>
          {this.props.todoInfo.title}
        </TodoHeader>
        <div className="row">
          <span className="col-4">
            <button
              value="done"
              onClick={this.onClickHandler}
              className="btn btn-outline-success"
            >
              done
            </button>
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

export default OneTodo;
