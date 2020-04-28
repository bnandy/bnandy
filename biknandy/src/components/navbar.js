import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

import "../css/navbar.css"

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg= "dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Images</Nav.Link>
              <Nav.Link href="/">Media</Nav.Link>
              <Nav.Link href="/">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
