import React, { Component } from "react";

import { connect } from "react-redux";

import AccordionRotateWrapper from "../../../../shared/accordion/AccordionRotateWrapper";
import Rota from "./Rota";

const uuid = require("uuid/v4");

class RotaAddon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRotaArray: this.makeArray(this.props.userRota),
      familyRotaArray: this.makeArray(this.props.familyRota)
    };
  }
  makeArray(obj) {
    return Object.entries(obj).map((item, index) => ({
      id: index,
      name: item[0],
      events: Object.entries(item[1]).map(item => ({
        title: item[0],
        info: item[1]
      })),
      done: false
    }));
  }
  render() {
    const listTitle = "Rota";
    const leftTitle = this.props.username;
    const rightTitle = "family";
    const leftListNum = 2;
    const rightListNum = 5;
    const rotaListLeft = this.state.userRotaArray.map(person => (
      <Rota key={uuid()} person={person} />
    ));
    const rotaListRight = this.state.familyRotaArray.map(person => (
      <Rota key={uuid()} person={person} />
    ));
    return (
      <AccordionRotateWrapper
        listTitle={listTitle}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        leftListNum={leftListNum}
        rightListNum={rightListNum}
        leftList={rotaListLeft}
        rightList={rotaListRight}
      ></AccordionRotateWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.user.username,
    userRota: state.user.userRota,
    familyRota: state.family.familyRota
  };
};
export default connect(
  mapStateToProps,
  null
)(RotaAddon);
