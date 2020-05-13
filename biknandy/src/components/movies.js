import React, { Component, useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';

export default function Movies() {

  const [data, setData] = useState(null)
  const [rend, setRend] = useState(true)


  return(
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className = "ml-3 mt-3"> My Favorite Movies </h1>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </div>
  )

}
