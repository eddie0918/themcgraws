import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default function MainPage(props) {
  return (
    <section {...props}>
      {props.history &&
        <Button
          color="primary"
          className="d-md-block m-3"
          onClick={() => props.history.goBack()}
        >
          Back
        </Button>
      }
      <Container>
        <Row>
          <Col xs="12" className="justify-content-center text-center mt-4 mb-2">
            <h1>{props.title}</h1>
          </Col>
          <Col xs="12" md={{ size: 8, offset: 2 }} className="justify-content-center mb-2 text-center">
            <p>{props.description}</p>
          </Col>
          {props.children}
        </Row>
      </Container>
    </section>
  )
}
