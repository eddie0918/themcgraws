import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, Label, Button, Input, FormFeedback, CustomInput } from 'reactstrap';
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'

export default class PrintYourOwnPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  render() {
    const { orders } = this.state;
    return (
      <MainPage className='cart' title='Print Your Own'>
        <Link className="mt-4 btn-link position-absolute" to='/Account'>Back</Link>
        <MainSection className="container-fluid">
          <Row>
            <p className="border border-primary p-3">
              <strong>Print Your Card:</strong><br />
              If you need to print a previous eCard or "Print your Own".<br /><br />
              1. Go to your <Link to='/Account/MyOrders'>My Orders</Link> page. (you may need to login) <br />
              2. Find the eCard donation that you wish to print and click on the "View/Print Cards" link next to it. <br />
              3. Click on the "View & Print" link next to the card you wish to print, and follow the instructions in the following page.
            </p>
          </Row>
        </MainSection>
      </MainPage>
    )
  }
}
