import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { addTodoReducer } from "../../REDUX/reducers/addTodoReducer";

class AddShoppingForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <FormGroup>
          <Label htmlFor="title">Add a shopping item</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="desc">Quantity</Label>
          <Input type="select" name="select">
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
          </Input>
        </FormGroup>
        <Button color="secondary" onClick={this.props.toggleModal}>
          Add to {this.props.addonTargeted}
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    addonTargeted: state.addTodos.addonTargeted
  };
};
export default connect(
  mapStateToProps,
  null
)(AddShoppingForm);
