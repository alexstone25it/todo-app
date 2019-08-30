import React, { Component } from "react";
import { Row, Col, Table } from "reactstrap";
import AccordionWrapper from "../../../../shared/accordion/AccordionWrapper";

const uuid = require("uuid/v4");

class Rota extends Component {
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
  toggleAccordionHandler() {
    this.setState(prevState => ({
      ...prevState,
      accordionOpen: !prevState.accordionOpen
    }));
  }
  render() {
    const person = this.props.person;
    return (
      <AccordionWrapper
        toggleAccordion={this.toggleAccordionHandler}
        accordionOpen={this.state.accordionOpen}
        listTitle={person.name}
        listNum={person.events.length}
      >
        <Row>
          <Col xs="12">
            <Table>
              <tbody>
                {person.events.map(event => (
                  <tr key={uuid()}>
                    <td>{event.title}</td>
                    <td>{event.info}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </AccordionWrapper>
    );
  }
}

export default Rota;
