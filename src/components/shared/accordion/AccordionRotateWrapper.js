import React, { Component } from "react";

import { Collapse, Card, CardTitle, CardBody, Button, Row } from "reactstrap";

import { SmallBadge } from "../buttons/Badges";

class AccordionRotateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false, lastValue: "" };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  toggleHandler(event) {
    const value = event.target.value;
    if (this.state.lastValue !== "" && value !== this.state.lastValue) {
      this.setState(prevState => ({
        ...prevState,
        lastValue: value
      }));
    } else {
      this.setState(prevState => ({
        collapse: !prevState.collapse,
        lastValue: value
      }));
    }
  }
  render() {
    return (
      <Card>
        <CardTitle className="m-0">
          <Row
            className="justify-content-between"
            style={{ marginLeft: ".1rem", marginRight: ".1rem" }}
          >
            <Button
              onClick={this.toggleHandler}
              className="App__button Button--small--onWhite"
              style={
                this.props.leftListNum === -1
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              value="left"
            >
              {this.props.leftTitle}
              <SmallBadge>{this.props.leftListNum}</SmallBadge>
            </Button>

            <header>
              <h3 className="m-0" style={{ fontSize: "1.2rem" }}>
                {this.props.listTitle}
              </h3>
            </header>
            <Button
              onClick={this.toggleHandler}
              className="App__button Button--small--onWhite"
              style={
                this.props.leftRightNum === -1
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              value="right"
            >
              <SmallBadge>{this.props.rightListNum}</SmallBadge>
              {this.props.rightTitle}
            </Button>
          </Row>
        </CardTitle>

        <Collapse isOpen={this.state.collapse}>
          {this.state.lastValue === "right" ? (
            <CardBody>{this.props.rightList}</CardBody>
          ) : (
            <CardBody>{this.props.leftList}</CardBody>
          )}
        </Collapse>
      </Card>
    );
  }
}

export default AccordionRotateWrapper;
