import React, { Component } from "react";

import { Row, Table } from "reactstrap";

import DropdownComponent from "../../../../shared/dropdowns/DropdownComponent";

const uuid = require("uuid/v4");

class QuickLookComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModalHandler = this.toggleModalHandler.bind(this);
  }
  toggleModalHandler() {
    this.setState(prevState => ({
      ...prevState,
      modalOpen: !prevState.modalOpen
    }));
  }
  render() {
    return (
      <DropdownComponent text="QUICK LOOK">
        <Table>
          <thead>
            <tr>
              <th />
              <th>shopping</th>
              <th>Tomorrow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">today</th>
              <td>5</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">tomorrow</th>
              <td>5</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">day after tomorrow</th>
              <td>5</td>
              <td>2</td>
            </tr>
          </tbody>
        </Table>
      </DropdownComponent>
    );
  }
}

export default QuickLookComponent;
