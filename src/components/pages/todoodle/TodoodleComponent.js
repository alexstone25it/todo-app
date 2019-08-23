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
  }

  render() {
    const addonsArray = concatToArray(
      this.props.familyAddons,
      this.props.userAddons
    ).map(addon => matchAddon(addon));

    const allAddons = addonsArray.map(addon => (
      <Col xs="12" lg="4" className="mt-3" key={uuid()}>
        {addon}
      </Col>
    ));
    return (
      <main className="container-fluid p-0 TodoodleComponent">
        <Row
          className="justify-content-around"
          style={{ backgroundColor: "white" }}
        >
          <MoveLeftMoveRight />
        </Row>
        <Row>{allAddons}</Row>
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
