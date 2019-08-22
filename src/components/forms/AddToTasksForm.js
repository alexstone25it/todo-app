import React, { Fragment } from "react";

import { FormGroup, Label, Input } from "reactstrap";

import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

function AddToTasksForm(props) {
  return (
    <Fragment>
      <FormGroup>
        <Label htmlFor="title">Add a task</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="desc">Description</Label>
        <Input type="textarea" />
      </FormGroup>
      <DayPicker onDayClick={this.handleDayClick} />
    </Fragment>
  );
}
export default AddToTasksForm;
