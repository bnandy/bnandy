import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper
<<<<<<< HEAD
import SimpleReactLightbox from "simple-react-lightbox";
=======
>>>>>>> parent of 7e72367d... Updates

import sing from '../images/sing.jpg';
import la from '../images/la.jpg';
import wood from '../images/wood.jpg';
import harry from '../images/harry.jpg';
import bhouse from '../images/bhouse.jpg';
import holiday from '../images/holiday.jpg';

export default class Images extends Component {
  render(){
    const options = {
      showCaption: false,
      showThumbnails: false,
      showDownloadButton: false,
      hideControlsAfter: 1000
    }
    return(
<<<<<<< HEAD
      <SimpleReactLightbox>
        <div>
          <Container fluid>
            <Row>
              <Col>
                <div>
                  <h1 className = "ml-3 mt-3"> Pics of Me </h1>
                </div>
              </Col>
            </Row>
            <Row className = "pt-3">
              <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
                <SRLWrapper options = {options}>
                  <img className = "imgr" src={sing} alt = "sing"/>
                </SRLWrapper>
              </Col>
              <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
                <SRLWrapper options = {options}>
                  <img className = "imgr" src={la}/>
                </SRLWrapper>
              </Col>
              <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
                <SRLWrapper options = {options}>
                  <img className = "imgr" src={wood}/>
                </SRLWrapper>
              </Col>
              <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
                <SRLWrapper options = {options}>
                  <img className = "imgr" src={harry}/>
                </SRLWrapper>
              </Col>
              <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
                <SRLWrapper options = {options}>
                  <img className = "imgr" src={bhouse}/>
                </SRLWrapper>
              </Col>
              <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
                <SRLWrapper options = {options}>
                  <img className = "imgr" src={holiday}/>
                </SRLWrapper>
              </Col>
            </Row>
          </Container>
        </div>
      </SimpleReactLightbox>
=======
      <div>
        <Container fluid>
          <Row>
            <Col>
              <div>
                <h1 className = "ml-3 mt-3"> Pics of Me </h1>
              </div>
            </Col>
          </Row>
          <Row className = "pt-3">
            <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
              <SRLWrapper options = {options}>
                <img className = "imgr" src={sing} alt = "sing"/>
              </SRLWrapper>
            </Col>
            <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
              <SRLWrapper options = {options}>
                <img className = "imgr" src={la}/>
              </SRLWrapper>
            </Col>
            <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
              <SRLWrapper options = {options}>
                <img className = "imgr" src={wood}/>
              </SRLWrapper>
            </Col>
            <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
              <SRLWrapper options = {options}>
                <img className = "imgr" src={harry}/>
              </SRLWrapper>
            </Col>
            <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
              <SRLWrapper options = {options}>
                <img className = "imgr" src={bhouse}/>
              </SRLWrapper>
            </Col>
            <Col lg={3} md={4} sm ={12} className = "pl-4 pb-4 text-center">
              <SRLWrapper options = {options}>
                <img className = "imgr" src={holiday}/>
              </SRLWrapper>
            </Col>
          </Row>
        </Container>
      </div>
>>>>>>> parent of 7e72367d... Updates
    )
  }
}
