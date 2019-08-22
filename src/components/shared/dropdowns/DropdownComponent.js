import React, { Component } from "react";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggleHandler = this.toggleHandler.bind(this);
    this.targetClicked = this.targetClicked.bind(this);
  }
  toggleHandler() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  targetClicked(event) {
    let value = event.target.value;
    this.props.targetClickedHandler(value);
  }
  render() {
    const text = this.props.text;
    return (
      <UncontrolledDropdown>
        <DropdownToggle
          className="App__Button Button--medium"
          onClick={this.toggleHandler}
        >
          {text}
        </DropdownToggle>
        <DropdownMenu className="App__wrapper" onClick={this.targetClicked}>
          {this.props.children}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default DropdownComponent;
