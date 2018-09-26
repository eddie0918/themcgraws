import React from 'react';
import { Button, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PhysicalToggle from './PhysicalToggle';
import PhysicalNestedTab from './PhysicalNestedTab';
import SelectPhysicalCards from './SelectPhysicalCards';
import { get, post } from '../../../Code/IApi';
import { clone } from '../../../Code/Utilities';
import MainSection from '../../MainTemplate/MainSection'
import PhysicalShippingForm from './PhysicalShippingForm';

export default class PhysicalTab extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      cardTypesList: [],
      cartShipToMe: [],
      originalCartShipToMe: []
    };

    this.updateShipToMe = this.updateShipToMe.bind(this);
    this.updateCartShipToMe = this.updateCartShipToMe.bind(this);
  }
  async componentDidMount() {
    const cardTypesResponse = await get('general/physicalCardTypes'),
      cardTypesList = cardTypesResponse.Succeeded ? cardTypesResponse.List : [],
      physicalCardCartResponse = await get('shoppingcart/physicalCards'),
      cartShipToMe = physicalCardCartResponse.Succeeded ? physicalCardCartResponse.ShipToMeDonations : [],
      //Clone the cart for determining what the user changed afterwards
      originalCartShipToMe = clone(cartShipToMe);
    this.setState({ cardTypesList, cartShipToMe, originalCartShipToMe });
  }

  updateShipToMe(cardTypeId, denomination, quantity) {
    const cartShipToMe = this.state.cartShipToMe,
      cardInCart = cartShipToMe.find(card =>
        card.PhysicalCardTypeId === cardTypeId && card.Denomination === denomination);

    //If quantity is more than 0, check stock.
    if (quantity) {
      const stockLeft = this.state.cardTypesList.find(ct =>
        ct.PhysicalCardTypeId === cardTypeId).Denominations.find(d =>
          d.Denomination === denomination).Stock;
      if (quantity > stockLeft) {
        alert(`There are only ${stockLeft} left in stock`);
        return;
      }
    }
    //If is in cart - just update the quantity
    if (cardInCart) {
      cardInCart.Quantity = quantity;
    }
    else {
      cartShipToMe.push({
        PhysicalCardTypeId: cardTypeId,
        Denomination: denomination,
        Quantity: quantity
      });
    }

    this.setState({ cartShipToMe });
  }

  async updateCartShipToMe() {
    const data = this.state.cartShipToMe,
      physicalCardCartResponse = await post(data, 'shoppingcart/physicalCards'),
      cartShipToMe = physicalCardCartResponse.Succeeded ? physicalCardCartResponse.ShipToMeDonations : [],
      //Clone the cart for determining what the user changed afterwards.
      originalCartShipToMe = clone(cartShipToMe);
    this.setState({ cartShipToMe, originalCartShipToMe });
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
      <div className="row cols-xs-space cols-sm-space cols-md-space">
        <Row className="w-100">
          <Col xs="12" className="p-0">
            <Nav tabs className="nav nav-justified nav-pills nav-fill flex-column flex-sm-row">
              <NavItem className="mb-0">
                <NavLink
                  className={classnames("physical-tab-title-first", { active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }} >
                  Ship To Me
                </NavLink>
              </NavItem>
              <NavItem className="mb-0">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }} >
                  Ship To Recipient
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab} className="mb-3" >
          <TabPane tabId="1">
            <Row className="pt-3 pb-3 tab-row-first">
              {/* <Col sm="12" className="mb-3">
                <div className="h-100"><Button color="primary" className=".d-inline-block float-left vertical-align btn btn-primary btn-icon-only rounded-circle no-hover">
                  <span className="btn-inner--icon"><i className={`fa fa-list`} /></span></Button>
                  <h4 className=".d-inline-block float-left vertical-align purchase-step-title underline-title">Select Cards, Denominations, and Quantity & Add To Cart</h4></div>
              </Col>
              <Col sm="12">
                <SelectPhysicalCards
                  cardTypesList={this.state.cardTypesList}
                  cardsInCart={this.state.cartShipToMe}
                  originalCartShipToMe={this.state.originalCartShipToMe}
                  updateCardQuantity={this.updateShipToMe}
                  updateCart={this.updateCartShipToMe} />
              </Col> */}
              <MainSection title="Select Cards, Denominations, and Quantity & Add To Cart" icon="list">
              <Col sm="12">
                <SelectPhysicalCards
                  cardTypesList={this.state.cardTypesList}
                  cardsInCart={this.state.cartShipToMe}
                  originalCartShipToMe={this.state.originalCartShipToMe}
                  updateCardQuantity={this.updateShipToMe}
                  updateCart={this.updateCartShipToMe} />
                  </Col>
              </MainSection>
              <MainSection title="Shipping Information" icon="truck">
                <PhysicalShippingForm cardTypesList={this.state.cardTypesList} />
              </MainSection>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="pt-3 pb-3 tab-row-last">
              <Col xs="12" md={{ size: 8, offset: 2 }} className="mb-2 text-center">
                <p>Choose to add cards for each recipient individually or multiple recipients at once.</p>
              </Col>
              <Col sm="12">
                <PhysicalNestedTab cardTypesList={this.state.cardTypesList} />
              </Col>
              <Col sm="12">
                <PhysicalToggle />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
