import React from 'react';
import {
  Container, Row, Col,
  ListGroup, ListGroupItem
} from 'reactstrap';

export default function Footer(props) {
  return <section>
    <div className="pt-0 pb-0 footer footer-dark">
      <Container fluid className="redcross">
        <Row>
          <Col xs="12" className="text-center justify-content-center">
            <p>An Official Donation Site of the American Red Cross</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="pt-3">
          <Col xs="6" md>
            <h5 className="heading h6 text-uppercase font-weight-700 mb-3">Column One</h5>
            <ListGroup className="list-unstyled text-small">
              <ListGroupItem tag="a" href="#" className="text-muted">Link One</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Two</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Three</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Four</ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="6" md>
            <h5 className="heading h6 text-uppercase font-weight-700 mb-3">Column Two</h5>
            <ListGroup className="list-unstyled text-small">
              <ListGroupItem tag="a" href="#" className="text-muted">Link One</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Two</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Three</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Four</ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="6" md>
            <h5 className="heading h6 text-uppercase font-weight-700 mb-3">Column Three</h5>
            <ListGroup className="list-unstyled text-small">
              <ListGroupItem tag="a" href="#" className="text-muted">Link One</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Two</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Three</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Four</ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="6" md>
            <h5 className="heading h6 text-uppercase font-weight-700 mb-3">Column Four</h5>
            <ListGroup className="list-unstyled text-small">
              <ListGroupItem tag="a" href="#" className="text-muted">Link One</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Two</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Three</ListGroupItem>
              <ListGroupItem tag="a" href="#" className="text-muted">Link Four</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <hr />
        <div className="d-flex align-items-center">
          <span>
            &copy; 2018 <a href="https://www.charitygiftcertificates.org/" className="footer-link" target="_blank" rel="noopener noreferrer">Charity Choice</a>. All rights reserved.
           </span>
          <ListGroup className="nav ml-lg-auto">
            <ListGroupItem className="nav-item nav-link" href="#" target="_blank"><i className="fab fa-facebook"></i></ListGroupItem>
            <ListGroupItem className="nav-item nav-link" href="#" target="_blank"><i className="fab fa-twitter"></i></ListGroupItem>
          </ListGroup>
        </div>
      </Container>
    </div>
  </section>;
}
