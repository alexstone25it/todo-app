import React, { Fragment } from "react";

import { FormGroup, Label, Input } from "reactstrap";

function AddTaskForm(props) {
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
    </Fragment>
  );
}
export default AddTaskForm;
