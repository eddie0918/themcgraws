import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { get, post } from '../../Code/IApi';
import MainPage from '../MainTemplate/MainPage'
import MainSection from '../MainTemplate/MainSection'
import PhysicalShippingForm from '../Purchase/PhysicalComponents/PhysicalShippingForm';
import Tip from './Cart/Tip';
import PaymentForm from './Cart/PaymentForm';
import CharityChooser from '../MiscComponents/CharityChooser';
import LoadingSpinner from '../MiscComponents/LoadingSpinner';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { shoppingCart: null, shoppingCartItems: [] };
    this.removeFromCart = this.removeFromCart.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.updateShippingInfo = this.updateShippingInfo.bind(this);
  }
  async componentDidMount() {
    const response = await get('shoppingcart');
    if (response && response.Succeeded && response.ShoppingCart) {
      this.refreshCart(response.ShoppingCart);
    }
  }
  async removeFromCart(index) {
    const response = await get('shoppingcart/remove/' + index.toString());
    if (response && response.Succeeded && response.ShoppingCart) {
      this.refreshCart(response.ShoppingCart);
    }
  }
  changeItem(item) {
    switch (item.Type) {
      case 'Physical Cards':
        this.props.history.push('/Purchase/PhysicalCards');
        break;
      default:
    }
  }
  async updateShippingInfo(shippingInfo) {
    const response = await post(shippingInfo, 'shoppingcart/shippingInfo');
    if (response && response.Succeeded && response.ShoppingCart) {
      this.refreshCart(response.ShoppingCart);
    }
  }
  refreshCart(shoppingCart) {
    const shoppingCartItems = shoppingCart.Items;
    this.setState({ shoppingCart, shoppingCartItems });
  }
  render() {
    if (!this.state.shoppingCart) {
      return <LoadingSpinner text='Loading Cart...' />
    } else if (this.state.shoppingCartItems.length == 0) {
      return <MainPage title='Your Cart is Empty!' />
    }

    return(
      <MainPage className='cart' title='Shopping Cart & Checkout'>
        <MainSection title="Select Cards, Denominations, and Quantity & Add To Cart" icon="check">
        <Row>
          <Col sm="12">
            <div>{this.state.shoppingCartItems.map(item =>
              <div className="panel" key={item.ItemIndex}>
                <div className="panel-heading pb-1">
                  <h4>
                    <u>
                      Item #{item.ItemIndex + 1} - {item.Type}
                    </u>
                  </h4>
                </div>
                <div className="panel-body pt-0">
                  <Row>
                    <Col xs="12" md="8">
                      Description: <span className="font-weight-bold">{item.Description}</span>
                      <br />
                      Denomination: <span className="font-weight-bold">${item.Denomination.toFixed(2)}</span>
                      <br />
                      Quantity: <span className="font-weight-bold">{item.Quantity}</span>
                      {item.RecipientEmailAddresses.length > 0 &&
                        <div>
                          Recipients: <ol>{item.RecipientEmailAddresses.map((address, aIndex) =>
                            <li key={aIndex}>{address}</li>
                          )}</ol>
                        </div>
                      }
                      {item.RecipientPhoneNumbers.length > 0 &&
                        <div>
                          Recipients: <ol>{item.RecipientPhoneNumbers.map((cel, cIndex) =>
                            <li key={cIndex}>{cel}</li>
                          )}</ol>
                        </div>
                      }
                      {item.DiscountPercent > 0 &&
                        <div>
                          Discount Percent: <span className="font-weight-bold">{item.DiscountPercent.toFixed(1)}</span>
                        </div>
                      }
                      {needsShippingInfo(item) &&
                        (item.ShippingInfoText && item.HasCompleteShippingInfo
                          ? <div>Shipping Details: <span className="font-weight-bold">{item.ShippingInfoText}</span></div>
                          : <div className="text-secondary mt-3 text-center">This item requires a shipping address. Please complete the form below.</div>)
                      }
                      <br />
                      Subtotal: <span className="font-weight-bold">${item.TotalForCards.toFixed(2)}</span>
                      <br />
                    </Col>
                    <Col xs="12" md="4" className="text-center">
                      <Button className="cart-btn" onClick={() => this.removeFromCart(item.ItemIndex)}>Remove</Button>
                      <Button className="cart-btn" color="primary" onClick={() => this.changeItem(item)}>Change</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
            </div>
            {this.state.shoppingCartItems.find(d => needsShippingInfo(d)) &&
              <PhysicalShippingForm
                shippingInfo={this.state.shoppingCart.ShippingInfo}
                onUpdateShippinginfo={this.updateShippingInfo}
              />}
          </Col>
          <Col xs="12" md="4">
            <Tip
              value={this.state.shoppingCart.TotalCostForSKFTip}
              onChange={shoppingCart => this.refreshCart(shoppingCart)} />
          </Col>
          <Col xs="12" md="8">
            <div className="panel">
              <div className="panel-heading pb-1">
                <h4><u>Totals</u></h4>
              </div>
              <div className="panel-body pt-0">
                Total Cost For Cards: <span className="font-weight-bold">${this.state.shoppingCart.TotalCostForCards.toFixed(2)}</span>
                {this.state.shoppingCartItems.find(d => d.Type === 'Physical Cards') && <div>
                  <br />
                  Total Shipping Cost For Physical Cards: <span className="font-weight-bold">${this.state.shoppingCart.TotalShippingCostForPhysicalcards.toFixed(2)}</span>
                </div>}
                <br />
                {this.state.shoppingCartItems.find(d => d.Type === 'Custom Physical Cards') &&
                  <div>
                    Total ShippingCost For Custom Physical Cards: <span className="font-weight-bold">${this.state.shoppingCart.TotalShippingCostForCustomPhysicalCards.toFixed(2)}</span>
                    <br />
                    Total Extra Charge For Custom Physical Cards: <span className="font-weight-bold">${this.state.shoppingCart.TotalExtraChargeForCustomPhysicalCards.toFixed(2)}</span>
                  </div>}
                <br />
                Grand Total: <span className="font-weight-bold">${this.state.shoppingCart.GrandTotal.toFixed(2)}</span>
              </div>
            </div>
          </Col>
          </Row>
        </MainSection>

        <MainSection
          icon="heart"
          title="Select suggested charities or create a charity list (optional)"
          description="You may select your favorite charity to suggest to recipient or create a list of charities from which the recipient may choose."
        >
          <Col xs="12">
            <CharityChooser
              list='all'
              charityListPlaceholder='Suggested Charity'
              allowSelectWholeCategory={false}
              selectedCharities={this.state.shoppingCart.PreSelectedCharityId}
              maxNumberOfCharities={1} />
          </Col>
        </MainSection>

        <MainSection
          className="mb-3 mt-310"
          icon="money-bill-alt"
          title="Enter payment details & checkout"
        >
          <PaymentForm />
        </MainSection>
      </MainPage>
    )
  }
}

function needsShippingInfo(shoppingCartItem) {
  return shoppingCartItem &&
    (shoppingCartItem.Type === 'Custom Physical Cards' ||
      (shoppingCartItem.Type === 'Physical Cards' && !shoppingCartItem.ShipsToRecipient));
}
