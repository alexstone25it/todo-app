import React, { Component } from "react";

import PrimaryHeader from "../headers/PrimaryHeader";
import AddToTodoMenu from "../todoLists/sharedComponents/AddToTodoMenu";
import DisplayComponent from "../mainComponents/DisplayComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <PrimaryHeader />
        <AddToTodoMenu />
        <DisplayComponent />
      </div>
    );
  }
}

export default MainComponent;
