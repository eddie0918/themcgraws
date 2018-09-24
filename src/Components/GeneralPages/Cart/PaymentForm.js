import React from 'react';
import { UncontrolledCollapse, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import ReactCreditCard from 'react-credit-cards';
import Payment from 'payment';
import '../../../../src/css/styles-compiled.css';
import PersonalInformationForm from './PersonalInformationForm';

export default class PaymentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      focused: '',
    };
  }

  componentDidMount() {
    Payment.formatCardNumber(document.querySelector('[name="number"]'));
    Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
    Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      this.setState({
        [target.name]: target.value.replace(/ /g, ''),
      });
    }
    else if (target.name === 'expiry') {
      this.setState({
        [target.name]: target.value.replace(/ |\//g, ''),
      });
    }
    else {
      this.setState({
        [target.name]: target.value,
      });
    }
  };

  handleCallback(type, isValid) {
    console.log(type, isValid); //eslint-disable-line no-console
  }
    render() {

    const { name, number, expiry, cvc, focused } = this.state;
    return (
<div className="w-100 m-3">
   <Col xs="12" className="w-100 text-center justify-content">
    <p><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" /></p>
    <span className="d-inline-block mx-4 mb-3"> OR </span>
    <p><Button color="primary" id="payment-toggler" style={{ marginBottom: '1rem' }}>Pay with your Credit Card</Button></p>
   </Col>
   <UncontrolledCollapse toggler="#payment-toggler">
    <Row>
     <Col xs="12" md="6">
      <div className="panel cc-panel-height">
       <div className="panel-heading pb-0">
        <h4><u>Donor Name</u></h4>
       </div>
       <div className="panel-body pt-0">
	<PersonalInformationForm />
       </div>
      </div>
     </Col>
     <Col xs="12" md="6">
      <div className="panel cc-panel-height">
       <div className="panel-heading pb-1">
        <h4><u>Credit Card Information</u></h4>
       </div>
       <div className="panel-body pt-0">
        <div>
         <div>
          <ReactCreditCard
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <Form className="card-label mt-4">
	     <FormGroup className="has-float-label">
              <Input
                type="tel"
		id="number"
                name="number"
                placeholder="Card Number"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
	      <Label for="number" >Card Number</Label>
	     </FormGroup>
	     <FormGroup className="has-float-label">
              <Input
                type="text"
		id="name"
                name="name"
                placeholder="Name"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
	      <Label for="name">Name</Label>
	     </FormGroup>
	     <FormGroup className="has-float-label cc-half-left d-inline-block">
              <Input
                type="tel"
		id="expiry"
                name="expiry"
                placeholder="Valid Thru"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
	      <Label for="expiry">Exp</Label>
	     </FormGroup>
	     <FormGroup className="has-float-label cc-half-right d-inline-block">
              <Input
                type="tel"
		id="cvc"
                name="cvc"
                placeholder="CVC"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
	      <Label for="cvc">CVC</Label>
	    </FormGroup>
	    <span className="w-100 text-center d-inline-block"><Button color="primary">Submit Payment</Button></span>
          </Form>
         </div>
        </div>
       </div>
      </div>
     </Col>
    </Row>
   </UncontrolledCollapse>
</div>
        )
    }
}
