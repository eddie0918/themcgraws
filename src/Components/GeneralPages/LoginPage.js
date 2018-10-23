import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, Label, Button, Input, FormFeedback } from 'reactstrap';
import { AccountTypeList } from '../MockData'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CustomSelect from '../MiscComponents/CustomSelect'
import ReCAPTCHA from "react-google-recaptcha"

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      recaptcha: null,
      login: {
        email: '',
        password: ''
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
  onRecaptchaChanged = value => {
    this.setState({ recaptcha: value })
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
  login = () => {
    // this.setState({ submitted: true })
    console.log('----login---', this.state.login)
    if (this.formValidation(true)) {
      this.props.history.push('/account')
    }
  }
  register = () => {
    this.setState({ submitted: true })
    console.log('----register---', this.state.register)
    if (this.formValidation(false)) {
      this.props.history.push('/account')
    }
  }
  render() {
    const { login, register, submitted, recaptcha } = this.state;
    return (
      <MainPage className='cart' title='Login or Create Account'>
        <MainSection className="container-fluid">
          <Row>
            <Col xs="12" md="5">
              <div className="form-panel p-3 mb-5 container-fluid">
                <h4 className=".d-inline-block mb-5 vertical-align underline-title">Login...</h4>
                <FormGroup className="has-float-label">
                  <Input
                    type="email"
                    name="loginEmail"
                    id="loginEmail"
                    placeholder="Email Address"
                    value={login.email}
                    onChange={(e) => {
                      login.email = e.target.value;
                      this.setState({ login });
                    }}
                  />
                  <Label for="loginEmail">Email Address</Label>
                </FormGroup>
                <FormGroup className="has-float-label">
                  <Input type="password"
                    name="loginPassword"
                    id="loginPassword"
                    placeholder="Password"
                    defaultValue={login.password}
                    onChange={(e) => {
                      login.password = e.target.value;
                      this.setState({ login });
                    }}
                  />
                  <Label for="loginPassword">Password</Label>
                </FormGroup>

                <Link to='/forgotpw'>I forgot my password</Link>

                <Button
                  color="primary"
                  className="d-md-block mt-3"
                  onClick={this.login}
                >
                  Login
                </Button>
              </div>
            </Col>
            <Col xs="12" md="7">
              <div className="form-panel p-3 mb-5 container-fluid">
                <h4 className=".d-inline-block mb-5 vertical-align underline-title">Create an Account...</h4>
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
                    name="registerPhone"
                    id="registerPhone"
                    placeholder="Phone"
                    value={register.phone}
                    onChange={(e) => {
                      register.phone = e.target.value;
                      this.setState({ register, submitted: false });
                    }}
                  />
                  <Label for="registerPhone">Phone</Label>
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

                <CustomSelect
                  name="registerAccountType"
                  placeholder="Account type"
                  options={AccountTypeList}
                  selectedValue={register.type}
                  onChange={(accountType) => {
                    register.type = accountType;
                    this.setState({ register });
                  }}
                />
                {/* https://www.npmjs.com/package/react-google-recaptcha */}
                <ReCAPTCHA
                  sitekey='6LcEU3YUAAAAAL4wJmYwD_3IjEC8D-7p-z8qqCDX'
                  onChange={this.onRecaptchaChanged}
                // asyncScriptOnLoad={this.asyncScriptOnLoad}
                />

                <Button
                  color="primary"
                  className="d-md-block"
                  disabled={!recaptcha}
                  onClick={this.register}
                >
                  Create My Account
                </Button>
              </div>
            </Col>

          </Row>
        </MainSection>
      </MainPage>
    )
  }
}
