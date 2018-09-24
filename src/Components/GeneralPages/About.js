import React from 'react';
import { Container, Row,  Col,
       } from 'reactstrap';

export default function About(props) {
    return  <section>
         <Container>
          <Row>
            <Col xs="12">
                <div className="temp-filler"><p>This is the about page text.</p></div>
            </Col>
	  </Row>
        </Container>
    </section>;
}
