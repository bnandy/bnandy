import React, { Component } from 'react';
import {ResponsiveEmbed, Container, Row, Col} from 'react-bootstrap';

export default class Media extends Component {
  render(){
    return(
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h1 className = "ml-3 mt-3"> Media </h1>
            </Col>
          </Row>
          <Row className = "pt-3 pl-3 mr-md-0 mr-3 justify-content-md-center">
            <ResponsiveEmbed className = "col-lg-5 col-md-12 col-sm-12 mb-4 mr-3" aspectRatio="16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/KL1TJ1Tk_IE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </ResponsiveEmbed>
            <ResponsiveEmbed className = "col-lg-3 col-md-3 col-sm-12 mb-4 text-center mr-3" aspectRatio="1by1">
              <iframe className="embed-responsive-item text-center" src="https://open.spotify.com/embed/album/2gluD3lGruEr432nJtNFuS" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </ResponsiveEmbed>
            <ResponsiveEmbed className = "col-lg-3 col-md-3 col-sm-12 mb-4 text-center mr-3" aspectRatio="1by1">
              <iframe className="embed-responsive-item text-center" src="https://open.spotify.com/embed/album/3kEsbQavVT51PtOTLY4Q5R" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </ResponsiveEmbed>
            <ResponsiveEmbed className = "col-lg-3 col-md-3 col-sm-12 mb-4 text-center mr-3" aspectRatio="1by1">
              <iframe className="embed-responsive-item text-center" src="https://open.spotify.com/embed/album/6RtYCQ7cx03yCWkuDsQE9l" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </ResponsiveEmbed>
            <ResponsiveEmbed className = "col-lg-3 col-md-3 col-sm-12 mb-4 text-center mr-3" aspectRatio="1by1">
              <iframe className="embed-responsive-item text-center" src="https://open.spotify.com/embed/album/6G9DX8QdBcv9Nmag8nuM1f" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </ResponsiveEmbed>
            <ResponsiveEmbed className = "col-lg-5 col-md-12 col-sm-12 mb-4 mr-3" aspectRatio="16by9">
              <iframe className="embed-responsive-item"src="https://www.youtube.com/embed/obkrMiyDrbs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </ResponsiveEmbed>

          </Row>
        </Container>
      </div>
    )
  }
}
