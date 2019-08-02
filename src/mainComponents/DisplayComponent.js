import React, { Component } from "react";
import "./DisplayComponent.css";

import ShoppingComponent from "../todoLists/ShoppingComponent";
import TaskComponent from "../todoLists/TaskComponent";

class DisplayComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="container DisplayComponent">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Today</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ShoppingComponent />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TaskComponent />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn">Rota</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-none d-md-block col-md-3 col-lg-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Soon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button className="btn">Shopping</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn">Tasks</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn">Rota</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-none d-lg-block col-lg-2">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Soon-ish</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button className="btn">Shopping</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn">Tasks</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn">Rota</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-none d-lg-block col-lg-2">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Future</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button className="btn">Shopping</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn">Tasks</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn">Rota</button>
                    <span className="badge badge-pill badge-danger">4</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default DisplayComponent;
