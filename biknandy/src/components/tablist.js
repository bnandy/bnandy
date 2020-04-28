import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import "../css/navbar.css"

export default class TabList extends Component {

  search = (nameKey, myArray) => {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            console.log(myArray[i].title)
            return myArray[i].title;
        }
    }
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg= "dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant = "pills" defaultActiveKey="Home" className="mr-auto">
              {
                this.props.tabs.map((tab)=>(

                  <Nav.Item >
                    <Nav.Link eventKey = {tab.title} onClick = {this.props.changeTab.bind(this, tab.id)}>{tab.title}</Nav.Link>
                  </Nav.Item>

                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
