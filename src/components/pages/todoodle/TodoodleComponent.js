import React, { Component } from "react";

import { connect } from "react-redux";

import { Row, Col } from "reactstrap";

import { concatToArray } from "../../shared/functions/minor/minorFuncs";
import { matchAddon } from "../../shared/functions/major/matchAddon";

import MoveLeftMoveRight from "../../shared/buttons/MoveLeftMoveRight";
const uuid = require("uuid/v4");
class TodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: undefined
    };
  }
  toggleAddonsHandler() {
    console.log("hi");
  }
  render() {
    const allAddons = concatToArray(
      this.props.familyAddons,
      this.props.userAddons
    );
    const matchedAddons = allAddons.map(addon => matchAddon(addon));
    const addonsArray = matchedAddons.map(addon => (
      <Col
        xs="12"
        lg="4"
        className="mt-3"
        key={uuid()}
        toggleAddons={this.toggleAddonsHandler}
      >
        {addon}
      </Col>
    ));
    return (
      <main className="container-fluid p-0 TodoodleComponent">
        <Row
          className="justify-content-around"
          style={{ backgroundColor: "white", borderRadius: ".25rem" }}
        >
          <MoveLeftMoveRight />
        </Row>
        <Row>{addonsArray}</Row>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    familyAddons: state.family.familyAddons,
    userAddons: state.user.Addons
  };
};
export default connect(
  mapStateToProps,
  null
)(TodosComponent);
