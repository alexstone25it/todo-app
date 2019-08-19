import React, { Component } from "react";
import "./TodoodleComponent.css";

import { Row, Col, Table, Button, Badge } from "reactstrap";

import ShoppingAddon from "./addons/shopping/ShoppingAddon";
import TaskAddon from "./addons/tasks/TaskAddon";
import RotaAddon from "./addons/rota/RotaAddon";

class TodosComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="container-fluid p-0 TodoodleComponent">
        <Row>
          <Col xs="12" md="9" lg="5">
            <Table>
              <thead>
                <tr>
                  <th scope="col">Today</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ShoppingAddon />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TaskAddon />
                  </td>
                </tr>
                <tr>
                  <td>
                    <RotaAddon />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md="3" lg="3" className="d-none d-md-block">
            <Table>
              <thead>
                <tr>
                  <th scope="col">Tomorrow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Button outline>Shopping</Button>
                    <Badge pill>4</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline>Tasks</Button>
                    <Badge>4</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline>Rota</Button>
                    <Badge pill>4</Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col lg="2" className="d-none d-lg-block">
            <Table>
              <thead>
                <tr>
                  <th scope="col">Week</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Button outline>Shopping</Button>
                    <Badge>4</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline>Tasks</Button>
                    <Badge pill>4</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline>Rota</Button>
                    <Badge pill>4</Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col lg="2" className="d-none d-lg-block">
            <Table>
              <thead>
                <tr>
                  <th scope="col">Month</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Button outline>Shopping</Button>
                    <Badge pill>4</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline>Tasks</Button>
                    <Badge>4</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline>Rota</Button>
                    <Badge pill>4</Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </main>
    );
  }
}

export default TodosComponent;
