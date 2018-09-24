import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import StateProvinceSelect from '../../MiscComponents/StateProvinceSelect';

export default class ShippingAddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shippingInfo: props.shippingInfo }
  }

  render() {
    const { shippingInfo } = this.state;
    return (
      <div>
        <h4>Please enter your Shipping Information:</h4>
        <p>Enter your shipping details, including (if necessary) a department or individual designated to receive the
                        gift card shipment at the address.</p>
        <Form>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input type="text"
              name="firstname"
              id="shippingRecipientFirstName"
              placeholder="First Name"
              defaultValue={shippingInfo.ShippingFirstName}
              onChange={(e) => {
                shippingInfo.ShippingFirstName = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }} />
            <Label for="shippingRecipientFirstName">First Name</Label>
          </FormGroup>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input
              type="text"
              name="lastname"
              id="shippingRecipientLastName"
              placeholder="Last Name"
              defaultValue={shippingInfo.ShippingLastName}
              onChange={(e) => {
                shippingInfo.ShippingLastName = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }} />
            <Label for="shippingRecipientLastName">Last Name</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-left">
            <Input type="text"
              name="firstname"
              id="shippingRecipientFirstName"
              placeholder="First Name"
              defaultValue={shippingInfo.ShippingFirstName}
              onChange={(e) => {
                shippingInfo.ShippingFirstName = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }} />
            <Label for="shippingRecipientFirstName">First Name</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-right">
            <Input
              type="text"
              name="lastname"
              id="shippingRecipientLastName"
              placeholder="Last Name"
              defaultValue={shippingInfo.ShippingLastName}
              onChange={(e) => {
                shippingInfo.ShippingLastName = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }} />
            <Label for="shippingRecipientLastName">Last Name</Label>
          </FormGroup>
          <FormGroup className="has-float-label">
            <Input
              type="text"
              name="attention"
              id="shippingRecipientAttention"
              placeholder="ATTN:"
              defaultValue={shippingInfo.ShippingAttn}
              onChange={(e) => {
                shippingInfo.ShippingAttn = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientAttention">Attention</Label>
          </FormGroup>
          <FormGroup className="has-float-label">
            <Input
              type="text"
              name="address1"
              id="shippingRecipientAddress1"
              placeholder="Street Address or PO Box"
              defaultValue={shippingInfo.ShippingAddress1}
              onChange={(e) => {
                shippingInfo.ShippingAddress1 = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientAddress1">Street # / PO Box</Label>
          </FormGroup>
          <FormGroup className="has-float-label">
            <Input
              type="text"
              name="address2"
              id="shippingRecipientAddress2"
              placeholder="Apartment or Suite"
              defaultValue={shippingInfo.ShippingAddress2}
              onChange={(e) => {
                shippingInfo.ShippingAddress2 = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientAddress2">Apt., Ste., etc.</Label>
          </FormGroup>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input
              type="text"
              name="city"
              id="shippingRecipientCity"
              placeholder="City"
              defaultValue={shippingInfo.ShippingCity}
              onChange={(e) => {
                shippingInfo.ShippingCity = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientCity">City</Label>
          </FormGroup>
          <div className="has-float-label d-block d-sm-none">
            <StateProvinceSelect
              selectedValue={shippingInfo.ShippingState}
              onChange={(selectedState) => {
                shippingInfo.ShippingState = selectedState;
                this.setState({ shippingInfo: shippingInfo });
              }} />
            <Label for="personalInformationState" className="float-label-select">State or Province</Label>
          </div>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input
              type="text"
              name="ZIP"
              id="shippingRecipientZIP"
              placeholder="ZIP/Postal Code"
              defaultValue={shippingInfo.ShippingZip}
              onChange={(e) => {
                shippingInfo.ShippingZip = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientZIP">ZIP/Postal Code</Label>
          </FormGroup>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input
              type="phone"
              name="phone"
              id="shippingRecipientPhone"
              placeholder="Phone"
              defaultValue={shippingInfo.ShippingPhone}
              onChange={(e) => {
                shippingInfo.ShippingPhone = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientPhone">Phone</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-left">
            <Input
              type="text"
              name="city"
              id="shippingRecipientCity"
              placeholder="City"
              defaultValue={shippingInfo.ShippingCity}
              onChange={(e) => {
                shippingInfo.ShippingCity = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientCity">City</Label>
          </FormGroup>
          <div className="has-float-label w-50 d-none d-sm-inline-block cc-half-right">
            <StateProvinceSelect
              selectedValue={shippingInfo.ShippingState}
              onChange={(selectedState) => {
                shippingInfo.ShippingState = selectedState;
                this.setState({ shippingInfo: shippingInfo });
              }} />
            <Label for="personalInformationState" className="float-label-select">State or Province</Label>
          </div>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-left">
            <Input
              type="text"
              name="ZIP"
              id="shippingRecipientZIP"
              placeholder="ZIP/Postal Code"
              defaultValue={shippingInfo.ShippingZip}
              onChange={(e) => {
                shippingInfo.ShippingZip = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientZIP">ZIP/Postal Code</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-right">
            <Input
              type="phone"
              name="phone"
              id="shippingRecipientPhone"
              placeholder="Phone"
              defaultValue={shippingInfo.ShippingPhone}
              onChange={(e) => {
                shippingInfo.ShippingPhone = e.target.value;
                this.setState({ shippingInfo: shippingInfo });
              }}
            />
            <Label for="shippingRecipientPhone">Phone</Label>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

ShippingAddressForm.propTypes = {
  shippingInfo: PropTypes.object.isRequired
}

