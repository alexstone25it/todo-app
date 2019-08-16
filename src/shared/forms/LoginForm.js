import React, { Component } from "react";

import { Form, FormGroup, Input, Label, Row, Button } from "reactstrap";

import { connect } from "react-redux";
import { fetchUser } from "../../REDUX/actionCreators/userNameCreator";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  inputHandler(event) {
    const target = event.target.id;
    const value = event.target.value;
    if (target === "username") {
      this.setState(prevState => ({
        ...prevState,
        username: value
      }));
    } else if (target === "password") {
      console.log("do password stuff");
    }
  }
  submitHandler(event) {
    event.preventDefault();
    const username = this.state.username.toLowerCase();
    const password = this.state.password;
    this.props.fetchUser(username);
  }
  render() {
    return (
      <Form className="text-center">
        <FormGroup>
          <Label htmlFor="username">
            <Input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              placeholder="Username"
              onChange={this.inputHandler}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.inputHandler}
            />
          </Label>
        </FormGroup>
        <Row className="justify-content-center">
          <Button outline color="light" onClick={this.submitHandler}>
            Log in
          </Button>
        </Row>
        <Row>{this.props.userName}</Row>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  userName: state.userName
});
const mapDispatchToProps = {
  fetchUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
