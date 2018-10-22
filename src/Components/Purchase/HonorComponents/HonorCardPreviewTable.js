import React, { Fragment } from 'react';
import { Row, Table } from 'reactstrap';

export default class HonorCardPreviewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: {}
    };
  }

  render() {
    const { occasion, design, donationAmount, type } = this.props.card
    console.log(this.props.card)
    const amount = type.id == 0 ? type.amount : 1
    const total = '$' + (donationAmount.value * amount) + '.00'
    const sendingType = type.id == 0 ? 'Print' : 'Email'
    const sendingDate = type.id == 0 ? 'N/A' : (type.sendNow ? 'Now' : type.sendingDate)
    return (
      <Row className="mb-3">
        Please review the e-card:
        <Table bordered className="bg-white">
          <thead>
            <tr>
              <th>Occasion</th>
              <th>Card Name</th>
              <th>Denomination</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Print or Email?</th>
              <th>Email Send Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{occasion.label}</td>
              <td>{design.ImageUrl}</td>
              <td>{donationAmount.label}</td>
              <td>{amount}</td>
              <td>{total}</td>
              <td>{sendingType}</td>
              <td>{sendingDate}</td>
            </tr>
          </tbody>
        </Table>
        {sendingType === 'Email' &&
          <Fragment>
            Current Recipients:
            <Table bordered className="bg-white">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {type.recipients.map((recipient, index) =>
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{recipient.firstName}</td>
                    <td>{recipient.lastName}</td>
                    <td>{recipient.email}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Fragment>
        }
      </Row>
    );
  }
}

