import React from 'react';
import {
  Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Badge, Button
} from 'reactstrap';

export default class SelectPhysicalCards extends React.Component {
  constructor(props) {
    super(props);

    //List of PhysicalCardTypeId which had one of their card quantities changed since page loaded.
    this.state = { quantityChanged: [] }
  }

  render() {
    return <section>
      <Container>
        <Row>
          <div>
            {this.props.cardTypesList.map((cardType, index) =>
              <div className="mb-4" key={index}>
                <div className="text-center pt-4 pb-2 card-background top-radius"><h3><u>{cardType.CardTypeName}</u></h3></div>
                <div>
                  <Container>
                    <Row className="card-background">
                      <Col xs="12" lg="4" className="card-background bottom-left-radius">
                        <div className="justify-content-center text-center">
                          <img src={cardType.ImageUrl} className="physical-card-images" alt={cardType.CardTypeName} />
                          <br />
                          <div className="physical-card-description pb-2" dangerouslySetInnerHTML={{ __html: cardType.Description }} ></div>
                        </div>
                      </Col>
                      <Col xs="12" lg="8" className="card-background bottom-right-radius">
                        <Row className="card-background">
                          {cardType.Denominations.map((denom, dIndex) => {
                            const cardInCart = this.props.cardsInCart.find(cic =>
                              cic.PhysicalCardTypeId === cardType.PhysicalCardTypeId && cic.Denomination === denom.Denomination),
                              quantity = cardInCart && parseInt(cardInCart.Quantity, 10) ? cardInCart.Quantity : '';
                            return <div key={dIndex} className="col-12 col-md-6 p-1 card-background">
                              <InputGroup inline="true" className="justify-content-center px-1" key={dIndex}>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText style={{ width: "5.8em" }}>
                                    ${parseInt(denom.Denomination, 10)}.00
                                                                </InputGroupText>
                                </InputGroupAddon>
                                <input
                                  defaultValue={quantity}
                                  onChange={(e) => {
                                    this.props.updateCardQuantity(cardType.PhysicalCardTypeId, denom.Denomination, e.target.value);
                                  }}
                                  id={[cardType.CardTypeName, denom.Denomination].join(' ')} name={cardType.CardTypeName}
                                  type="number"
                                  min="0"
                                  max={denom.Stock}
                                  maxLength="4"
                                  className="w-50 text-center form-control"
                                  placeholder=" "
                                  style={{ maxWidth: "30vw" }} />
                                {denom.Stock < 200 &&
                                  <div>
                                    <Badge color="secondary">
                                      Only {denom.Stock} cards left
                                                                    </Badge>
                                  </div>}
                              </InputGroup>
                            </div>;
                          })}
                          <Row className="w-100 m-1 card-background">
                            <Col sm={{ size: 'auto' }} className="w-100 text-center card-background">
                              <Button
                                color="primary"
                                className="mt-3 mb-4"
                                onClick={() => {
                                  this.props.updateCart();
                                  const quantityChanged = this.state.quantityChanged;
                                  if (!quantityChanged.find(c => c === cardType.PhysicalCardTypeId)) {
                                    quantityChanged.push(cardType.PhysicalCardTypeId);
                                    this.setState({ quantityChanged });
                                  }
                                }}>
                                {(this.state.quantityChanged.find(c => c === cardType.PhysicalCardTypeId) ||
                                  (this.props.originalCartShipToMe.find(c => c.PhysicalCardTypeId === cardType.PhysicalCardTypeId))) ?
                                  'Update Quantities' : 'Add to Cart'
                                }
                              </Button>
                            </Col>
                          </Row>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            )}

          </div>
        </Row>
      </Container>
    </section>;
  }
}
