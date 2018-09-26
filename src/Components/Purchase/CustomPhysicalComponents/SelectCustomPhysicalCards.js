import React from 'react';
import {
  Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, CustomInput, Button
} from 'reactstrap';

export default class SelectCustomPhysicalCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityChanged: [],
      cardType: this.props.cardType
    }
  }

  updateType = type => {
    this.setState({
      cardType: { ...this.state.cardType, Type: type },
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
    const { id } = this.props
    console.log(id, cardType.Type)
    return (
      <div className="mb-4">
        <Row className="white-background">
          <Col xs="12" lg="4" className="white-background bottom-left-radius">
            <div className="text-center pt-4 pb-2"><h3><u>{cardType.CardTypeName}</u></h3></div>
          </Col>
          <Col xs="12" lg="8" className="white-background bottom-right-radius">
            <div className="text-center pt-4 pb-2"><h6>Dementions of customizable area: <b>{cardType.DenominationDescription}</b></h6></div>
          </Col>
        </Row>
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
                  <Row inline="true" className="justify-content-center px-1">
                    <Col xs="11">
                      <CustomInput
                        type="radio"
                        id={'one-color' + id}
                        label='One Color Customization'
                        checked={cardType.Type === 0}
                        onChange={() => this.updateType(0)}
                      />
                    </Col>
                    <Col xs="11">
                      <CustomInput
                        type="radio"
                        id={'multi-color' + id}
                        label='Multi-color Customization'
                        checked={cardType.Type === 1}
                        onChange={() => this.updateType(1)}
                      />
                    </Col>
                  </Row>

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
