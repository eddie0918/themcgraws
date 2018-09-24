import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import PhysicalTab from './PhysicalComponents/PhysicalTab';

export default class PhysicalCards extends Component {
  render() {
    return <section>
      <Container>
        <Row>
          <Col xs="12" className="justify-content-center text-center mt-4 mb-2">
            <h1>Physical Cards</h1>
          </Col>
          <Col xs="12" md={{ size: 8, offset: 2 }} className="justify-content-center mb-2 text-center">
            <p>You can have cards shipped to you for in-person giving or shipped directly to the recipient. Want to order in bulk? Use our <Link to='/Purchase/CustomPhysicalCards'>Custom Physical Cards page</Link>.</p>
          </Col>
        </Row>
        <Row className="ml-3 mr-0">
          <Col xs="12" className="pr-0">
            <PhysicalTab />
          </Col>
        </Row>
      </Container>

    </section>
  }

}

