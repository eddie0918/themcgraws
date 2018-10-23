import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, Label, Button, Input, FormFeedback, CustomInput } from 'reactstrap';
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'

export default class MyOrdersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      register: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        newpw: '',
        confirmpw: '',
        newsletter: false,
        hasPermissinCode: false,
        permissionCode: ''
      }
    };
  }
  formValidation = isLoginForm => {
    if (isLoginForm) {
      const { email, password } = this.state.login
      if (!email || password.length) {
        return false
      }
    } else {
      const { firstname, lastname, email, password, confirmpw } = this.state.register
      if (!firstname || !lastname || !email || password.length < 5 || password !== confirmpw) {
        return false
      }
    }
    return true
  }
  update = () => {
    this.setState({ submitted: true })
    console.log('----update---', this.state.register)
    if (this.formValidation(false)) {
      this.props.history.push('/Account')
    }
  }
  render() {
    const { register, submitted } = this.state;
    return (
      <MainPage className='cart' title='Update My Account' history={this.props.history}>
        <MainSection className="container-fluid">
          <Row>
            <Col xs="12" md="3"></Col>
            <Col xs="12" md="6">
              <div className="form-panel p-5 mb-5 container-fluid">
                <h4 className=".d-inline-block mb-3 vertical-align underline-title">Login Information</h4>
                <p className="mb-3 vertical-align small font-italic">The 'Name' below will appear to the gift receipient, as the donor/purchaser in emails and at redemption...</p>
                <FormGroup className="has-float-label">
                  <Input
                    name="updateFirstname"
                    id="updateFirstname"
                    placeholder="First Name"
                    invalid={submitted && !register.firstname}
                    value={register.firstname}
                    onChange={(e) => {
                      register.firstname = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="updateFirstname">First Name</Label>
                  <FormFeedback>First name is required</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    name="updateLastname"
                    id="updateLastname"
                    placeholder="Last Name"
                    invalid={submitted && !register.lastname}
                    value={register.lastname}
                    onChange={(e) => {
                      register.lastname = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="updateLastname">Last Name</Label>
                  <FormFeedback>Last name is required</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    name="updatePhone"
                    id="updatePhone"
                    placeholder="Phone"
                    value={register.phone}
                    onChange={(e) => {
                      register.phone = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="updatePhone">Phone</Label>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="email"
                    name="updateEmail"
                    id="updateEmail"
                    placeholder="Email Address"
                    invalid={submitted && !register.email}
                    value={register.email}
                    onChange={(e) => {
                      register.email = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="updateEmail">Email Address</Label>
                  <FormFeedback>Email address is required</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="password"
                    name="updatePassword"
                    id="updatePassword"
                    placeholder="New Password"
                    invalid={submitted && register.newpw.length < 5}
                    defaultValue={register.newpw}
                    onChange={(e) => {
                      register.newpw = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="updatePassword">New Password</Label>
                  <FormFeedback>Minimum: 5 characters</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="password"
                    name="updateConfirmPw"
                    id="updateConfirmPw"
                    placeholder="Confirm Password"
                    invalid={submitted && (register.newpw !== register.confirmpw)}
                    defaultValue={register.confirmpw}
                    onChange={(e) => {
                      register.confirmpw = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="updateConfirmPw">Confirm Password</Label>
                  <FormFeedback>Does not match</FormFeedback>
                </FormGroup>

                <CustomInput type="checkbox" id="updateNewlaters" label={<span><small>I do not want to receive CharityGiftCertificates.org periodical newslaters</small></span>} />

                <p
                  className="text-primary my-3 small"
                  onClick={() => {
                    register.hasPermissinCode = !register.hasPermissinCode;
                    this.setState({ register, submitted: false });
                  }}
                >
                  Click here if you have a special "Permission code".
                </p>
                {register.hasPermissinCode &&
                  <FormGroup className="has-float-label">
                    <Input
                      name="permissionCode"
                      id="permissionCode"
                      placeholder="Enter the Permission Code"
                      invalid={submitted && !register.permissionCode}
                      value={register.email}
                      onChange={(e) => {
                        register.permissionCode = e.target.value;
                        this.setState({ register, submitted: false });
                      }}
                    />
                    <Label for="permissionCode">Enter the Permission Code</Label>
                  </FormGroup>
                }

                <Button
                  color="primary"
                  className="d-md-block"
                  onClick={this.update}
                >
                  Update
                </Button>
              </div>
            </Col>
            <Col xs="12" md="3"></Col>
          </Row>
        </MainSection>
      </MainPage>
    )
  }
}
