import React from "react";

import "./App.css";

import PrimaryHeader from "./headers/PrimaryHeader";
import TodoComponent from "./todo/TodoComponent";

function App() {
  return (
    <div className="App container-fluid">
      <PrimaryHeader />

      <TodoComponent />
    </div>
  );
}

export default App;
