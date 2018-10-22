/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class PricingChartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // const { button}
    return (
      <div className="text-modal">
        <p onClick={this.toggle}>{this.props.buttonLabel}</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Pricing Chart</ModalHeader>
          <ModalBody>
            <span className="font-weight-bold">Pricing Chart</span><br />
            <div className="ml-3 my-3 font-italic">250 cards or more</div>
            <div className="ml-5">
              One color - $75 + 30¢ per card< br />
              Multiple colors - $100 + 50¢ per card
            </div>
            <div className="ml-3 my-3 font-italic">Under 250 cards</div>
            <div className="ml-5">
              One color - $100 + 50¢ per card< br />
              Multiple colors - $125 + 75¢ per card<br />
              <span className="font-italic">Minimum - 100 cards</span>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

