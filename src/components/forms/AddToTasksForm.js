import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { FormGroup, Label, Input, Button } from "reactstrap";

import BtnRow from "../shared/buttons/BtnRow";
import BasicAlert from "../shared/alerts/BasicAlert";

import { userPostNewTask } from "../../REDUX/actionCreators/userCreator";
import { familyPostNewTask } from "../../REDUX/actionCreators/familyCreator";

const uuid = require("uuid/v4");

class AddToTasksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      showAlert: false,
      messageSent: false
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.dismissAlertHandler = this.dismissAlertHandler.bind(this);
  }
  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
      messageSent: false
    });
  }
  onSubmitHandler(value) {
    const familyname = this.props.familyname;
    if (this.state.title.length > 0 && this.state.desc.length > 0) {
      const newTask = {
        id: uuid(),
        title: this.state.title,
        desc: this.state.desc
      };
      if (value.index === 0) {
        const username = this.props.username;
        this.props.userPostNewTask(familyname, username, newTask);
      } else {
        this.props.familyPostNewTask(familyname, newTask);
      }
      this.setState({
        title: "",
        desc: "",
        showAlert: false,
        messageSent: true
      });
    } else {
      this.setState(prevState => ({
        ...prevState,
        showAlert: true
      }));
    }
  }
  dismissAlertHandler() {
    this.setState(prevState => ({
      ...prevState,
      showAlert: false
    }));
  }
  render() {
    const taskBtnStyle = {
      backgroundColor: "teal",
      border: "1px solid black"
    };
    const taskBtnArray = ["Add to user", "Add to family"];
    return (
      <Fragment>
        {this.state.showAlert ? (
          <BasicAlert>
            You have not made a task yet.
            <Button onClick={this.dismissAlertHandler}>X</Button>
          </BasicAlert>
        ) : null}
        <FormGroup>
          <Label htmlFor="title">Add a task</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="desc">Description</Label>
          <Input
            type="textarea"
            id="desc"
            name="desc"
            value={this.state.desc}
            onChange={this.onChangeHandler}
          />
        </FormGroup>
        {this.state.messageSent ? (
          <p>Your message has been sent</p>
        ) : (
          <BtnRow
            btnArray={taskBtnArray}
            btnStyle={taskBtnStyle}
            onClick={this.onSubmitHandler}
          />
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.user.username,
    familyname: state.family.familyname
  };
};
const mapDispatchToProps = dispatch => ({
  userPostNewTask: (familyname, username, newTask) =>
    dispatch(userPostNewTask(familyname, username, newTask)),
  familyPostNewTask: (familyname, newTask) =>
    dispatch(familyPostNewTask(familyname, newTask))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToTasksForm);
