import React, { Component } from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Form, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/lib/Creatable';
import { post } from '../../../Code/IApi';

export default class Tip extends Component {
    constructor(props) {
        super(props);

        this.state = { tipAmount: props.value || null };
        this.updateTip = this.updateTip.bind(this);

    }
    async updateTip() {
        const response = await post(this.state.tipAmount || '0', 'shoppingcart/tip');
        if (response && response.Succeeded) {
            this.props.onChange(response.ShoppingCart);
        }
    }
    render() {
        const options = [
            { value: 1, label: '1' },
            { value: 3, label: '3' },
            { value: 5, label: '5' },
            { value: 10, label: '10' },
            { value: 20, label: '20' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
        ];
        if (this.state.tipAmount && !options.find(o => o.value === this.state.tipAmount)) {
            options.unshift({ value: this.state.tipAmount, label: this.state.tipAmount.toString() });
        }
        const selectedOption = options.find(o => o.value === this.state.tipAmount) || null;
        return <div className="panel">
            <div className="panel-heading pb-1">
                <h4>
                    <u>
                        Leave A Tip for Special Kids!
                    </u>
                </h4>
            </div>
            <div className="panel-body pt-0">
                <span className="small d-block small-line-height">Support Special Kids by leaving us a tip for facilitating charitable giving. Select an amount or enter your own.</span>
                <Form>
                    <FormGroup className="has-float-label mt-2 mb-0">
                        <InputGroup className="justify-content-center">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fa fa-dollar-sign"></i></InputGroupText>
                            </InputGroupAddon>
                            <CreatableSelect
                                name="TipAmount"
                                id="TipAmount"
                                className="form-group"
                                classNamePrefix="react-select"
                                placeholder="Tip"
                                isClearable
                                onChange={newValue =>
                                    this.setState({ tipAmount: newValue ? newValue.value : 0 })}
                                options={options}
                                value={selectedOption}
                                showNewOptionAtTop={true}
                                isValidNewOption={val => (val) => !isNaN(parseFloat(val))}
                            />
                        </InputGroup>
                    </FormGroup>
                    <span className="d-inline-block w-100 text-center">
                        <Button color="primary" className="cart-btn" onClick={this.updateTip}>
                            {this.props.value ? 'Update Tip' : 'Add Tip'}
                        </Button>
                    </span>
                </Form>
            </div>
        </div>;

    }
}
Tip.PropTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
};
