import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, CustomInput } from 'reactstrap';
import { get } from '../../../Code/IApi';

export default class ShippingTypePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shippingTypesList: []
        };
    }
    async componentDidMount() {
        const shippingTypesResponse = await get('general/shippingTypes'),
            shippingTypesList = shippingTypesResponse.Succeeded ? shippingTypesResponse.List : [];
        this.setState({ shippingTypesList });
    }

    render() {
        return <div>
            <p>Orders are shipped on the same business day for orders made before noon Eastern Time; otherwise on next business day.</p>
            <FormGroup>
                <div>
                    {this.state.shippingTypesList.map((item, index) =>
                        <div key={item.ShippingTypeId}>
                            {item.IsHolidayRecommended &&
                                <p>RECOMMENDED to assure arrival of urgent and holiday orders:</p>}
                            <CustomInput
                                key={item.ShippingTypeId}
                                type="radio"
                                id={'item_' + item.ShippingTypeId.toString()}
                                name={'shippingTypes'}
                                label={item.FullDisplayText}
                                checked={this.props.selectedShippingTypeId === item.ShippingTypeId}
                                onChange={() => this.props.onChangeShippingType(item.ShippingTypeId)}
                            />
                        </div>
                    )}
                </div>
            </FormGroup>
            <p>Note: We cannot be responsible for delivery delays.</p>
        </div>;
    }
}
ShippingTypePicker.PropTypes = {
    selectedShippingTypeId: PropTypes.number.isRequired,
    onChangeShippingType: PropTypes.func.isRequired
};