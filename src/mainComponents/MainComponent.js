import React, { Component, Fragment } from "react";

import { Container } from "reactstrap";

import PrimaryHeader from "../shared/headers/PrimaryHeader";
import AddTodoMenu from "../shared/todoodleComponents/addTodo/AddTodoMenu";
import NavbarComponent from "../shared/navbar/NavbarComponent";
import TodoodleComponent from "../mainComponents/TodoodleComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <NavbarComponent />
        <Container>
          <PrimaryHeader />
          <AddTodoMenu />
          <TodoodleComponent />
        </Container>
      </Fragment>
    );
  }
}

export default MainComponent;
