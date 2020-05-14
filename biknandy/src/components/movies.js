import React, { Component, useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button, Card, CardColumns, Image, Modal} from 'react-bootstrap';
import movies from "../movies.json";
import axios from 'axios';
import CustomModal from './custommodal'

//ed114b73

export default function Movies() {
  const [completeMovieData, setMovieData] = useState([])
  const [show, setShow] = useState(false)
  const [modalInfo, setModalInfo] = useState({})

  const handleClose = () => setShow(false);

  //click handler for image
  const handleShow = (movieObj) => {
    setModalInfo(movieObj);
    setShow(true);
  }

  var promises = [];
  var movieData = [];

  //retrieve all information with axios from omdbAPI
  useEffect(() => {
    Object.values(movies).forEach((movieID) => {
      var url = "http://www.omdbapi.com/?apikey=ed114b73&i="+movieID;
      promises.push (axios.get(url));
    });

    axios.all(promises).then((results) => {
      results.forEach((res) => {
          movieData.push(res.data)
      })
      setMovieData(movieData)
    });
  });

  return(
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className = "ml-3 my-3"> My Favorite Movies </h1>
          </Col>
        </Row>
        <Row className="text-center">
          {completeMovieData.map((movieObj)=> (
            <Col xs={12} md={4} lg={2} key={movieObj.Title}>
              <div className = "imgHov">
                <Image src={movieObj.Poster} onClick= {() => handleShow(movieObj)} fluid />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <CustomModal show = {show} handleClose = {handleClose} movieData = {modalInfo}/>
    </div>
  )

}
