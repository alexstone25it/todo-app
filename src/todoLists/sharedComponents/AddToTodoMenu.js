import React, { Component } from "react";
import "./AddToTodoMenu.css";

class AddToTodoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownShowing: false
    };
    this.showDropdown = this.showDropdown.bind(this);
  }
  showDropdown(evt) {
    this.setState(prevState => ({
      ...prevState,
      dropdownShowing: !prevState.dropdownShowing
    }));
  }
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div role="menu" className="dropdown AddToTodoMenu">
            <button
              className="btn dropdown-toggle AddToTodoMenu-toggleButton"
              onClick={this.showDropdown}
            >
              ADD
            </button>
            <div
              className="dropdown-menu AddToTodoMenu-dropdownWrapper"
              style={{ display: this.state.dropdownShowing ? "block" : "none" }}
            >
              <button className="dropdown-item">Add to Shopping</button>
              <button className="dropdown-item">Add to Tasks</button>
              <button className="dropdown-item">Add to Rota</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddToTodoMenu;
