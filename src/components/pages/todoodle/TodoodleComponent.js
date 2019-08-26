import React, { Component } from "react";

import { connect } from "react-redux";

import { addAddonToView } from "../../../REDUX/actionCreators/viewCreator";

import { Row, Col } from "reactstrap";

import { concatToArray } from "../../shared/functions/minor/minorFuncs";
import { matchAddon } from "../../shared/functions/major/matchAddon";
import TitlesNav from "../../shared/navs/TitlesNav";

import MoveLeftMoveRight from "../../shared/buttons/MoveLeftMoveRight";

const uuid = require("uuid/v4");

class TodosComponent extends Component {
  constructor(props) {
    super(props);
    this.titleClickedHandler = this.titleClickedHandler.bind(this);
  }
  titleClickedHandler(title) {
    this.props.addAddonToView(title);
  }
  render() {
    const combinedAddonTitles = concatToArray(
      this.props.familyAddons,
      this.props.userAddons
    );
    let addonsInViewTitlesArray;
    if (this.props.addonsInView.indexOf("all") !== -1) {
      addonsInViewTitlesArray = combinedAddonTitles;
    } else {
      addonsInViewTitlesArray = combinedAddonTitles.map(title =>
        this.props.addonsInView.indexOf(title) !== -1 ? title : null
      );
    }
    const addonsArray = addonsInViewTitlesArray.map(addon => matchAddon(addon));

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
        <Row className="justify-content-center">
          <TitlesNav
            titles={combinedAddonTitles}
            titleClicked={this.titleClickedHandler}
          ></TitlesNav>
        </Row>
        <Row>{allAddons}</Row>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    familyAddons: state.family.familyAddons,
    userAddons: state.user.Addons,
    addonsInView: state.view.addonsInView
  };
};
const mapDispatchToProps = {
  addAddonToView
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosComponent);
