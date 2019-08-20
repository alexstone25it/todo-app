import React, { Component } from "react";

import { connect } from "react-redux";

import { Form, FormGroup } from "reactstrap";
import AddToShoppingForm from "../../../../forms/AddToShoppingForm";
import AddToTasksForm from "../../../../forms/AddToTasksForm";
import AddToRotaForm from "../../../../forms/AddToRotaForm";
import Blob from "../../../../shared/spinners/Blob";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: new Date()
    };
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }
  formToRender(addonTargeted) {
    switch (addonTargeted) {
      case "shopping": {
        return <AddToShoppingForm />;
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
    return (
      <Form>
        {renderedForm}
        <FormGroup>
          <DayPicker
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
          />
        </FormGroup>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    addonTargeted: state.addTodos.addonTargeted
  };
};
export default connect(
  mapStateToProps,
  null
)(AddTodoForm);
