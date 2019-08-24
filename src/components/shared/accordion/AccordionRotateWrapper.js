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
    let listContent;
    if (this.state.lastValue === "right") {
      listContent = <CardBody>{this.props.rightList}</CardBody>;
    } else if (this.state.lastValue === "left") {
      listContent = <CardBody>{this.props.leftList}</CardBody>;
    } else if (this.state.lastValue === "center") {
      listContent = (
        <CardBody>{this.props.leftList.concat(this.props.rightList)}</CardBody>
      );
    }
    return (
      <Card>
        <CardTitle className="m-0">
          <Row
            className="justify-content-between"
            style={{ marginLeft: ".1rem", marginRight: ".1rem" }}
          >
            <Button
              onClick={this.toggleHandler}
              className="App__button Button--small"
              value="left"
            >
              {this.props.leftTitle}
              <SmallBadge>{this.props.leftListNum}</SmallBadge>
            </Button>
            <header>
              <h3 className="m-0" style={{ fontSize: "1.2rem" }}>
                <Button
                  onClick={this.toggleHandler}
                  className="App__button Button--small"
                  value="center"
                >
                  {this.props.listTitle}
                </Button>
              </h3>
            </header>
            <Button
              onClick={this.toggleHandler}
              className="App__button Button--small"
              value="right"
            >
              <SmallBadge>{this.props.rightListNum}</SmallBadge>
              {this.props.rightTitle}
            </Button>
          </Row>
        </CardTitle>

        <Collapse isOpen={this.state.collapse}>
          <ul className="list-group">{listContent}</ul>
        </Collapse>
      </Card>
    );
  }
}

export default AccordionRotateWrapper;
