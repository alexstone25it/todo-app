import React, { Component, Fragment } from "react";

import { Row, DropdownItem } from "reactstrap";

import { connect } from "react-redux";

import { addAddonTargeted } from "../../../../../REDUX/actionCreators/addTodoCreator";

import DropdownComponent from "../../../../shared/dropdowns/DropdownComponent";
import SimpleModal from "../../../../shared/modals/SimpleModal";
import QuickAddTodoForm from "./QuickAddTodoForm";

const uuid = require("uuid/v4");

class QuickAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModalHandler = this.toggleModalHandler.bind(this);
    this.addonClickedHandler = this.addonClickedHandler.bind(this);
  }
  addonClickedHandler(value) {
    const addonTargeted = value;
    this.setState(prevState => ({
      ...prevState,
      modalOpen: true
    }));
    this.props.addAddonTargeted(addonTargeted);
  }
  toggleModalHandler() {
    this.setState(prevState => ({
      ...prevState,
      modalOpen: !prevState.modalOpen
    }));
  }
  render() {
    const addons = Array.from(new Set(this.props.userAddons));
    const addonArray = addons.map(addon => (
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
        <SimpleModal
          toggleModal={this.toggleModalHandler}
          modalOpen={this.state.modalOpen}
          modalTitle={this.props.addonTargeted}
        >
          <QuickAddTodoForm />
        </SimpleModal>
        <Row>
          <DropdownComponent
            text="QUICK ADD"
            targetClickedHandler={this.addonClickedHandler}
          >
            {addonArray}
          </DropdownComponent>
        </Row>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    addonTargeted: state.addTodos.addonTargeted
  };
};
const mapDispatchToProps = {
  addAddonTargeted
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickAddComponent);
