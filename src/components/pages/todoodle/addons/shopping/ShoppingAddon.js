import React, { Component } from "react";

import { Button } from "reactstrap";

import AccordionWrapper from "../../../../shared/accordion/AccordionWrapper";
import StrikeThrough from "../../components/strikeThrough/StrikeThrough";
import { SmallBadge } from "../../../../shared/buttons/Badges";

const uuid = require("uuid/v4");

class ShoppingAddon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: [
        { name: "milk", quantity: "2", gotten: false },
        { name: "bread", quantity: "1", gotten: false },
        { name: "yoghurt", quantity: "1", gotten: false },
        { name: "choc croissants", quantity: "2", gotten: false }
      ],
      accordionOpen: false
    };
    this.toggleAccordionHandler = this.toggleAccordionHandler.bind(this);
    this.strikeItemHandler = this.strikeItemHandler.bind(this);
  }
  toggleAccordionHandler(evt) {
    this.setState(prevState => ({
      ...prevState,
      accordionOpen: !prevState.accordionOpen
    }));
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
  render() {
    const listTitle = "Shopping";
    const listNum = this.state.shopping.length;
    const shopList = this.state.shopping.map(item => (
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
      <AccordionWrapper
        toggleAccordion={this.toggleAccordionHandler}
        accordionOpen={this.state.accordionOpen}
        listTitle={listTitle}
        listNum={listNum}
      >
        {shopList}
      </AccordionWrapper>
    );
  }
}

export default ShoppingAddon;
