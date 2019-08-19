import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchUserData } from "../../../REDUX/actionCreators/userCreator";
import { fetchFamilyData } from "../../../REDUX/actionCreators/familyCreator";

import "./LandingPage.css";

import { Container } from "reactstrap";

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
    if (target === "username") {
      this.setState(prevState => ({
        ...prevState,
        username: value
      }));
    } else if (target === "familyname") {
      this.setState(prevState => ({
        ...prevState,
        familyname: value
      }));
    } else if (target === "password") {
      console.log("do password stuff");
    }
  }
  onSubmitHandler(event) {
    event.preventDefault();
    const username = this.state.username.toLowerCase();
    const familyname = this.state.familyname.toLowerCase();
    const password = this.state.password;
    this.props.fetchFamilyData(familyname);
    this.props.fetchUserData(familyname, username);
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
      </Container>
    );
  }
}

const mapDispatchToProps = {
  fetchUserData,
  fetchFamilyData
};

export default connect(
  null,
  mapDispatchToProps
)(LandingPage);
