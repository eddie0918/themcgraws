import React from 'react';
import {
  Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, FormGroup, Button
} from 'reactstrap';

export default class SelectCustomPhysicalCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityChanged: [],
      cardType: this.props.cardType
    }
  }

  updateType = e => {
    this.setState({
      cardType: { ...this.state.cardType, Type: e.target.value },
    })
  }
  updateQuantity = e => {
    this.setState({
      cardType: { ...this.state.cardType, Quantity: e.target.value },
    })
  }
  updateDenomation = e => {
    this.setState({
      cardType: { ...this.state.cardType, Denomation: e.target.value },
    })
  }

  updateCart = () => {
    console.log('----- update cart ---', this.state.cardType)
  }

  render() {
    const { cardType, quantityChanged } = this.state
    return (
      <div className="mb-4">
        <div className="text-center pt-4 pb-2 white-background top-radius"><h3><u>{cardType.CardTypeName}</u></h3></div>
        <div>
          <Container>
            <Row className="white-background">
              <Col xs="12" lg="4" className="white-background bottom-left-radius">
                <div className="justify-content-center text-center">
                  <img src={cardType.ImageUrl} className="physical-card-images" alt={cardType.CardTypeName} />
                </div>
              </Col>
              <Col xs="12" lg="8" className="white-background bottom-right-radius">
                <Row className="white-background">
                  <InputGroup inline="true" className="justify-content-center px-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText style={{ width: "9em" }}>
                        Denomination
                      </InputGroupText>
                    </InputGroupAddon>
                    <input
                      defaultValue={cardType.Denomation}
                      onChange={this.updateDenomation}
                      id={[cardType.CardTypeName, this.state.type].join(' ')} name={cardType.CardTypeName}
                      type="number"
                      min="0"
                      // max={denom.Stock}
                      maxLength="4"
                      className="w-50 text-center form-control"
                      placeholder=" "
                      style={{ maxWidth: "30vw" }} />
                    {/* {denom.Stock < 200 &&
                      <div>
                        <Badge color="secondary">
                          Only {denom.Stock} cards left
                            </Badge>
                      </div>} */}
                  </InputGroup>
                  <InputGroup inline="true" className="justify-content-center px-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText style={{ width: "9em" }}>
                        Quantity
                      </InputGroupText>
                    </InputGroupAddon>
                    <input
                      defaultValue={cardType.Quantity}
                      onChange={this.updateQuantity}
                      id={[cardType.CardTypeName, this.state.type].join(' ')} name={cardType.CardTypeName}
                      type="number"
                      min="0"
                      // max={denom.Stock}
                      maxLength="4"
                      className="w-50 text-center form-control"
                      placeholder=" "
                      style={{ maxWidth: "30vw" }} />
                    {/* {denom.Stock < 200 &&
                      <div>
                        <Badge color="secondary">
                          Only {denom.Stock} cards left
                            </Badge>
                      </div>} */}
                  </InputGroup>
                  <Col check xs="12" >
                    <input type="radio" value="0" checked={cardType.Type === "0"} onChange={this.updateType} /> One Color Customization
                  </Col>
                  <Col xs="12">
                    <input type="radio" value="1" checked={cardType.Type === "1"} onChange={this.updateType} /> Multi-color Customization
                  </Col>

                  <Row className="w-100 m-1 white-background">
                    <Col sm={{ size: 'auto' }} className="w-100 text-center white-background">
                      <Button
                        color="primary"
                        className="mt-3 mb-4"
                        onClick={this.updateCart}>
                        Add to Cart
                        {/* {(quantityChanged.find(c => c === cardType.PhysicalCardTypeId) ||
                          (this.props.originalCartShipToMe.find(c => c.PhysicalCardTypeId === cardType.PhysicalCardTypeId))) ?
                          'Update Quantities' : 'Add to Cart'
                        } */}
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
