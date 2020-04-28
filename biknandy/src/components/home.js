import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import profile from '../images/bik.png';

export default class Home extends Component {
  render(){
    return(
      <div>
        <Container fluid>
          <Row>
            <Col>
              <div>
                <h1 className = "ml-3 mt-3"> My name is Bik! </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={12} md={12} xs={12} className = "mb-4">
              <img className = "imgr" src={profile} alt="profile" />
            </Col>
            <Col lg = {9} sm={12} md={12} xs={12}>
              <h2> About Me </h2>
              <p>
                Hello! My name is Bik Nandy and I am a student currently pursuing a B.S. in Computer Engineering at UC Santa Barbara with an emphasis in Computer Networks and AI/ML. I have experience in Full-Stack Development and am versed in Javascript (including React & Node), MVC Frameworks, C++, Java, Python, PHP, and HTML/CSS/Bootstrap.
                I have recently completed a year-long Software Engineering internship at Praevium Research, a company that designs semiconductor lasers and photonic integrated circuits. During this internship, I have become well versed in full-stack development, including database design and mobile-first web application production. Praevium’s innovative and supportive work environment and incredible team has greatly fostered my creativity and enthusiasm for technology!
                Walking backwards, making corny jokes, and creatively answering questions from excited students and worried parents as a Gaucho Tour Guide and Anacapa Desk Attendant has highly developed my interpersonal and verbal communication skills. I am excited to bring this endless level of energy and enthusiasm to the workplace!
                Outside of my professional life, I love singing with UCSB’s all-male a cappella group BFOM, playing pick-up basketball, and watching football.
                I am looking to bring my development talents and innovative mindset for an opportunity to help a company grow.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
