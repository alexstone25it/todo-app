import React, { Component } from "react";

import { connect } from "react-redux";

import { userFetchData } from "../../../REDUX/actionCreators/userCreator";
import { familyFetchData } from "../../../REDUX/actionCreators/familyCreator";

import "./LandingPage.css";

import { Container, Row, Button } from "reactstrap";

import PrimaryHeader from "../../shared/headers/PrimaryHeader";
import LoginForm from "../../forms/LoginForm";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyname: "",
      username: "",
      password: ""
    };
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onInputHandler(event) {
    const target = event.target.id;
    const value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      [target]: value
    }));
  }
  onSubmitHandler(event) {
    event.preventDefault();
    const username = this.state.username.toLowerCase();
    const familyname = this.state.familyname.toLowerCase();
    const password = this.state.password;
    this.props.familyFetchData(familyname);
    this.props.userFetchData(familyname, username);
  }
  render() {
    return (
      <Container className="LandingPage">
        <PrimaryHeader />
        <LoginForm
          username={this.state.username}
          familyname={this.state.familyname}
          password={this.state.password}
          onInput={this.onInputHandler}
          onSubmit={this.onSubmitHandler}
        />
        <Row className="justify-content-center mt-4">
          <p className="text-center">Not a user yet?</p>
        </Row>
        <Row className="justify-content-center">
          <Button outline color="light">
            Sign up
          </Button>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  userFetchData,
  familyFetchData
};
export default connect(
  null,
  mapDispatchToProps
)(LandingPage);
