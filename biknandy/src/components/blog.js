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
          <Card className = "mb-2" border = "primary" key = {id}>
            <Card.Header>{
              formatTime(props.data[id].time)
            }</Card.Header>
            <Card.Body>
            <Card.Title><h4>{props.data[id].name}</h4></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.data[id].description}</Card.Subtitle>
              <Card.Text>
                <p className = "mb-1">{props.data[id].message}</p><br/>
                <p className = " text-primary">{props.data[id].email}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )

}
