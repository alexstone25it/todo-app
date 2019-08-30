import React, { Component } from "react";

import { connect } from "react-redux";

import AccordionRotateWrapper from "../../../../shared/accordion/AccordionRotateWrapper";
import Task from "./Task";

const uuid = require("uuid/v4");

class TaskAddon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTasksArray: this.makeArray(this.props.userTasks),
      familyTasksArray: this.makeArray(this.props.familyTasks)
    };

    this.taskClicked = this.taskClicked.bind(this);
  }
  makeArray(obj) {
    if (!obj) {
      return [];
    } else {
      return Object.entries(obj).map((item, index) => ({
        id: index,
        title: item[0],
        desc: String(item[1]),
        done: false
      }));
    }
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
  generateListNum(prop) {
    if (prop !== undefined) {
      return Object.keys(prop).length;
    } else {
      return -1;
    }
  }
  generateTaskList(arr) {
    if (arr.length > 0) {
      return arr.map(task => (
        <Task key={uuid()} taskInfo={task} taskClicked={this.taskClicked} />
      ));
    }
  }
  render() {
    const listTitle = "Tasks";
    const leftTitle = this.props.username;
    const rightTitle = "family";
    const leftListNum = this.generateListNum(this.props.userTasks);
    const rightListNum = this.generateListNum(this.props.familyTasks);
    const leftTaskList = this.generateTaskList(this.state.userTasksArray);
    const rightTaskList = this.generateTaskList(this.state.familyTasksArray);
    return (
      <AccordionRotateWrapper
        listTitle={listTitle}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        leftListNum={leftListNum}
        rightListNum={rightListNum}
        leftList={leftTaskList}
        rightList={rightTaskList}
      ></AccordionRotateWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.user.username,
    userTasks: state.user.userTasks,
    familyTasks: state.family.familyTasks
  };
};
export default connect(
  mapStateToProps,
  null
)(TaskAddon);
