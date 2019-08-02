import React, { Component } from "react";

import OneTask from "./sharedComponents/OneTask";

const uuidv4 = require("uuid/v4");

class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: "1", title: "Make apps to fill portfolio", done: false },
        { id: "2", title: "Make 'em spiffy and awesome!", done: false },
        { id: "3", title: "Make portfolio", done: false }
      ],
      isShowing: false
    };
    this.toggleIsShowing = this.toggleIsShowing.bind(this);
    this.taskClicked = this.taskClicked.bind(this);
  }
  toggleIsShowing() {
    this.setState(prevState => ({
      ...prevState,
      isShowing: !prevState.isShowing
    }));
  }
  taskClicked(id, value) {
    switch (value) {
      case "done":
        this.clickDone(id);
        break;
      case "edit":
        this.clickEdit(id);
        break;
      case "delete":
        this.clickDelete(id);
        break;
      default:
        console.log("default");
    }
  }
  clickDone(id) {
    this.setState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(task =>
        task.id === id ? (task.done = true) : task
      )
    }));
    console.log("add in an undo!!!");
  }
  clickEdit(id) {
    console.log(id, "this is edit");
  }
  clickDelete(id) {
    this.setState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(task => (task.id !== id ? task : null))
    }));
  }
  render() {
    const closed = { maxHeight: "0", overflow: "hidden" };
    const open = { display: "flex", overflow: "visible" };
    const taskList = this.state.tasks.map(task => (
      <OneTask key={uuidv4()} taskInfo={task} taskClicked={this.taskClicked} />
    ));
    return (
      <div className="accordion">
        <div className="card">
          <div className="card-header">
            <header>
              <h3>
                <button className="btn" onClick={this.toggleIsShowing}>
                  Tasks
                </button>
                <span className="badge badge-pill badge-danger">4</span>
              </h3>
            </header>
          </div>
          <div style={this.state.isShowing ? open : closed}>
            <div className="card-body">
              <ul>{taskList}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskComponent;
