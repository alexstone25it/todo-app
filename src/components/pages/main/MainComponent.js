import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { Container } from "reactstrap";

import PrimaryHeader from "../../shared/headers/PrimaryHeader";
import AddTodoMenu from "../todoodle/components/addTodo/AddTodoMenu";
import NavbarComponent from "../../shared/navbar/NavbarComponent";
import TodoodleComponent from "../todoodle/TodoodleComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const user = this.props.user;
    const addons = ["shopping", "tasks", "rota"];
    return (
      <Fragment>
        <NavbarComponent />
        <Container>
          <PrimaryHeader user={user} />
          <AddTodoMenu userAddons={addons} />
          <TodoodleComponent />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.username,
    family: state.user.familyname,
    userObj: state.user.userObj,
    familyObj: state.family.familyObj
  };
};

export default connect(
  mapStateToProps,
  null
)(MainComponent);
