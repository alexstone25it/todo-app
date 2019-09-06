import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";

import TodoodlesContainer from "./components/pages/main/TodoodlesContainer";
import LandingPage from "./components/pages/landing/LandingPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.props.userAuth ? <TodoodlesContainer /> : <LandingPage />}
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    userAuth: state.user.userAuth
  };
};
export default connect(mapStateToProps)(App);
