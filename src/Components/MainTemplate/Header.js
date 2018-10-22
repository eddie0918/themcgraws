import React from 'react';
import Logo from '../../images/CharityChoiceLogo-Flat-Comp.svg';
import {
  Container, Row, Col,
  Form, FormGroup, Input,
  InputGroup, InputGroupAddon, InputGroupText,
  NavbarBrand, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Header(props) {
  return <section>
    <Container>
      <Row className="row header-row justify-content-center align-items-center">
        <Col xs="12" sm="10" md="8" lg="4" className="text-center">
          <Link to='/'><NavbarBrand><img src={Logo} alt="CharityChoice Logo" /></NavbarBrand></Link>
        </Col>
        <Col xs="12" md="9" lg="6" className="text-center">
          <Form inline className="justify-content-center d-none d-md-block">
            <FormGroup className="justify-content-center">
              <InputGroup className="header-redemption-form input-group-transparent">
                <Input type="text" placeholder="Redeem Your Card" className="form-control" />
                <InputGroupAddon addonType="append">
                  <InputGroupText><i className="fas fa-money-bill-alt"></i></InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <InputGroup className="header-redemption-button input-group-transparent">
                <Button color="primary">Redeem</Button>
              </InputGroup>
            </FormGroup>
          </Form>
          <Form inline className="justify-content-center d-md-none">
            <FormGroup className="header-form-group justify-content-center">
              <InputGroup className="header-redemption-form input-group-transparent">
                <Input type="text" placeholder="Redeem Your Card" className="form-control" />
                <InputGroupAddon addonType="append">
                  <InputGroupText><i className="fas fa-money-bill-alt"></i></InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <InputGroup className="header-redemption-button input-group-transparent">
                <Button color="primary" block>Redeem</Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
        <Col xs="12" md="3" lg="2" className="buy-now-button text-center justify-content-center">
          <Button color="primary" className="d-none d-md-block">Give Now!</Button>
          <Button color="primary" block className="d-md-none">Give Now!</Button>
        </Col>
      </Row>
    </Container>
  </section>;
}
