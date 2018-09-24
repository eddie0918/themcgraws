import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function About(props) {
  return <section>
    <Container>
      <Row>
        <Col xs="12" className="justify-content-center text-center mt-4 mb-2">
          <h1>Order Confirmation</h1>
        </Col>
      </Row>
      <Row className="cart">
        <Col xs="12">
          <div className="panel">
            <div className="panel-heading pb-1">
              <h4>
                <u>
                  Order Details
                </u>
              </h4>
            </div>
            <div className="panel-body pt-0">
              <h4>
                <u>
                  Item Details
                </u>
              </h4>
              Full details of each item as in the cart.
              <h4>
                <u>
                  Shipping Details
                </u>
              </h4>
              Full details of shipping info as in the cart.
              <h4>
                <u>
                  Payment Details
               </u>
              </h4>
              Payment method & amount charged
	     </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>;
}
