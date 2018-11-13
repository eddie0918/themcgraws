import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, Label, Button, Input, FormFeedback, CustomInput } from 'reactstrap';
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'

export default class GiftRegistryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      recaptcha: null,
      login: {
        firstname: 'Test',
        lastname: 'User',
        email: 'testuser@mail.com'
      },
      register: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmpw: '',
        type: ''
      }
    };
  }
  render() {
    const { login, register, submitted } = this.state;
    return (
      <MainPage
        className='cart'
        title='Gift Registry'
        description='First thing, as we need some way to "house" your Gift Registry details, you will need a CharityChoice account.'
      >
        <Link className="mt-4 btn-link position-absolute" to='/Account'>Back</Link>
        <MainSection className="container-fluid">
          <Row>
            <Col xs="12" md="6">
              <div className="form-panel p-3 mb-5 container-fluid">
                <h4 className=".d-inline-block mb-3 vertical-align underline-title">Create New Account</h4>
                <FormGroup className="has-float-label">
                  <Input
                    name="registerFirstname"
                    id="registerFirstname"
                    placeholder="First Name"
                    invalid={submitted && !register.firstname}
                    value={register.firstname}
                    onChange={(e) => {
                      register.firstname = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="registerFirstname">First Name</Label>
                  <FormFeedback>First name is required</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    name="registerLastname"
                    id="registerLastname"
                    placeholder="Last Name"
                    invalid={submitted && !register.lastname}
                    value={register.lastname}
                    onChange={(e) => {
                      register.lastname = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="registerLastname">Last Name</Label>
                  <FormFeedback>Last name is required</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="email"
                    name="registerEmail"
                    id="registerEmail"
                    placeholder="Email Address"
                    invalid={submitted && !register.email}
                    value={register.email}
                    onChange={(e) => {
                      register.email = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="registerEmail">Email Address</Label>
                  <FormFeedback>Email address is required</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="password"
                    name="registerPassword"
                    id="registerPassword"
                    placeholder="Password"
                    invalid={submitted && register.password.length < 5}
                    defaultValue={register.password}
                    onChange={(e) => {
                      register.password = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="registerPassword">Password</Label>
                  <FormFeedback>Minimum: 5 characters</FormFeedback>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input
                    type="password"
                    name="registerConfirmPw"
                    id="registerConfirmPw"
                    placeholder="Confirm Password"
                    invalid={submitted && (register.password !== register.confirmpw)}
                    defaultValue={register.confirmpw}
                    onChange={(e) => {
                      register.confirmpw = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="registerConfirmPw">Confirm Password</Label>
                  <FormFeedback>Does not match</FormFeedback>
                </FormGroup>
                <Button
                  color="primary"
                  className="d-md-block"
                  onClick={this.register}
                >
                  Create Account
                </Button>
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="form-panel p-3 mb-5 container-fluid">
                <h4 className=".d-inline-block mb-3 vertical-align underline-title">Use Existing Account</h4>
                Currently Logged-In User Account <br /><br />
                First Name: <strong>{login.firstname}</strong> <br />
                Last Name: <strong>{login.lastname}</strong> <br />
                Email: <strong>{login.email}</strong>

                <Button
                  color="primary"
                  className="d-md-block my-3"
                  onClick={this.login}
                >
                  Use This Account
                </Button>

                <Link to='/Login'>Log in</Link> to an existing account.
              </div>
            </Col>
          </Row>
        </MainSection>
      </MainPage>
    )
  }
}
