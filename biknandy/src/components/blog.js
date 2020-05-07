import React, { Component, useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

export default function Blog(props) {

  const formatTime = (time) => {
    const timestamp = new Date(time);
    var formattedTimestamp = Intl.DateTimeFormat('en-US',{
      dateStyle: "short",
      timeStyle: "short",
    }).format(timestamp);
    return formattedTimestamp;
  }

  return(
    <div>
      <div className = "blog">
        {Object.keys(props.data).slice(0).reverse().map((id) => (
          props.data[id].view ? <Card className = "mb-2" border = "danger" key = {id}>
            <Card.Header>{
              formatTime(props.data[id].time)
            }</Card.Header>
            <Card.Body>
              <Card.Title className = "mb-1"><h4>{props.data[id].name}</h4></Card.Title>
              <Card.Subtitle className="mb-3 text-muted">{props.data[id].description}</Card.Subtitle>
              <p>{props.data[id].message}</p>
            </Card.Body>
          </Card> : <div />

        ))}
      </div>
    </div>
  )

}
