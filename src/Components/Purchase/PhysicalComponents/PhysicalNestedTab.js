import React from 'react';
import { Button, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PhysicalShippingToRecipientForm from './PhysicalShippingToRecipientForm';


export default class PhysicalNestedTab extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="row tab-nested  ml-1">
        <Row className="w-100">
          <Col xs="12" className="p-0">
            <Nav tabs className="nav nav-justified nav-pills nav-fill flex-column flex-sm-row">
              <NavItem className="mb-0">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }} >
                  <Button color="primary">Individual</Button>
                </NavLink>
              </NavItem>
              <NavItem className="mb-0">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }} >
                  <Button color="primary">Multiple</Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab} className="mb-3" >
          <TabPane tabId="1">
            <Row className="pt-3 pb-3">
              <Col sm="12" className="mb-3">
                <div className="h-100"><Button color="primary" className=".d-inline-block float-left vertical-align btn btn-primary btn-icon-only rounded-circle no-hover">
                  <span className="btn-inner--icon"><i className={`fa fa-list`} /></span></Button>
                  <h4 className=".d-inline-block float-left vertical-align purchase-step-title underline-title">Select Cards & Add To Cart</h4></div>
              </Col>
              <Col sm="12">
                Insert new component for Ship to Recipient Cards
	      </Col>
              <Col sm="12" className="mb-3">
                <div className="h-100"><Button color="primary" className=".d-inline-block float-left vertical-align btn btn-primary btn-icon-only rounded-circle no-hover">
                  <span className="btn-inner--icon"><i className={`fa fa-truck`} /></span></Button>
                  <h4 className=".d-inline-block float-left vertical-align purchase-step-title underline-title">Shipping Information</h4></div>
              </Col>
              <Col sm="12">
                <PhysicalShippingToRecipientForm cardTypesList={this.props.cardTypesList} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="pt-3 pb-3">
              <Col sm="12">
                Content
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
