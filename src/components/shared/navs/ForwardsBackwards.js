import React from "react";

import { Nav, NavItem, NavLink } from "reactstrap";

const uuid = require("uuid/v4");

function ForwardBackwards(props) {
  const daysArray = [<h5>Today</h5>, " > ", ">>", ">>>", ">>>>"];
  const renderArray = daysArray.map(day => (
    <NavItem
      key={uuid()}
      className="App__button Button--small--onWhite"
      style={{ margin: "5px" }}
    >
      <NavLink className="p-0">{day}</NavLink>
    </NavItem>
  ));
  return <Nav className="justify-content-between">{renderArray}</Nav>;
}

export default ForwardBackwards;
