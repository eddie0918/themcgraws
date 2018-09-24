import React from 'react';
import { Form, Row, Col, Button } from 'reactstrap';
import ShippingTypePicker from './ShippingTypePicker';
import ShippingAddressForm from './ShippingAddressForm';

export default class PhysicalShippingForm extends React.Component {
  constructor(props) {
    super(props);

    const shippingInfo = props.shippingInfo || {
      ShippingFirstName: '',
      ShippingLastName: '',
      ShippingAddress1: '',
      ShippingAddress2: '',
      ShippingAttn: '',
      ShippingCity: '',
      ShippingState: '',
      ShippingZip: '',
      ShippingPhone: '',
      ShippingTypeId: 1
    };

    this.state = { shippingInfo };
  }

  render() {
    const { shippingInfo } = this.state;
    return (
      <Form className="form-panel mb-3">
        <Row>
          <Col xs="12" md="6">
            <ShippingAddressForm
              shippingInfo={shippingInfo} />
          </Col>
          <Col xs="12" md="6">
            <h4>Please choose your preference for shipping and handling:</h4>
            <ShippingTypePicker
              onChangeShippingType={shippingTypeId => {
                shippingInfo.ShippingTypeId = shippingTypeId;
                this.setState({ shippingInfo });
              }}
              selectedShippingTypeId={shippingInfo.ShippingTypeId} />
            <div className="text-center justify-content-center">
              <Button
                color="primary"
                className="d-none d-md-block"
                onClick={() => this.props.onUpdateShippinginfo(shippingInfo)}>Save My Shipping Info</Button>
              <Button
                color="primary"
                block
                className="d-md-none"
                onClick={() => this.props.onUpdateShippinginfo(shippingInfo)}>Save My Shipping Info</Button>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

