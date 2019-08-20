import React, { Fragment } from "react";

import { FormGroup, Label, Input } from "reactstrap";

function AddRotaForm(props) {
  return (
    <Fragment>
      <FormGroup>
        <Label htmlFor="title">Add to the rota</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="desc">Description</Label>
        <Input type="textarea" />
      </FormGroup>
    </Fragment>
  );
}
export default AddRotaForm;
