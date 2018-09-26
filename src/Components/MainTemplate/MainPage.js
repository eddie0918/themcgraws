import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function MainPage(props) {
  return (
    <section {...props}>
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
