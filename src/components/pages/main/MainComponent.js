import React, { Component } from "react";

import { connect } from "react-redux";

import {
  addAddonToView,
  removeAddonFromView
} from "../../../REDUX/actionCreators/viewCreator";

import { Row, Col } from "reactstrap";

import { concatToArrayNoDupes } from "../../shared/functions/minor/minorFuncs";
import { matchAddon } from "../../shared/functions/major/matchAddon";
import TitlesNav from "../../shared/navs/TitlesNav";

import ForwardBackwards from "../../shared/navs/ForwardsBackwards";

const uuid = require("uuid/v4");

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.titleClickedHandler = this.titleClickedHandler.bind(this);
  }
  titleClickedHandler(title) {
    const combinedAddonTitles = concatToArrayNoDupes(
      this.props.familyAddons,
      this.props.userAddons
    );
    if (title === "all") {
      if (this.props.addonsInView.length === combinedAddonTitles.length) {
        this.props.removeAddonFromView();
      } else {
        this.props.addAddonToView(combinedAddonTitles);
      }
    } else if (this.props.addonsInView.indexOf(title) !== -1) {
      this.props.removeAddonFromView(title);
    } else {
      this.props.addAddonToView(title);
    }
  }
  render() {
    const combinedAddonTitles = concatToArrayNoDupes(
      this.props.familyAddons,
      this.props.userAddons
    );

    const addonsInViewTitlesArray = combinedAddonTitles.map(title =>
      this.props.addonsInView.indexOf(title) !== -1 ? title : null
    );

    const addonsArray = addonsInViewTitlesArray.map(addon => matchAddon(addon));

    const allAddons = addonsArray.map(addon => (
      <Col xs="12" lg="4" className="mt-3" key={uuid()}>
        {addon}
      </Col>
    ));
    return (
      <main className="container-fluid p-0 TodoodleComponent">
        <Row
          className="justify-content-around mt-3 mb-3"
          style={{ backgroundColor: "white", borderRadius: ".25rem" }}
        >
          <ForwardBackwards />
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
    userAddons: state.user.userAddons,
    addonsInView: state.view.addonsInView
  };
};
const mapDispatchToProps = {
  addAddonToView,
  removeAddonFromView
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
