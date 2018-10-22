import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CustomSelect from '../../MiscComponents/CustomSelect';
import { StatesList } from '../../MiscComponents/Data'

export default class billingInformationForm extends React.Component {

  render() {
    return (
      <div>
        <p className="small">The name below will appear to the gift recipient, as the donor/purchaser in emails and at redemption.</p>
        <Form>
          <FormGroup className="has-float-label d-inline-block w-100">
            <Input type="text" name="firstname" id="billingInformationFirstName" placeholder="First Name" />
            <Label for="DonorName">Donor Name</Label>
          </FormGroup>
          <h4><u>Billing Information</u></h4>
          <FormGroup className="has-float-label mt-3">
            <Input type="email" name="EMAIL" id="billingInformationEMAIL" placeholder="you@example.com" />
            <Label for="billingInformationEMAIL">Email Address</Label>
          </FormGroup>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input type="text" name="address1" id="billingInformationAddress1" placeholder="Street Address or PO Box " />
            <Label for="billingInformationAddress1">Street Address or PO Box</Label>
          </FormGroup>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input type="text" name="address2" id="billingInformationAddress2" placeholder="Apt/Ste" />
            <Label for="billingInformationAddress2">Apt/Ste</Label>
          </FormGroup>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input type="text" name="city" id="billingInformationCity" placeholder="City " />
            <Label for="billingInformationCity">City</Label>
          </FormGroup>
          <div className="has-float-label d-block d-sm-none">
            <CustomSelect
              name="billingInformationState"
              placeholder="State or Province"
              options={StatesList}
            // selectedValue={shippingInfo.ShippingState}
            // onChange={(selectedState) => {
            //   shippingInfo.ShippingState = selectedState;
            //   this.setState({ shippingInfo: shippingInfo });
            // }}
            />
          </div>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input type="text" name="ZIP" id="billingInformationZIP" placeholder="ZIP/Postal Code " />
            <Label for="billingInformationZIP">ZIP/Postal Code</Label>
          </FormGroup>
          <FormGroup className="has-float-label d-block d-sm-none">
            <Input type="tel" name="phone" id="billingInformationPhone" placeholder="Phone " />
            <Label for="billingInformationPhone">Phone</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-75-rm d-none d-sm-inline-block">
            <Input type="text" name="address1" id="billingInformationAddress1" placeholder="Street Address or PO Box " />
            <Label for="billingInformationAddress1">Street Address or PO Box</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-25 d-none d-sm-inline-block">
            <Input type="text" name="address2" id="billingInformationAddress2" placeholder="Apt/Ste" />
            <Label for="billingInformationAddress2">Apt/Ste</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 cc-half-left d-none d-sm-inline-block">
            <Input type="text" name="city" id="billingInformationCity" placeholder="City " />
            <Label for="billingInformationCity">City</Label>
          </FormGroup>
          <div className="has-float-label w-50 cc-half-right d-none d-sm-inline-block">
            <CustomSelect
              name="billingInformationState"
              placeholder="State or Province"
              options={StatesList}
            // selectedValue={shippingInfo.ShippingState}
            // onChange={(selectedState) => {
            //   shippingInfo.ShippingState = selectedState;
            //   this.setState({ shippingInfo: shippingInfo });
            // }}
            />
          </div>
          <FormGroup className="has-float-label w-50 cc-half-left d-none d-sm-inline-block">
            <Input type="text" name="ZIP" id="billingInformationZIP" placeholder="ZIP/Postal Code " />
            <Label for="billingInformationZIP">ZIP/Postal Code</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 cc-half-right d-none d-sm-inline-block">
            <Input type="tel" name="phone" id="billingInformationPhone" placeholder="Phone " />
            <Label for="billingInformationPhone">Phone</Label>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
