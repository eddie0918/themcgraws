import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CustomSelect from '../../MiscComponents/CustomSelect';
import { StatesList } from '../../MiscComponents/Data'

export default class ContactInformationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      mailing: '',
      city: '',
      state: '',
      zip: '',
      country: StatesList[0]
    }
  }

  onChange = () => {
    const { firstname, lastname, email, phone, mailing, city, state, zip } = this.state;
    this.props.onChange({ firstname, lastname, email, phone, mailing, city, state, zip })
  }

  render() {
    const { firstname, lastname, email, phone, mailing, city, state, zip } = this.state;
    return (
      <div>
        <Form>
          <FormGroup className="has-float-label w-50 d-sm-inline-block cc-half-left">
            <Input type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              defaultValue={firstname}
              onChange={(e) => this.setState({ firstname: e.target.value }, this.onChange)}
            />
            <Label for="firstname">First Name</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-sm-inline-block cc-half-right">
            <Input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              defaultValue={lastname}
              onChange={(e) => this.setState({ lastname: e.target.value }, this.onChange)}
            />
            <Label for="lastname">Last Name</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-sm-inline-block cc-half-left">
            <Input
              type="eamil"
              name="email"
              id="email"
              placeholder="Email Address"
              defaultValue={email}
              onChange={(e) => this.setState({ email: e.target.value }, this.onChange)}
            />
            <Label for="email">Email Address</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-sm-inline-block cc-half-right">
            <Input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              defaultValue={phone}
              onChange={(e) => this.setState({ phone: e.target.value }, this.onChange)}
            />
            <Label for="phone">Phone Number</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-left">
            <Input
              type="email"
              name="mailing"
              id="mailing"
              placeholder="Mailing Address"
              defaultValue={mailing}
              onChange={(e) => this.setState({ mailing: e.target.value }, this.onChange)}
            />
            <Label for="mailing">Mailing Address</Label>
          </FormGroup>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-right">
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              defaultValue={city}
              onChange={(e) => this.setState({ city: e.target.value }, this.onChange)}
            />
            <Label for="city">City</Label>
          </FormGroup>
          <div className="has-float-label w-50 d-none d-sm-inline-block cc-half-left">
            <CustomSelect
              name="contactInformationState"
              placeholder="State or Province"
              options={StatesList}
              selectedValue={state}
              onChange={(selectedState) => this.setState({ state: selectedState }, this.onChange)}
            />
          </div>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-right">
            <Input
              type="text"
              name="zip"
              id="zip"
              placeholder="ZIP/Postal Code"
              defaultValue={zip}
              onChange={(e) => this.setState({ zip: e.target.value }, this.onChange)}
            />
            <Label for="zip">ZIP/Postal Code</Label>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
