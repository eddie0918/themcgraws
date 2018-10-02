import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table, Button, Modal, ModalHeader, ModalBody, Input } from 'reactstrap';
import { OccasionsList, CardDesignList, LayoutList, CardBackgroundSchemesList, DonationAmountList } from '../MockData'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CustomSelect from '../MiscComponents/CustomSelect'
import AddRecipientsTable from './HonorComponents/AddRecipientsTable'
import HonorCardPreviewTable from './HonorComponents/HonorCardPreviewTable'

export default class RedemptionCodes extends React.Component {
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
          <span className="font-weight-bold">Denomination </span><span>will appear to the gift-recipient at redemption.</span><br />
          <span className="font-weight-bold">Download: </span><span>After checkout, you will be able to download a CSV file containing the unique codes, the URL and a brief line explaining what it is about. This is also emailed to you with your receipt.</span><br />
          <span className="font-weight-bold">Custom Charity List: </span><span>You can pre-select a small group of charities to present to clients for designation the funds towards.</span><br />
          <Row className="mt-5">
            <Col xs="12" md="5">
              <span className="font-weight-bold">Add Items To Your Order</span>
              <Row>
                <Col xs="12" md="8">
                  <span>Denomination: </span>
                </Col>
                <Col xs="12" md="4">
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
                <Col xs="12" md="8">
                  <span>Quantity: </span>
                </Col>
                <Col xs="12" md="4">
                  <span>
                    <Input
                      type="number"
                      name="quantity"
                      id="quantity"
                      value={order.quantity ? order.quantity : ''}
                      onChange={(e) => {
                        order.quantity = e.target.value;
                        this.setState({ order: order });
                      }}
                    />
                  </span>
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
