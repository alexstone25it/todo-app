import React, { Component } from "react";

import { Row, Col, Table, Button, Badge } from "reactstrap";

import ShoppingAddon from "./addons/shopping/ShoppingAddon";
import TaskAddon from "./addons/tasks/TaskAddon";
import RotaAddon from "./addons/rota/RotaAddon";

class TodosComponent extends Component {
  render() {
    return (
      <main className="container-fluid p-0 TodoodleComponent">
        <Row>
          <Col xs="12" md="7">
            <Table>
              <thead>
                <tr>
                  <th scope="col">
                    Today
                    <span className="ml-2 mr-2">
                      <Button
                        className="Button--small"
                        style={{ padding: ".2rem .8rem" }}
                      >
                        >
                      </Button>
                    </span>
                    <span className="mr-2">
                      <Button className="Button--small">>></Button>
                    </span>
                    <span className="mr-2">
                      <Button className="Button--small">>>></Button>
                    </span>
                    <span>
                      <Button className="Button--small">>>>></Button>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <RotaAddon />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TaskAddon />
                  </td>
                </tr>
                <tr>
                  <td>
                    <ShoppingAddon />
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
                    <Button className="App__Button Button--large">
                      Shopping
                    </Button>
                    <Badge pill>4</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button className="App__Button Button--large">Tasks</Button>
                    <Badge>4</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button className="App__Button Button--large">Rota</Button>
                    <Badge pill>4</Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md="2" className="d-none d-md-block">
            <Row>Day after tomorrow</Row>
            <Row>Week</Row>
            <Row>Month</Row>
            <Row>Eventually</Row>
          </Col>
        </Row>
      </main>
    );
  }
}

export default TodosComponent;
{
  /* <Col lg="2" className="d-none d-lg-block">
            <Table>
              <thead>
                <tr>
                  <th scope="col">Day after tomorrow</th>
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
          <Col lg="1" className="d-none d-lg-block">
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
          <Col lg="1" className="d-none d-lg-block">
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
            </Table>*/
}
