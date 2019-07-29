import React, { Component } from "react";

import SubHeader from "../headers/SubHeader";
import OneTodo from "./OneTodo";
import AddNewTodo from "./AddNewTodo";

const uuidv4 = require("uuid/v4");

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: "1", title: "Make apps to fill portfolio", done: false },
        { id: "2", title: "Make 'em spiffy and awesome!", done: false },
        { id: "3", title: "Make portfolio", done: false }
      ]
    };
    this.todoClicked = this.todoClicked.bind(this);
  }
  todoClicked(id, value) {
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
      todos: prevState.todos.filter(todo =>
        todo.id === id ? (todo.done = true) : todo
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
      todos: prevState.todos.filter(todo => (todo.id !== id ? todo : null))
    }));
  }
  render() {
    const renderTodos = this.state.todos.map(todo => (
      <OneTodo key={uuidv4()} todoInfo={todo} todoClicked={this.todoClicked} />
    ));
    return (
      <main className="container">
        <SubHeader>Todo List</SubHeader>
        {renderTodos}
        <AddNewTodo />
      </main>
    );
  }
}

export default TodoComponent;
