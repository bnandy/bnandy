import React, { Component, useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import config from '../config.js';
import {Formik} from 'formik';
import * as yup from 'yup';
const firebase = require("firebase");
export default function Guestbook() {

  const [data, setData] = useState([])
  const [rend, setRend] = useState(true)

  const schema = yup.object({
    name: yup.string().max(100).required(),
    description: yup.string(),
    message: yup.string().min(15).max(500).required(),
    email: yup.string().email(),
    view: yup.bool(),
  });

  useEffect(() => {
      if (!firebase.apps.length) {
         firebase.initializeApp(config)
      }

      let ref = firebase.database().ref('data');

      ref.on ('value', snapshot => {
        const state = snapshot.val()
        setData (state)
      })
  },[rend])

  return(
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className = "ml-3 mt-3"> Guestbook </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Formik
              validationSchema={schema}
              onSubmit={values => {
                alert(values)
              }}
              initialValues={{
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        isInvalid={!!errors.description}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.description}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik03">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        type="text"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik04">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <Form.Check
                        name="view"
                        label="View for Others"
                        onChange={handleChange}
                        id="validationFormik0"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Button type="submit">Submit form</Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Row className = "pt-3 pl-3 mr-md-0 mr-3 justify-content-md-center">
          {data}
        </Row>
      </Container>
    </div>
  )

}
