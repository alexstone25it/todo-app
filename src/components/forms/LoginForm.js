import React from "react";

import { Form, FormGroup, Input, Label, Row, Button } from "reactstrap";

function LoginForm(props) {
  return (
    <Form className="text-center">
      <FormGroup>
        <Label htmlFor="username">
          <Input
            type="text"
            name="username"
            id="username"
            value={props.username}
            placeholder="Username"
            onChange={props.onInput}
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="familyName">
          <Input
            type="text"
            name="familyname"
            id="familyname"
            value={props.familyname}
            placeholder="Family Name"
            onChange={props.onInput}
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">
          <Input
            type="password"
            name="password"
            id="password"
            value={props.password}
            placeholder="Password"
            onChange={props.onInput}
          />
        </Label>
      </FormGroup>
      <Row className="justify-content-center">
        <Button outline color="light" onClick={props.onSubmit}>
          Log in
        </Button>
      </Row>
    </Form>
  );
}

export default LoginForm;
