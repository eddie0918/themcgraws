import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, Label, Button, Input, FormFeedback, CustomInput } from 'reactstrap';
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'

export default class MyOrdersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  render() {
    const { orders } = this.state;
    return (
      <MainPage className='cart' title='My Orders'>
        <Link className="mt-4 btn-link position-absolute" to='/Account'>Back</Link>
        <MainSection className="container-fluid">
          <Row>
            <p className="border border-primary p-3">You have no recent orders listed.<br />
            To view all your orders, please go to your <Link to='/forgotpw'>Donation History.</Link></p>
          </Row>
        </MainSection>
      </MainPage>
    )
  }
}
