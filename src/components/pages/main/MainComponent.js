import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { Container, Row } from "reactstrap";

import PrimaryHeader from "../../shared/headers/PrimaryHeader";
import QuickLookComponent from "../todoodle/components/quickLook/QuickLookComponent";
import QuickAddComponent from "../todoodle/components/quickAdd/QuickAddComponent";
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
              <Row className="justify-content-start justify-content-sm-center mb-3 pl-3">
                <QuickLookComponent />
                <Col-1 role="presentation" style={{ width: "10%" }} />
                <QuickAddComponent
                  userAddons={Array.from(this.props.familyAddons).concat(
                    this.props.userAddons
                  )}
                />
              </Row>
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
    familyname: state.family.familyname,
    userAddons: state.user.userAddons,
    userLoading: state.user.isLoading,
    familyAddons: state.family.familyAddons,
    familyLoading: state.family.isLoading
  };
};
export default connect(
  mapStateToProps,
  null
)(MainComponent);
