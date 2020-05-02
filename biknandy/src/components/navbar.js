import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

import "../css/navbar.css"

export default class NavBar extends React.Component {
  constructor(){
    super();
    this.state= {
      activeTab: "1"
    }

  }

  changeTab = (id) => {
    this.setState({
       activeTab: id}, () => {
        alert(this.state.activeTab);//this will print the updated state value
      })

  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg= "dark" variant="dark" className = "navbar navbar-static-top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant = "pills" className="mr-auto" activeKey = {this.state.activeTab} onSelect = {(selected) => this.changeTab(selected)}>
              <Nav.Item>
                <Nav.Link eventKey = "1" href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey = "2" href="/images">Images</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey = "3" href="/media">Media</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey = "4" href="/projects">Projects</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
