import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CustomSelect from '../../MiscComponents/CustomSelect';
<<<<<<< HEAD
import { StatesList } from '../../MiscComponents/Data'
=======
import { CountryList } from '../../MockData'
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5

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
<<<<<<< HEAD
      country: StatesList[0]
=======
      country: CountryList[0]
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
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
<<<<<<< HEAD
              onChange={(e) => this.setState({ firstname: e.target.value }, this.onChange)}
=======
              onChange={(e) => this.setState({ firstname: e.target.value }, this.onChange) }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
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
<<<<<<< HEAD
              onChange={(e) => this.setState({ lastname: e.target.value }, this.onChange)}
=======
              onChange={(e) => this.setState({ lastname: e.target.value }, this.onChange) }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
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
<<<<<<< HEAD
              onChange={(e) => this.setState({ email: e.target.value }, this.onChange)}
=======
              onChange={(e) => this.setState({ email: e.target.value }, this.onChange) }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
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
<<<<<<< HEAD
              onChange={(e) => this.setState({ phone: e.target.value }, this.onChange)}
=======
              onChange={(e) => this.setState({ phone: e.target.value }, this.onChange) }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
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
<<<<<<< HEAD
              onChange={(e) => this.setState({ mailing: e.target.value }, this.onChange)}
=======
              onChange={(e) => this.setState({ mailing: e.target.value }, this.onChange) }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
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
<<<<<<< HEAD
              onChange={(e) => this.setState({ city: e.target.value }, this.onChange)}
=======
              onChange={(e) => this.setState({ city: e.target.value }, this.onChange) }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
            />
            <Label for="city">City</Label>
          </FormGroup>
          <div className="has-float-label w-50 d-none d-sm-inline-block cc-half-left">
            <CustomSelect
              name="contactInformationState"
              placeholder="State or Province"
<<<<<<< HEAD
              options={StatesList}
              selectedValue={state}
              onChange={(selectedState) => this.setState({ state: selectedState }, this.onChange)}
=======
              options={CountryList}
              selectedValue={state}
              onChange={(selectedState) => this.setState({ state: selectedState }, this.onChange) }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
            />
          </div>
          <FormGroup className="has-float-label w-50 d-none d-sm-inline-block cc-half-right">
            <Input
              type="text"
              name="zip"
              id="zip"
              placeholder="ZIP/Postal Code"
              defaultValue={zip}
<<<<<<< HEAD
              onChange={(e) => this.setState({ zip: e.target.value }, this.onChange)}
=======
              onChange={(e) => this.setState({ zip: e.target.value }, this.onChange) }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
            />
            <Label for="zip">ZIP/Postal Code</Label>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
