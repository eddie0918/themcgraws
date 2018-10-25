import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, Label, Button, Input, FormFeedback, CustomInput } from 'reactstrap';
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'

export default class DonationOrdersReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  render() {
    const { orders } = this.state;
    return (
      <MainPage className='cart' title='Donation Orders Report'>
        <Link className="mt-4 btn-link position-absolute" to='/Account'>Back</Link>
        <MainSection className="container-fluid">
          <div className="form-panel p-5 mb-5 container-fluid">
              <p className="mb-5">Please choose the dates and click "Generate".</p>
            <Row>
              <Col xs="12" md="4">
                <FormGroup className="has-float-label d-block">
                  <Input type="Date"
                    name="fromDate"
                    id="fromDate"
                    placeholder="From Date"
                  // defaultValue={cardInfo.SendingDate}
                  // onChange={(e) => {
                  //   cardInfo.SendingDate = e.target.value;
                  //   this.setState({ cardInfo: cardInfo });
                  // }}
                  />
                  <Label for="sendingDate">From Date</Label>
                </FormGroup>
              </Col>
              <Col xs="12" md="4">
                <FormGroup className="has-float-label d-block">
                  <Input type="date"
                    name="toDate"
                    id="toDate"
                    placeholder="To Date"
                  // defaultValue={cardInfo.SendingDate}
                  // onChange={(e) => {
                  //   cardInfo.SendingDate = e.target.value;
                  //   this.setState({ cardInfo: cardInfo });
                  // }}
                  />
                  <Label for="sendingDate">To Date</Label>
                </FormGroup>
              </Col>
              <Col xs="12" md="4">
                <Button
                  color="primary"
                  className="d-md-block"
                  onClick={this.update}
                >
                  Generate Report
                </Button>
              </Col>
            </Row>
          </div>
        </MainSection>
      </MainPage>
    )
  }
}
