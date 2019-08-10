import React, { Component } from "react";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggleHandler = this.toggleHandler.bind(this);
    this.addonClicked = this.addonClicked.bind(this);
  }
  toggleHandler() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  addonClicked(event) {
    let value = event.target.value;
    this.props.addonClickedHandler(value);
  }
  render() {
    const text = this.props.text;
    return (
      <UncontrolledDropdown>
        <DropdownToggle className="App__button" onClick={this.toggleHandler}>
          {text}
        </DropdownToggle>
        <DropdownMenu className="App__wrapper" onClick={this.addonClicked}>
          {this.props.children}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default DropdownComponent;
