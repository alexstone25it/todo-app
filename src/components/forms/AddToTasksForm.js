import React, { Fragment } from "react";

import { FormGroup, Label, Input } from "reactstrap";

import EitherOrBtnGroup from "../shared/buttons/EitherOrBtnGroup";

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
      <EitherOrBtnGroup />
    </Fragment>
  );
}
export default AddToTasksForm;
