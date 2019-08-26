import React, { Component } from "react";

import { Nav, NavItem, NavLink } from "reactstrap";

const uuid = require("uuid/v4");

class TitlesNav extends Component {
  constructor(props) {
    super(props);
    this.linkClicked = this.linkClicked.bind(this);
  }
  linkClicked(event) {
    this.props.titleClicked(event.target.title);
  }
  render() {
    const renderedNavList = this.props.titles.map(title => (
      <NavItem key={uuid()}>
        <NavLink onClick={this.linkClicked} title={title}>
          {title}
        </NavLink>
      </NavItem>
    ));
    return (
      <Nav tabs>
        {renderedNavList}{" "}
        <NavItem key={uuid()}>
          <NavLink onClick={this.linkClicked} title="all">
            Show all
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
export default TitlesNav;
