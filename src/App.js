import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";

import MainComponent from "./components/pages/main/MainComponent";
import LandingPage from "./components/pages/landing/LandingPage";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
