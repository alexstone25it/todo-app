import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import MainComponent from "./mainComponents/MainComponent";
import LandingPage from "./mainComponents/LandingPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: undefined
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/:user" component={MainComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
