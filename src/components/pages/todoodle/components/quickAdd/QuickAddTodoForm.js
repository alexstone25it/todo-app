import React, { Component } from "react";

import { connect } from "react-redux";

import { Form } from "reactstrap";
import AddToShoppingForm from "../../../../forms/AddToShoppingForm";
import AddToTasksForm from "../../../../forms/AddToTasksForm";
import AddToRotaForm from "../../../../forms/AddToRotaForm";
import Blob from "../../../../shared/spinners/Blob";

class QuickAddTodoForm extends Component {
  constructor(props) {
    super(props);
  }

  formToRender(addonTargeted) {
    switch (addonTargeted) {
      case "shopping": {
        return <AddToShoppingForm toggleModal={this.props.toggleModal} />;
      }
      case "tasks": {
        return <AddToTasksForm />;
      }
      case "rota": {
        return <AddToRotaForm />;
      }
      default: {
        return <Blob />;
      }
    }
  }
  render() {
    const addonTargeted = this.props.addonTargeted;
    const renderedForm = this.formToRender(addonTargeted);
    return <Form>{renderedForm}</Form>;
  }
}
const mapStateToProps = state => {
  return {
    addonTargeted: state.addonTargeted.addonTargeted
  };
};
export default connect(
  mapStateToProps,
  null
)(QuickAddTodoForm);
