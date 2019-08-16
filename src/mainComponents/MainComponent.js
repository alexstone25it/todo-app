import React, { Component, Fragment } from "react";

import { Container } from "reactstrap";

import PrimaryHeader from "../shared/headers/PrimaryHeader";
import AddTodoMenu from "../shared/todoodleComponents/addTodo/AddTodoMenu";
import NavbarComponent from "../shared/navbar/NavbarComponent";
import TodoodleComponent from "../mainComponents/TodoodleComponent";

import { connect } from "react-redux";
import { fetchUserAddons } from "../REDUX/actionCreators/userAddonsCreator";

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.loadUserAddons();
  }
  loadUserAddons() {
    this.props.fetchUserAddons();
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
  userAddons: state.userAddons
});
const mapDispatchToProps = { fetchUserAddons };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
