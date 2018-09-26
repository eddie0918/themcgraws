import React from 'react';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
// import ShippingTypePicker from './ShippingTypePicker';
import DeliveryMethodSelect from '../../MiscComponents/DeliveryMethodSelect'
import CardAmountSelect from '../../MiscComponents/CardAmountSelect'

export default class CardDetailForm extends React.Component {
  constructor(props) {
    super(props);

    const cardInfo = props.cardInfo || {
      DeliveryMethod: '',
      Amount: '',
      SendingDate: '',
      CardGreeting: '',
      CardMessage: 'Redeem for the cause closest to your heart ... enjoy!',
      RecipientFirstName: '',
      RecipientLastName: '',
      RecipientEmail: ''
    };

    this.state = { cardInfo };
  }

  render() {
    const { cardInfo } = this.state;
    return (
      <div className="form-panel">
        <Row>
          <Col>
            <div className="has-float-label w-50 d-none d-sm-inline-block cc-half-left">
              <DeliveryMethodSelect
                selectedValue={cardInfo.DeliveryMethod}
                onChange={(selectedMethod) => {
                  cardInfo.DeliveryMethod = selectedMethod;
                  this.setState({ cardInfo: cardInfo });
                }} />
              <Label for="deliveryMethodSelect" className="float-label-select">Choose method of delivery</Label>
            </div>
            <div className="has-float-label w-50 d-none d-sm-inline-block cc-half-right">
              <CardAmountSelect
                selectedValue={cardInfo.Amount}
                onChange={(selectedAmount) => {
                  cardInfo.Amount = selectedAmount;
                  this.setState({ cardInfo: cardInfo });
                }} />
              <Label for="cardAmountSelect" className="float-label-select">Select Amount</Label>
            </div>
            <FormGroup className="has-float-label d-block">
              <Input type="Date"
                name="sendingDate"
                id="sendingDate"
                placeholder="Send immediately"
                defaultValue={cardInfo.SendingDate}
                onChange={(e) => {
                  cardInfo.SendingDate = e.target.value;
                  this.setState({ cardInfo: cardInfo });
                }} />
              <Label for="sendingDate">Send immediately</Label>
            </FormGroup>
            <FormGroup className="has-float-label">
              <Input
                type="text"
                name="cardGreeting"
                id="cardGreeting"
                placeholder="Enter the card greeting"
                defaultValue={cardInfo.CardGreeting}
                onChange={(e) => {
                  cardInfo.CardGreeting = e.target.value;
                  this.setState({ cardInfo: cardInfo });
                }}
              />
              <Label for="cardGreeting">Enter the card greeting</Label>
            </FormGroup>
            <FormGroup className="has-float-label">
              <Input
                type="textarea"
                name="cardMessage"
                id="cardMessage"
                placeholder="Type mesage"
                defaultValue={cardInfo.CardMessage}
                onChange={(e) => {
                  cardInfo.CardMessage = e.target.value;
                  this.setState({ cardInfo: cardInfo });
                }}
              />
              <Label for="cardMessage">Type mesage</Label>
            </FormGroup>


            
            <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-left">
              <Input type="text"
                name="recipientFirstName"
                id="recipientFirstName"
                placeholder="Recipient First Name"
                defaultValue={cardInfo.ShippingFirstName}
                onChange={(e) => {
                  cardInfo.RecipientFirstName = e.target.value;
                  this.setState({ cardInfo: cardInfo });
                }} />
              <Label for="recipientFirstName">Recipient First Name</Label>
            </FormGroup>
            <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-right">
              <Input
                type="text"
                name="recipientLastName"
                id="recipientLastName"
                placeholder="Recipient Last Name"
                defaultValue={cardInfo.RecipientLastName}
                onChange={(e) => {
                  cardInfo.RecipientLastName = e.target.value;
                  this.setState({ cardInfo: cardInfo });
                }} />
              <Label for="recipientLastName">Recipient Last Name</Label>
            </FormGroup>
            <FormGroup className="has-float-label">
              <Input
                type="email"
                name="recipientEmail"
                id="recipientEmail"
                placeholder="Recipient Email"
                defaultValue={cardInfo.RecipientEmail}
                onChange={(e) => {
                  cardInfo.RecipientEmail = e.target.value;
                  this.setState({ cardInfo: cardInfo });
                }}
              />
              <Label for="recipientEmail">Recipient Email</Label>
            </FormGroup>
            <div className="text-center justify-content-center">
              <Button
                color="primary"
                className="d-none d-md-block"
                onClick={() => this.props.onUpdateShippinginfo()}>Add This Card</Button>
              <Button
                color="primary"
                block
                className="d-md-none"
                onClick={() => this.props.onUpdateShippinginfo()}>Add This Card</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

