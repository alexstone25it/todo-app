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
    return (
      <Fragment>
        <NavbarComponent />
        <Container>
          <PrimaryHeader />
          <AddTodoMenu userAddons={this.props.userAddons} />
          <TodoodleComponent />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  familyname: state.familyname,
  userObj: state.userObj,
  familyObj: state.familyObj
});

export default connect(
  mapStateToProps,
  null
)(MainComponent);
