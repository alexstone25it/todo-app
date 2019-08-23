import React, { Component } from "react";

import { Collapse, Card, CardTitle, CardBody, Button } from "reactstrap";

import { LargeBadge } from "../buttons/Badges";

class AccordionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  toggleHandler() {
    this.setState(prevState => ({
      collapse: !prevState.collapse
    }));
  }
  render() {
    return (
      <Card>
        <CardTitle className="m-0">
          <header>
            <h3 className="m-0">
              <Button
                onClick={this.toggleHandler}
                className="App__button Button--large"
              >
                {this.props.listTitle}
                {this.props.listNum && (
                  <LargeBadge>{this.props.listNum}</LargeBadge>
                )}
              </Button>
            </h3>
          </header>
        </CardTitle>

        <Collapse isOpen={this.state.collapse}>
          <CardBody>{this.props.children}</CardBody>
        </Collapse>
      </Card>
    );
  }
}

export default AccordionWrapper;
