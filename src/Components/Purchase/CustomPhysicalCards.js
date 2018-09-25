import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SelectCustomPhysicalCards from './CustomPhysicalComponents/SelectCustomPhysicalCards'
import { get, post } from '../../Code/IApi';
import { clone } from '../../Code/Utilities';
import { CustomPhysicalCardTypesList } from '../MockData'

export default class CustomPhysicalCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTypesList: [],
      cartShipToMe: [],
      originalCartShipToMe: []
    };
  }

  async componentDidMount() {
    // const cardTypesResponse = await get('general/physicalCardTypes'),
    //   cardTypesList = cardTypesResponse.Succeeded ? cardTypesResponse.List : [],
    //   physicalCardCartResponse = await get('shoppingcart/physicalCards'),
    //   cartShipToMe = physicalCardCartResponse.Succeeded ? physicalCardCartResponse.ShipToMeDonations : [],
    //   originalCartShipToMe = clone(cartShipToMe);
    // this.setState({ cardTypesList, cartShipToMe, originalCartShipToMe });
    this.setState({ cardTypesList: CustomPhysicalCardTypesList, cartShipToMe: [], originalCartShipToMe: [] })
  }

  updateShipToMe = (cardTypeId, denomination, quantity) => {
    console.log('----update ship to me---')
  }

  updateCartShipToMe = () => {
    console.log('----update cart ship to me---')
  }
  render() {
    return (
      <section>
        <Container>
          <Row>
            <Col xs="12" className="justify-content-center text-center mt-4 mb-2">
              <h1>Custom Physical Cards</h1>
            </Col>
            <Col xs="12" md={{ size: 8, offset: 2 }} className="justify-content-center mb-2 text-center">
              <p>You can have cards shipped to you for in-person giving or shipped directly to the recipient. Want to order in bulk? Use our Custom Physical Cards page.</p>
            </Col>
          </Row>
          <Row className="ml-3 mr-0">
            <Col sm="12">
              <section>
                <Container>
                  <Row>
                    <div>
                      {this.state.cardTypesList.map((cardType, index) =>
                        <SelectCustomPhysicalCards
                          key={index}
                          cardType={cardType}
                        />
                      )}
                    </div>
                  </Row>
                </Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
