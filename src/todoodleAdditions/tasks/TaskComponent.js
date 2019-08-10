import React, { Component } from "react";
import AccordionWrapper from "../../shared/accordion/AccordionWrapper";
import Task from "./Task";

const uuid = require("uuid/v4");

class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: "1", title: "Make apps to fill portfolio", done: false },
        { id: "2", title: "Make spiffy and awesome!", done: false },
        { id: "3", title: "Make portfolio", done: false }
      ],
      accordionOpen: false
    };
    this.toggleAccordionHandler = this.toggleAccordionHandler.bind(this);
    this.taskClicked = this.taskClicked.bind(this);
  }
  toggleAccordionHandler(evt) {
    this.setState(prevState => ({
      ...prevState,
      accordionOpen: !prevState.accordionOpen
    }));
  }
  taskClicked(id, value) {
    switch (value) {
      case "done":
        this.clickDone(id);
        break;
      case "undoDone":
        this.clickUndoDone(id);
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
  }

  clickUndoDone(id) {
    const newTask = Object.assign({}, this.state.tasks[id - 1]);
    newTask.done = false;
    const newTasks = [...this.state.tasks];
    newTasks.splice(id - 1, 1, newTask);
    this.setState(prevState => ({
      ...prevState,
      tasks: newTasks
    }));
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
    const listTitle = "Tasks";
    const listNum = this.state.tasks.length;
    const taskList = this.state.tasks.map(task => (
      <Task key={uuid()} taskInfo={task} taskClicked={this.taskClicked} />
    ));
    return (
      <AccordionWrapper
        toggleAccordion={this.toggleAccordionHandler}
        accordionOpen={this.state.accordionOpen}
        listTitle={listTitle}
        listNum={listNum}
      >
        <ul className="list-group">{taskList}</ul>
      </AccordionWrapper>
    );
  }
}

export default TaskComponent;
