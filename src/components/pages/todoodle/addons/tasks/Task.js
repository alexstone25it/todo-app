import React, { Component } from "react";
import { Row, Col, Button, ListGroupItem } from "reactstrap";

import StrikeThrough from "../../components/strikeThrough/StrikeThrough";

import AccordionWrapper from "../../../../shared/accordion/AccordionWrapper";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.toggleAccordionHandler = this.toggleAccordionHandler.bind(this);
  }
  onClickHandler(event) {
    const value = event.target.value;
    const id = this.props.taskInfo.id;
    this.props.taskClicked(id, value);
  }
  toggleAccordionHandler(evt) {
    this.setState(prevState => ({
      ...prevState,
      accordionOpen: !prevState.accordionOpen
    }));
  }
  render() {
    return (
      <ListGroupItem>
        <AccordionWrapper
          toggleAccordion={this.toggleAccordionHandler}
          accordionOpen={this.state.accordionOpen}
          listTitle={this.props.taskInfo.title}
          customiseToInner="true"
        >
          <Row>
            <Col xs="12">
              <StrikeThrough stricken={this.props.taskInfo.done}>
                Description
              </StrikeThrough>
            </Col>
          </Row>

          <Row>
            <Col xs="4" className="p-0">
              {!this.props.taskInfo.done ? (
                <Button
                  outline
                  color="success"
                  value="done"
                  onClick={this.onClickHandler}
                >
                  done
                </Button>
              ) : (
                <Button
                  outline
                  color="warning"
                  value="undoDone"
                  onClick={this.onClickHandler}
                >
                  Undo
                </Button>
              )}
            </Col>
            <Col xs="4" className="p-0">
              <Button
                outline
                color="warning"
                value="edit"
                onClick={this.onClickHandler}
              >
                edit
              </Button>
            </Col>
            <Col xs="4" className="p-0">
              <Button
                outline
                color="danger"
                value="delete"
                onClick={this.onClickHandler}
              >
                delete
              </Button>
            </Col>
          </Row>
        </AccordionWrapper>
      </ListGroupItem>
    );
  }
}

export default Task;
