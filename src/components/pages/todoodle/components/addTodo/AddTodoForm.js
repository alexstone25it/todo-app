import React, { Component } from "react";

import { Form, FormGroup } from "reactstrap";
import AddShoppingForm from "../../../../forms/AddShoppingForm";
import AddTaskForm from "../../../../forms/AddTaskForm";
import AddRotaForm from "../../../../forms/AddRotaForm";

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

  render() {
    const addon = this.props.addonSelected;
    console.log(
      addon,
      "you stopped at connecting up the different addforms for each todoodle in the addTodoForm!"
    );

    return (
      <Form>
        <AddTaskForm />
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

export default AddTodoForm;
