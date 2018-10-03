import React from 'react';
import { Row, Col, Table, Button, Input } from 'reactstrap';
import MainPage from '../MainTemplate/MainPage'
import CustomSelect from '../MiscComponents/CustomSelect'

export default class DirectToCharityDonation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      order: {}
    };
  }

  render() {
    const { orders, order } = this.state;
    let total = 0;
    orders.map(order => total += order.denomination * order.quantity)
    return (
      <MainPage
        title='Redemption Codes'
      >
        <div className="form-panel px-5 container-fluid">
          <Row className="mt-5">
            <Col xs="12" md="5">
              <span className="font-weight-bold">Add a Donation</span><br />
              <p className="mt-3 mb-0">To add a donation:</p>
              <div className='ml-5'>
                <p className="mb-0">1. Enter the Amount</p>
                <p className="mb-0">2. Choose a Charity from our List</p>
                <p className="mb-0">3. Click on the "Add this Donation" button</p>
              </div>
              <Row className="mt-5">
                <Col xs="12" md="5">
                  <span>Amount: </span>
                </Col>
                <Col xs="12" md="7">
                  <span>
                    <Input
                      type="number"
                      name="denomination"
                      id="denomination"
                      placeholder="$"
                      value={order.denomination ? order.denomination : ''}
                      onChange={(e) => {
                        order.denomination = e.target.value;
                        this.setState({ order: order });
                      }}
                    />
                  </span>
                </Col>
                <Col xs="12" md="5" className="mt-3">
                  <span>Charity: </span>
                </Col>
                <Col xs="12" md="7">
                  <div className="has-float-label d-block mt-3">
                    <CustomSelect
                      name="layoutSelect"
                      placeholder="Choose a Charity"
                      options={[]}
                      // selectedValue={card.occasion.value}
                      // onChange={(selectedOccasion) => {
                      //   card.occasion = selectedOccasion;
                      //   this.setState({ card: card });
                      // }}
                    />
                  </div>
                </Col>
                <Col className="d-flex justify-content-end">
                  <Button
                    color="primary"
                    className="d-none d-md-block mt-3"
                    onClick={() => {
                      orders.push(order)
                      this.setState({ orders, order: {} })
                    }}
                  >
                    Add to Order
                  </Button>
                </Col>
              </Row>

            </Col>
            <Col xs="12" md="7">
              <span className="font-weight-bold">Items Currently In Your Order</span>
              <Table bordered className="bg-white">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Denomination</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) =>
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>${order.denomination}.00</td>
                      <td>{order.quantity}</td>
                      <td>${order.denomination * order.quantity}.00</td>
                    </tr>
                  )}
                </tbody>
              </Table>
              <div className="font-weight-bold d-flex justify-content-end">Grand Total ${total}.00</div>
            </Col>
          </Row>
        </div>
      </MainPage>
    )
  }
}
