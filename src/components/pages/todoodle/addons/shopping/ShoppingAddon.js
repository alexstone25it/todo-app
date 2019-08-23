import React, { Component } from "react";

import { connect } from "react-redux";

import { Button } from "reactstrap";

import AccordionRotateWrapper from "../../../../shared/accordion/AccordionRotateWrapper";
import StrikeThrough from "../../components/strikeThrough/StrikeThrough";
import { SmallBadge } from "../../../../shared/buttons/Badges";

const uuid = require("uuid/v4");

class ShoppingAddon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userShoppingArray: this.makeArray(this.props.userShopping),
      familyShoppingArray: this.makeArray(this.props.familyShopping)
    };

    this.strikeItemHandler = this.strikeItemHandler.bind(this);
  }

  strikeItemHandler(evt) {
    const val = evt.target.value;
    this.setState(prevState => ({
      ...prevState,
      shopping: prevState.shopping.filter(item =>
        item.name === val ? (item.gotten = true) : item
      )
    }));
  }
  makeArray(obj) {
    return Object.entries(obj).map(item => ({
      name: item[0],
      quantity: String(item[1]),
      gotten: false
    }));
  }
  render() {
    const listTitle = "Shopping";
    const leftTitle = this.props.username;
    const rightTitle = "family";
    const leftListNum = Object.keys(this.props.userShopping).length;
    const rightListNum = Object.keys(this.props.familyShopping).length;

    const shopListLeft = this.state.userShoppingArray.map(item => (
      <li key={uuid()}>
        <StrikeThrough stricken={item.gotten}>
          {item.name} <SmallBadge>{item.quantity}</SmallBadge>
        </StrikeThrough>
        <span className="ml-3">
          {!item.gotten ? (
            <Button
              outline
              color="success"
              className="p-0"
              value={item.name}
              onClick={this.strikeItemHandler}
            >
              Got it!
            </Button>
          ) : null}
        </span>
      </li>
    ));
    const shopListRight = this.state.familyShoppingArray.map(item => (
      <li key={uuid()}>
        <StrikeThrough stricken={item.gotten}>
          {item.name} <SmallBadge>{item.quantity}</SmallBadge>
        </StrikeThrough>
        <span className="ml-3">
          {!item.gotten ? (
            <Button
              outline
              color="success"
              className="p-0"
              value={item.name}
              onClick={this.strikeItemHandler}
            >
              Got it!
            </Button>
          ) : null}
        </span>
      </li>
    ));
    return (
      <AccordionRotateWrapper
        listTitle={listTitle}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        leftListNum={leftListNum}
        rightListNum={rightListNum}
        leftList={shopListLeft}
        rightList={shopListRight}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.user.username,
    familyShopping: state.family.familyShopping,
    userShopping: state.user.userShopping
  };
};
export default connect(
  mapStateToProps,
  null
)(ShoppingAddon);
