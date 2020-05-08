import React, { Component, useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
import config from '../config.js';
import {Formik} from 'formik';
import * as yup from 'yup';
import Blog from '../components/blog';
const firebase = require("firebase");
export default function Guestbook() {

  const [data, setData] = useState(null)
  const [rend, setRend] = useState(true)

  const schema = yup.object({
    name: yup.string().min(5).max(20).required(),
    description: yup.string().max(100),
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

  const submitForm = (formData) => {
    firebase.database().ref('data').push().set({
      time: firebase.database.ServerValue.TIMESTAMP,
      name: formData.name,
      description: formData.description,
      message: formData.message,
      email: formData.email,
      view: formData.view
    })

    alert("Form submitted!")
  }

  let blog;

  if (data != null){
    blog = <Blog data= {data}/>;
  }

  return(
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className = "ml-3 mt-3"> Send me a message!  </h1>
          </Col>
        </Row>
        <Row>
          <Col className = "ml-3 mr-5 mb-2" xs={12} sm={6}>
            <Card border = "primary">
              <Card.Body>
                <Formik
                  validationSchema={schema}
                  onSubmit={(values, {resetForm}) => {
                    submitForm(values);
                    resetForm();
                  }}
                  initialValues={{
                    name: "",
                    description: "",
                    message: "",
                    email: "",
                    view: false,
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
                        <Form.Group as={Col} controlId="validationFormik01">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your name here"
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
                        <Form.Group as={Col} controlId="validationFormik02">
                          <Form.Label>Brief Description</Form.Label>
                          <Form.Control
                            type="text"
                            name="description"
                            placeholder="Describe yourself (optional)"
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
                        <Form.Group as={Col} controlId="validationFormik03">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            type="text"
                            name="message"
                            placeholder="Type something fun!"
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
                        <Form.Group as={Col} controlId="validationFormik04">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            placeholder="Will not be posted (optional)"
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
                            label="Select to make your post public"
                            onChange={handleChange}
                            id="validationFormik05"
                            feedback={errors.view}
                          />
                        </Form.Group>
                      </Form.Row>

                      <Button type="submit">Submit form</Button>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>

          </Col>
          <Col className = "ml-2" xs ={12} sm = {4}>
            {blog}
          </Col>
        </Row>
      </Container>
    </div>
  )

}
