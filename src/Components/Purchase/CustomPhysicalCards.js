import React from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import MainPage from '../MainTemplate/MainPage'
import MainSection from '../MainTemplate/MainSection'
import SelectCustomPhysicalCards from './CustomPhysicalComponents/SelectCustomPhysicalCards'
import PricingChartModal from './CustomPhysicalComponents/PricingChartModal'
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

  componentDidMount() {
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
        <MainSection title="Custom Card Style" icon="list" className="cart">
          <div className="panel">
            <div className="panel-body pt-0">
              <h4 className="pt-3"><u>Customization</u></h4>
              <Row>
                <Col xs="12" md="7">
                  You can customize the grey area on the card styles shown blow.
                      <br />
                  <span className="font-weight-bold ml-3">File Type:</span> Upload a high resolution file: ai, eps, psd, pdf or jpg of your image, on the next step.
                      <br />
                  Note to Graphic Artists: Please convert text to outlines.
                      <br /><br />
                  You will be contacted by the printer with an online proof, for approval. (usually within 24 hrs; email is from 'Samantha' of plasticprinters.com)
                      <br />
                  <span className="font-weight-bold">Cards are shipped 5-7 business days from approval.</span>
                </Col>
                <Col xs="12" md="5">
                  <Card>
                    <CardHeader>Example of image content</CardHeader>
                    <CardBody className="px-5 py-3">
                      • Your company logo
                      <br />
                      • Your company name and logo
                      <br />
                      • A picture
                      <br />
                      • An image displaying some text
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <h4 className="pt-5"><u>Denomination</u></h4>
              <Row>
                <Col>
                  The denation amount of the card will appear to the recipient when they redeem it on our website.
                      <br />
                  If you also want it to show on your gift card, include it in the custom image or ask the printer to add it to your proof.
                      <br /><br />
                  <span className="font-weight-bold">Minimum order: 100 cards or $1500</span>
                </Col>
              </Row>
            </div>
          </div>
          <PricingChartModal buttonLabel="View Pricing Chart" />
          <Col sm="12">
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
          </Col>
        </MainSection>
      </MainPage>
    )
  }
}
