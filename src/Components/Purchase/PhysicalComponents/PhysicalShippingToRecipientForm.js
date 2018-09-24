import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import StationeryPreviewModal from './StationeryPreviewModal';
import ShippingTypePicker from './ShippingTypePicker';
import ShippingAddressForm from './ShippingAddressForm';

export default class PhysicalShippingToRecipientForm extends React.Component {
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
        return (
            <Form>
                <Row>
                    <Col xs="12" lg="6">
                        <ShippingAddressForm
                            shippingInfo={this.state.shippingInfo} />
                    </Col>
                    <Col xs="12" lg="6">
                        <h4>Recipient & Shipping Information:</h4>
                        <ShippingTypePicker
                            onChangeShippingType={shippingTypeId => this.setState({ shippingTypeId })}
                            selectedShippingTypeId={this.state.shippingTypeId} />
                        <h4 className="mt-3">Packing Slip Stationery</h4>
                        <p>The following fields will be displayed on the packing slip that is sent with the cards.</p>
                        <StationeryPreviewModal buttonLabel="Click to preview stationery appearance." />
                        <FormGroup className="has-float-label">
                            <Input type="text" name="greeting" id="physicalRecipientStationeryGreeting" placeholder="Greeting to Recipient" />
                            <Label for="physicalRecipientStationeryGreeting">Greeting</Label>
                        </FormGroup>
                        <FormGroup className="has-float-label">
                            <Input type="textarea" name="message" id="physicalRecipientStationeryText" placeholder="Mesage to Recipient" />
                            <Label for="physicalRecipientStationeryText">Message</Label>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

