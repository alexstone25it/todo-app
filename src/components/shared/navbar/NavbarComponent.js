import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.navbarToggleHandler = this.navbarToggleHandler.bind(this);
    this.state = {
      navbaropen: false
    };
  }
  navbarToggleHandler() {
    this.setState({
      navbaropen: !this.state.navbaropen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.navbarToggleHandler} />
          <Collapse isOpen={this.state.navbaropen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Add a Todoodles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Remove a Todoodles</NavLink>
              </NavItem>

              <NavItem>
                <NavLink>View as Calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>View as Overview</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  View only
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>shopping</DropdownItem>
                  <DropdownItem>tasks</DropdownItem>
                  <DropdownItem>rota</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
