import React, { Component, useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button, Card, Image, Modal} from 'react-bootstrap';

//return a custom modal that takes in elements of the clicked element
export default function CustomModal(props) {
  return(
    <>
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.movieData.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className = "text-center pb-1">
          <p><strong>Directed by {props.movieData.Director}</strong></p>
        </div>
        <div className = "text-center">
          <Image src={props.movieData.Poster} fluid />
        </div>
        <div className = "mt-3">
          <p><em>{props.movieData.Plot}</em></p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p className = "mr-auto bg-warning"> Rating: {props.movieData.imdbRating}/10</p>
        <p className = "text-center"> {props.movieData.Released}</p>
      </Modal.Footer>
    </Modal>
    </>
  )

}
