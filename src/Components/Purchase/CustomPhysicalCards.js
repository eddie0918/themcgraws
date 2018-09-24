import React from 'react';
import { Container, Row,  Col,
       } from 'reactstrap';

export default function CustomPhysicalCards(props) {
    return  <section>
         <Container>
          <Row>
            <Col xs="12">
                <div className="temp-filler"><p>This is the custom physical cards page text.</p></div>
            </Col>
	        </Row>
        </Container>
    </section>;
}
