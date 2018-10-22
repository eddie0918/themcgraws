import React from 'react';
import { Row, Col, Table, FormGroup, Input, Label, Button } from 'reactstrap';

export default class AddRecipientsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: {}
    };
  }

  render() {
    const { recipients } = this.props
    const { recipient } = this.state
    return (
      <Row>
        <Table bordered className="bg-white">
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
            {recipients.length === 0
=======
            {recipients.length == 0
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
              ? <tr className="text-center">'No Recipients'</tr>
              : recipients.map((recipient, index) =>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{recipient.firstName}</td>
                  <td>{recipient.lastName}</td>
                  <td>{recipient.email}</td>
                </tr>
<<<<<<< HEAD
              )}
=======
            )}
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
          </tbody>
        </Table>
        <Col xs="12" md="4">
          <FormGroup className="has-float-label">
            <Input type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={recipient.firstName ? recipient.firstName : ''}
              onChange={(e) => {
                recipient.firstName = e.target.value;
                this.setState({ recipient });
              }}
            />
            <Label for="firstName">First Name</Label>
          </FormGroup>
        </Col>
        <Col xs="12" md="4">
          <FormGroup className="has-float-label">
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={recipient.lastName ? recipient.lastName : ''}
              onChange={(e) => {
                recipient.lastName = e.target.value;
                this.setState({ recipient });
              }}
            />
            <Label for="lastName">Last Name</Label>
          </FormGroup>
        </Col>
        <Col xs="12" md="4">
          <FormGroup className="has-float-label">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={recipient.email ? recipient.email : ''}
              onChange={(e) => {
                recipient.email = e.target.value;
                this.setState({ recipient });
              }}
            />
            <Label for="email">Email</Label>
          </FormGroup>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            color="primary"
            className="d-none d-md-block"
            onClick={() => {
              this.props.addRecipient(recipient)
              this.setState({ recipient: {} })
            }}
          >
            Add This Recipient
          </Button>
        </Col>
      </Row>
    );
  }
}

