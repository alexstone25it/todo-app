import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { Container } from "reactstrap";

import PrimaryHeader from "../../shared/headers/PrimaryHeader";
import AddTodoMenu from "../todoodle/components/addTodo/AddTodoMenu";
import NavbarComponent from "../../shared/navbar/NavbarComponent";
import TodoodleComponent from "../todoodle/TodoodleComponent";
import Blob from "../../shared/spinners/Blob";

class MainComponent extends Component {
  render() {
    return (
      <Fragment>
        <NavbarComponent />
        <Container>
          {this.props.familyLoading || this.props.userLoading ? (
            <Blob />
          ) : (
            <Fragment>
              <PrimaryHeader user={this.props.username} />
              <AddTodoMenu
                userAddons={Array.from(
                  this.props.familyObj.addons.concat(this.props.userObj.addons)
                )}
              />
              <TodoodleComponent />
            </Fragment>
          )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    familyname: state.user.familyname,
    userObj: state.user.userObj,
    userLoading: state.user.isLoading,
    familyObj: state.family.familyObj,
    familyLoading: state.family.isLoading
  };
};
export default connect(
  mapStateToProps,
  null
)(MainComponent);
