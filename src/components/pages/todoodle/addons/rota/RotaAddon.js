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
    if (!obj) {
      return [];
    } else {
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
  }
  generateListNum(prop) {
    if (prop !== undefined) {
      return Object.keys(prop).length;
    } else {
      return -1;
    }
  }
  generateRotaList(arr) {
    if (arr.length > 0) {
      return arr.map(person => <Rota key={uuid()} person={person} />);
    }
  }
  render() {
    const listTitle = "Rota";
    const leftTitle = this.props.username;
    const rightTitle = "family";
    const leftListNum = this.generateListNum(this.props.userRota);
    const rightListNum = this.generateListNum(this.props.familyRota);
    const rotaListLeft = this.generateRotaList(this.state.userRotaArray);
    const rotaListRight = this.generateRotaList(this.state.familyRotaArray);
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
