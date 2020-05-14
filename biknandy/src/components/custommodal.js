import React, { Component, useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button, Card, Image, Modal} from 'react-bootstrap';


export default function CustomModal(props) {

  return(
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{props.movieData.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )

}
