import React, { Component } from "react";
const uuid = require("uuid/v4");

class ShoppingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: [
        { name: "milk", quantity: "2", gotten: false },
        { name: "bread", quantity: "1", gotten: false },
        { name: "yoghurt", quantity: "1", gotten: false },
        { name: "choc croissants", quantity: "2", gotten: false }
      ],
      isShowing: false
    };
    this.toggleIsShowing = this.toggleIsShowing.bind(this);
    this.strikeThrough = this.strikeThrough.bind(this);
  }
  toggleIsShowing() {
    this.setState(prevState => ({
      ...prevState,
      isShowing: !prevState.isShowing
    }));
  }
  strikeThrough(evt) {
    const val = evt.target.value;
    this.setState(prevState => ({
      ...prevState,
      shopping: prevState.shopping.filter(item =>
        item.name === val ? (item.gotten = true) : item
      )
    }));
  }
  render() {
    const closed = { maxHeight: "0", overflow: "hidden" };
    const open = { display: "flex", overflow: "visible" };
    const haveIt = { textDecorationLine: "line-through" };
    const shopList = this.state.shopping.map(item => (
      <li key={uuid()}>
        <span style={item.gotten ? haveIt : null}>{item.name}</span>
        <span
          className="badge badge-pill badge-success ml-1"
          style={item.gotten ? haveIt : null}
        >
          {item.quantity}
        </span>
        {!item.gotten ? (
          <span className="ml-3">
            <button
              className="btn btn-small"
              value={item.name}
              onClick={this.strikeThrough}
            >
              Got it!
            </button>
          </span>
        ) : null}
      </li>
    ));
    return (
      <div className="accordion">
        <div className="card">
          <div className="card-header">
            <header>
              <h3>
                <button className="btn" onClick={this.toggleIsShowing}>
                  Shopping
                </button>
                <span className="badge badge-pill badge-danger">4</span>
              </h3>
            </header>
          </div>
          <div style={this.state.isShowing ? open : closed}>
            <div className="card-body">
              <ul>{shopList}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingComponent;
