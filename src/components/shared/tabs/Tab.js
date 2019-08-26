import React from "react";

import {
  Row,
  Col,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane
} from "reactstrap";

const uuid = require("uuid/v4");

export function TabHead({ tabTitles }, props) {
  return tabTitles.map(tabTitle => (
    <NavItem key={uuid()}>
      <NavLink onClick={() => props.toggleTab(tabTitle)}>{tabTitle}</NavLink>
    </NavItem>
  ));
}
export function TabInfo({ tabInfo }) {
  return (
    <TabPane>
      <Row>
        <Col sm="12">{tabInfo}</Col>
      </Row>
    </TabPane>
  );
}
export function TabWrapper({ tabTitles, tabInfo }, props) {
  return (
    <div>
      <Nav tabs className="nav-fill">
        <TabHead tabTitles={tabTitles} toggleTab={props.toggleTab}></TabHead>
      </Nav>
      <TabContent activeTab={props.activeTab}>
        <TabInfo tabInfo={tabInfo} />
      </TabContent>
    </div>
  );
}
