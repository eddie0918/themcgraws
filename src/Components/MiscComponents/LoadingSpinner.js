import React from 'react';
import { Container, Row } from 'reactstrap';
import '../../css/loadingSpinner.css';

export default function (props) {
  return <Container className='loadingContainer'>
    <Row>
      <div id="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="lading"></div>
      </div></Row>
    <Row>
      <h1 className="text-warn">{props.text}</h1>
    </Row>
  </Container>;
}