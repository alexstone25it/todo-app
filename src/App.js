import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";

import MainComponent from "./components/pages/main/MainComponent";
import LandingPage from "./components/pages/landing/LandingPage";

class App extends Component {
  render() {
    console.log(
      "you are completing the shoppingform in the quick add component, you have to press the buttons twice so there is a problem in the accordion rotate wrapper"
    );
    return (
      <BrowserRouter>
        <div className="App">
          {this.props.userAuth && this.props.familyAuth ? (
            <MainComponent />
          ) : (
            <LandingPage />
          )}
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    userAuth: state.user.userAuth,
    familyAuth: state.family.familyAuth
  };
};
export default connect(mapStateToProps)(App);
