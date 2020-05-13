import React, { Component, useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button, Card, CardGroup} from 'react-bootstrap';
import movies from "../movies.json";
import axios from 'axios';

  //ed114b73 - API KEY

export default function Movies() {
  const [completeMovieData, setMovieData] = useState([])
  const [rend, setRend] = useState(true)

  var promises = [];
  var movieData = [];


  //retrieve all information from axios
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
  console.log(completeMovieData)
  return(
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className = "ml-3 mt-3"> My Favorite Movies </h1>
          </Col>
        </Row>
        <Row>
          <CardGroup>
            {completeMovieData.map((movieObj)=> (
              <Card>
                <Card.Body>
                  {movieObj.Title}
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </div>
  )

}
