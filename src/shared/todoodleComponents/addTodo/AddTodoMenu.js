import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { Row, DropdownItem } from "reactstrap";

import DropdownComponent from "../../dropdowns/DropdownComponent";
import AddTodoModal from "../../modals/AddTodoModal";
import AddTodoForm from "./AddTodoForm";

const uuid = require("uuid/v4");

class AddTodoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      addonSelected: "tasks"
    };
    this.toggleModalHandler = this.toggleModalHandler.bind(this);
    this.addonClickedHandler = this.addonClickedHandler.bind(this);
  }
  addonClickedHandler(value) {
    console.log(value);
    this.setState(prevState => ({
      ...prevState,
      modalOpen: true,
      addonSelected: value
    }));
  }
  toggleModalHandler() {
    this.setState(prevState => ({
      ...prevState,
      modalOpen: !prevState.modalOpen
    }));
  }
  render() {
    const addonArray = this.props.userAddons.map(addon => (
      <DropdownItem
        key={uuid()}
        value={addon}
        onClick={this.toggleModalHandler}
      >
        Add to {addon}
      </DropdownItem>
    ));
    return (
      <Fragment>
        <AddTodoModal
          toggleModal={this.toggleModalHandler}
          modalOpen={this.state.modalOpen}
          addonSelected={this.state.addonSelected}
        >
          <AddTodoForm addonSelected={this.state.addonSelected} />
        </AddTodoModal>
        <Row>
          <DropdownComponent
            text="QUICK ADD"
            addonClickedHandler={this.addonClickedHandler}
          >
            {addonArray}
          </DropdownComponent>
        </Row>
      </Fragment>
    );
  }
}

export default AddTodoMenu;
