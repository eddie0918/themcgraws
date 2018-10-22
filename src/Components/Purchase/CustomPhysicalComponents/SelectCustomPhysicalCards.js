import React from 'react';
import {
  Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, CustomInput, Button, Modal, ModalHeader, ModalBody
} from 'reactstrap';

export default class SelectCustomPhysicalCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      quantityChanged: [],
      cardType: this.props.cardType
    }
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
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
  updateDenomination = e => {
    this.setState({
      cardType: { ...this.state.cardType, Denomination: e.target.value },
    })
  }

  updateCart = () => {
    console.log('----- update cart ---', this.state.cardType)
  }

  render() {
    const { cardType } = this.state
    const { id } = this.props
    console.log(id, cardType.Type)
    return (
      <div className="mb-4">
        <Row className="card-background pt-4 pb-2 top-radius mx-0">
          <Col xs="12" lg="4" className="card-background">
            <div className="text-center"><h3><u>{cardType.CustomPhysicalCardsTypeName}</u></h3></div>
          </Col>
          <Col xs="12" lg="8" className="card-background">
            <div className="text-center"><h6>Dimensions of customizable area: <b>{cardType.CustomAreaSizeText}</b></h6></div>
          </Col>
        </Row>
        <div>
          <Container>
            <Row className="card-background">
              <Col xs="12" lg="4" className="card-background bottom-left-radius">
                <div className="justify-content-center text-center p-3" onClick={this.toggleModal}>
                  <img src={cardType.ImageUrl} className="w-100" alt={cardType.CustomPhysicalCardsTypeName} />
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                  <ModalHeader toggle={this.toggleModal}>{cardType.CustomPhysicalCardsTypeName}</ModalHeader>
                  <ModalBody>
                    <img src={cardType.ImageUrl} alt="Preview of physical card stationery" className="w-100" />
                  </ModalBody>
                </Modal>
              </Col>
              <Col xs="12" lg="8" className="card-background bottom-right-radius">
                <Row className="card-background">
                  <InputGroup inline="true" className="justify-content-center px-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText style={{ width: "9em" }}>
                        Denomination
                      </InputGroupText>
                    </InputGroupAddon>
                    <input
                      defaultValue={cardType.Denomination}
                      onChange={this.updateDenomination}
                      id={[cardType.CustomPhysicalCardsTypeName, this.state.type].join(' ')} name={cardType.CustomPhysicalCardsTypeName}
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
                      id={[cardType.CustomPhysicalCardsTypeName, this.state.type].join(' ')} name={cardType.CustomPhysicalCardsTypeName}
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

                  <Row className="w-100 m-1 card-background">
                    <Col sm={{ size: 'auto' }} className="w-100 text-center card-background">
                      <Button
                        color="primary"
                        className="mt-3 mb-4"
                        onClick={this.updateCart}>
                        Add to Cart
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
