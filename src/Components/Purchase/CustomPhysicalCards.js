import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainPage from '../MainTemplate/MainPage'
import SelectCustomPhysicalCards from './CustomPhysicalComponents/SelectCustomPhysicalCards'
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

  componentDidMount () {
    this.setState({ cardTypesList: CustomPhysicalCardTypesList, cartShipToMe: [], originalCartShipToMe: [] })
  }

  updateShipToMe = (cardTypeId, denomination, quantity) => {
    console.log('----update ship to me---', cardTypeId, denomination, quantity)
  }

  updateCartShipToMe = () => {
    console.log('----update cart ship to me---')
  }
  render() {
    return (
      <MainPage
        title='Custom Physical Cards'
        description='You can have cards shipped to you for in-person giving or shipped directly to the recipient. Want to order in bulk? Use our Custom Physical Cards page.'
      >
        <Col sm="12">
          <section>
            <Container>
              <Row>
                <div>
                  {this.state.cardTypesList.map((cardType, index) =>
                    <SelectCustomPhysicalCards
                      key={index}
                      id={cardType.PhysicalCardTypeId}
                      cardType={cardType}
                    />
                  )}
                </div>
              </Row>
            </Container>
          </section>
        </Col>
      </MainPage>
    )
  }
}
