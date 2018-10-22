/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StationeryPreview from '../../../images/stationery-opt.jpg';

export default class StationeryPreviewModal extends React.Component {
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
    return (
      <div className="text-modal">
        <p onClick={this.toggle}>{this.props.buttonLabel}</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Preview of physical card stationery</ModalHeader>
          <ModalBody>
            <img src={StationeryPreview} alt="Preview of physical card stationery" className="w-100" />
          </ModalBody>
          <ModalFooter>
            <p>Physical cards are sent with information about the order printed on matching stationery.</p>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

