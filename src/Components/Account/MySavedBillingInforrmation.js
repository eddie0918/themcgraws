import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, Label, Button, Input, FormFeedback } from 'reactstrap';
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CustomSelect from '../MiscComponents/CustomSelect';
import { CountryList, CreditCardList, MonthList, ExpirationYearList } from '../MockData'

export default class MySavedBillingInformationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      billing: {
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        city: '',
        state: CountryList[0],
        zip: ''
      },
      card: {
        type: CreditCardList[0],
        number: 0,
        expirationMonth: MonthList[0],
        expirationYear: ExpirationYearList[0],
        VerficationCode: ''
      }
    };
  }

  save() {

  }
  render() {
    const { billing, card, submitted } = this.state;
    return (
      <MainPage className='cart' title='My Saved Billing Information'>
        <Link className="mt-4 btn-link position-absolute" to='/Account'>Back</Link>
        <MainSection className="container-fluid">
          <div className="form-panel p-5 mb-5 container-fluid">
            <Row>
              <Col xs="12" md="6">
                <h4 className=".d-inline-block mb-4 vertical-align underline-title">Billing Personal Information</h4>
                <FormGroup className="has-float-label">
                  <Input
                    name="billingFirstname"
                    id="billingFirstname"
                    placeholder="First Name"
                    invalid={submitted && !billing.firstname}
                    value={billing.firstname}
                    onChange={(e) => {
                      billing.firstname = e.target.value;
                      this.setState({ billing, submitted: false });
                    }}
                  />
                  <Label for="billingFirstname">First Name</Label>
                  <FormFeedback>First name is required</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    name="billingLastname"
                    id="billingLastname"
                    placeholder="Last Name"
                    invalid={submitted && !billing.lastname}
                    value={billing.lastname}
                    onChange={(e) => {
                      billing.lastname = e.target.value;
                      this.setState({ billing, submitted: false });
                    }}
                  />
                  <Label for="billingLastname">Last Name</Label>
                  <FormFeedback>Last name is required</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    name="billingPhone"
                    id="billingPhone"
                    placeholder="Phone"
                    value={billing.phone}
                    onChange={(e) => {
                      billing.phone = e.target.value;
                      this.setState({ billing, submitted: false });
                    }}
                  />
                  <Label for="billingPhone">Phone</Label>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="text"
                    name="billingAddress"
                    id="billingAddress"
                    placeholder="Address"
                    value={billing.address}
                    onChange={(e) => {
                      billing.address = e.target.value;
                      this.setState({ billing, submitted: false });
                    }}
                  />
                  <Label for="city">Address</Label>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="text"
                    name="billingCity"
                    id="billingCity"
                    placeholder="City"
                    defaultValue={billing.city}
                    onChange={(e) => {
                      billing.city = e.target.value;
                      this.setState({ billing, submitted: false });
                    }}
                  />
                  <Label for="billingCity">City</Label>
                </FormGroup>
                <div className="has-float-label">
                  <CustomSelect
                    name="billingState"
                    placeholder="State"
                    options={CountryList}
                    selectedValue={billing.state}
                    onChange={(selectedState) => {
                      billing.state = selectedState;
                      this.setState({ billing, submitted: false });
                    }}
                  />
                </div>
                <FormGroup className="has-float-label">
                  <Input
                    type="text"
                    name="billingZip"
                    id="billingZip"
                    placeholder="ZIP Code"
                    defaultValue={billing.zip}
                    onChange={(e) => {
                      billing.zip = e.target.value;
                      this.setState({ billing, submitted: false });
                    }}
                  />
                  <Label for="billingZip">ZIP Code</Label>
                </FormGroup>
              </Col>
              <Col xs="12" md="6">
                <h4 className=".d-inline-block mb-4 vertical-align underline-title">Credit Card Information</h4>
                <FormGroup className="has-float-label">
                  <CustomSelect
                    name="cardType"
                    id="cardType"
                    placeholder="Credit Card Type"
                    options={CreditCardList}
                    selectedValue={card.type}
                    onChange={(selectedType) => {
                      card.type = selectedType;
                      this.setState({ card, submitted: false });
                    }}
                  />
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="Credit Card Number"
                    value={card.number}
                    onChange={(e) => {
                      card.number = e.target.value;
                      this.setState({ card });
                    }}
                  />
                  <Label for="cardNumber">Credit Card Number</Label>
                </FormGroup>
                <div className="has-float-label w-50 d-sm-inline-block cc-half-left">
                  <CustomSelect
                    name="expirationMonth"
                    id="expirationMonth"
                    placeholder="Expiration Month"
                    options={MonthList}
                    selectedValue={card.type}
                    onChange={(selectedMonth) => {
                      card.expirationMonth = selectedMonth;
                      this.setState({ card, submitted: false });
                    }}
                  />
                </div>
                <div className="has-float-label w-50 d-sm-inline-block cc-half-right">
                  <CustomSelect
                    name="expirationYear"
                    id="expirationYear"
                    placeholder="Expiration Year"
                    options={ExpirationYearList}
                    selectedValue={card.type}
                    onChange={(selectedYear) => {
                      card.expirationYear = selectedYear;
                      this.setState({ card, submitted: false });
                    }}
                  />
                </div>
                <FormGroup className="has-float-label w-50 d-sm-inline-block cc-half-left">
                  <Input
                    type="text"
                    name="verificationCode"
                    id="verificationCode"
                    placeholder="Verification Code"
                    value={card.verficationCode}
                    onChange={(e) => {
                      card.verficationCode = e.target.value;
                      this.setState({ card });
                    }}
                  />
                  <Label for="verificationCode">Verification Code</Label>
                </FormGroup>
                <FormGroup className="has-float-label w-50 d-sm-inline-block cc-half-right">
                  <Link to='/forgotpw'>What's this?</Link>
                </FormGroup>
              </Col>
              <p class="small p-3">Please note: please review the information you entered above to assure everything is correct. The credit card information entered above will be saved for future use but will not be validated. If the informatin is incorrect, or if there is a problem with this credit card, you may not be able to use this information for your donations, and you will need to enter the information again manually.</p>
              <Button
                color="primary"
                className="d-md-block"
                onClick={this.save}
              >
                Save My Billing Information
              </Button>
            </Row>
          </div>
        </MainSection>
      </MainPage>
    )
  }
}
