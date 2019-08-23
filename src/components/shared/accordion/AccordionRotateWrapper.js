import React, { Component } from "react";

import { Collapse, Card, CardTitle, CardBody, Button, Row } from "reactstrap";

import { LargeBadge } from "../buttons/Badges";

class AccordionRotateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      collapse: !prevState.collapse
    }));
  }
  render() {
    return (
      <Card>
        <CardTitle className="m-0">
          <Row
            className="justify-content-between"
            style={{ marginLeft: ".1rem", marginRight: ".1rem" }}
          >
            <Button onClick={this.toggle} className="App__button Button--small">
              User
            </Button>
            <header>
              <h3 className="m-0" style={{ fontSize: "1.2rem" }}>
                {this.props.listTitle}{" "}
                {this.props.listNum && (
                  <LargeBadge>{this.props.listNum}</LargeBadge>
                )}
              </h3>
            </header>
            <Button onClick={this.toggle} className="App__button Button--small">
              Family
            </Button>
          </Row>
        </CardTitle>

        <Collapse isOpen={this.state.collapse}>
          <CardBody>{this.props.children}</CardBody>
        </Collapse>
      </Card>
    );
  }
}

export default AccordionRotateWrapper;
