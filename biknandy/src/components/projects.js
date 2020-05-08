import React, { Component } from 'react';
import {Button, Container, Row, Col, Card} from 'react-bootstrap';
import icon from '../images/icon.png';
import dino from '../images/dino.jpg';
import home from '../images/home.png';
import red from '../images/reddit.png';

export default class Projects extends Component {
  render(){
    return(
      <div>
        <Container fluid>
          <div>
            <h1 className = "ml-3 mt-3"> Projects </h1>
          </div>
          <Row className = "pt-3 pl-3">
            <Col lg={8} sm={12} md={12} className = "px-4">

              <Card className = "mb-4">
                <Card.Body>
                  <div className = "flex-display">
                    <div className = "mr-4">
                      <img height = "100" width = "100" src={icon} alt="icon" />
                    </div>
                    <div>
                      <h3> BestFaceForward: UCSB CS Capstone 2nd Place </h3>
                      <Button href="https://github.com/biknandy/No-Cap-Stone">Github</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className = "mb-4">
                <Card.Body>
                  <div className = "flex-display">
                    <div className = "mr-4">
                      <img height = "100" width = "100" src={dino} alt="dino" />
                    </div>
                    <div>
                      <h3> BFOM Website </h3>
                      <Button href="https://brothasfom.org/">Link</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className = "mb-4">
                <Card.Body>
                  <div className = "flex-display">
                    <div className = "mr-4">
                      <img height = "100" width = "100" src={home} alt="home" />
                    </div>
                    <div>
                      <h3> CRIB - A Smart Home Solution </h3>
                      <Button href="https://devpost.com/software/crib">Devpost</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className = "mb-4">
                <Card.Body>
                  <div className = "flex-display">
                    <div className = "mr-4">
                      <img height = "100" width = "100" src={red} alt="red" />
                    </div>
                    <div>
                      <h3> textdit - SMS/MMS Reddit Viewer </h3>
                      <Button href="https://devpost.com/software/texdit">Devpost</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          </Row>
<<<<<<< HEAD
=======
          <Row>

          </Row>
>>>>>>> parent of 7e72367d... Updates
        </Container>
      </div>
    )
  }
}
