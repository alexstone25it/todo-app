import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";

import MainComponent from "./components/pages/main/MainComponent";
import LandingPage from "./components/pages/landing/LandingPage";

class App extends Component {
  render() {
    console.log(
      "you are in the addtodoForm about to put the user inputs from taskform, shoppingform and rotaform through redux and into firebase"
    );
    return (
      <BrowserRouter>
        <div className="App">
          {this.props.isAuth ? <MainComponent /> : <LandingPage />}
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth
  };
};
export default connect(mapStateToProps)(App);
