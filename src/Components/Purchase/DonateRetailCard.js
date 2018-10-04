import React from 'react';
import styled from 'styled-components'
import { Button, Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, CustomInput } from 'reactstrap';
import { MerchatList, OccasionsList, CardDesignList, CardBackgroundSchemesList } from '../MockData'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CardDetailForm from './DigitalComponents/CardDetailForm'
import CustomSelect from '../MiscComponents/CustomSelect'
import CharityChooser from '../MiscComponents/CharityChooser';
import ContactInformationForm from './DonateRetailComponents/ContactInformationForm';

export default class DonateRetailCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      card: {
        donationOnline: false,
        merchant: MerchatList[0],
        mailInDonation: false,
        cardNumber: '',
        PIN: '',
        cardBalance: '',

        occasion: OccasionsList[0],
        design: CardDesignList[0],
        scheme: CardBackgroundSchemesList[0]
      }
    };
  }

  showMerchantListModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  updateCard = data => {
    this.setState({
      card: { ...this.state.card, [data.key]: data.value }
    })
    // this.handleNext() scroll to next step
  }
  render() {
    const { card } = this.state;
    return (
      <MainPage
        title='Donate Your Card'
        description={<p>Welcome to <strong>Donate Your Card,</strong> where you can exchange your store and restaurant gift cards for  a charity donation. You will receive a tax receipt for the entire full value or any unused balance of your card. <br /> Over 1000 charities to choose from!</p>}
      >
        <MainSection className="container-fluid" title="Choose Gift Card Machant" icon="list">
          <div className="form-panel px-5 container-fluid">
            <Row>
              <Col xs="12" md="5">
                <div className="justify-content-center text-center p-3">
                  <img src='/images/DonateRetailCard.png' className="w-100" />
                </div>
              </Col>
              <Col xs="12" md="7">
                <CustomInput
                  type="checkbox"
                  id="donateOnlineCheckbox"
                  label={<p><strong>DONATE ONLINE:</strong> easiest and prefered method.</p>}
                />
                <div className="has-float-label d-block">
                  <CustomSelect
                    name="merchantSelect"
                    placeholder="Select your gift card merchant..."
                    options={MerchatList}
                    selectedValue={card.merchant}
                    onChange={(selectedMerchant) => {
                      card.merchant = selectedMerchant;
                      this.setState({ card: card });
                    }}
                  />
                </div>
                <CustomInput
                  type="checkbox"
                  id="mailInDonationCheckbox"
                  label={<p><strong>MAIL-IN DONATION:</strong> offers an expanded selection of merchants.</p>}
                />
                <p
                  className="d-none d-md-block text-primary"
                  onClick={this.showMerchantListModal}
                >
                  Preview your HonorCard
                </p>
                <Modal className="merchant-list-modal" contentClassName="merchant-modal-content" isOpen={this.state.modal} toggle={this.showMerchantListModal} className={this.props.className}>
                  <ModalHeader toggle={this.showMerchantListModal}>List of Merchants for Physical cards</ModalHeader>
                  <ModalBody>
                    <Card>
                      <CardBody className="p-5">
                        {MerchatList.map((merchant, index) => {
                          return (
                            <p key={index}>• {merchant.label}</p>
                          )
                        })}
                      </CardBody>
                    </Card>
                  </ModalBody>
                </Modal>
              </Col>
            </Row>
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Card Number and PIN" icon="list">
          <div className="form-panel px-5 container-fluid d-flex flex-wrap">
            <Row className="w-100">
              <Col md="4">
                Card Merchant:
              </Col>
              <Col md="5">
                <strong>Adidas</strong>
              </Col>
            </Row>
            <Row className="w-100 mt-3">
              <Col md="4">
                Card Number:
              </Col>
              <Col md="5">
                <FormGroup className="has-float-label d-block">
                  <Input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="Enter Card Number"
                    defaultValue={card.cardNumber}
                    onChange={(e) => {
                      card.cardNumber = e.target.value;
                      this.setState({ card: card });
                    }}
                  />
                  <Label for="cardNumber">Enter Card Number</Label>
                </FormGroup>
              </Col>
            </Row>
            <Row className="w-100">
              <Col md="4">
                PIN:
              </Col>
              <Col md="5">
                <FormGroup className="has-float-label d-block">
                  <Input
                    type="text"
                    name="cardPin"
                    id="cardPin"
                    placeholder="Enter PIN Number"
                    defaultValue={card.PIN}
                    onChange={(e) => {
                      card.PIN = e.target.value;
                      this.setState({ card: card });
                    }}
                  />
                  <Label for="cardPin">Enter PIN Number</Label>
                </FormGroup>
              </Col>
            </Row>
            <Row className="w-100">
              <Col md="4">
                Card Value:
              </Col>
              <Col md="5">
                <FormGroup className="has-float-label d-block">
                  <Input
                    type="number"
                    name="cardBalance"
                    id="cardBalance"
                    placeholder="$"
                    defaultValue={card.cardBalance}
                    onChange={(e) => {
                      card.cardBalance = e.target.value;
                      this.setState({ card: card });
                    }}
                  />
                  <Label for="cardBalance">Enter Card Balance</Label>
                </FormGroup>
              </Col>
            </Row>
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Choose a Charity" icon="heart">
          <div className="form-panel px-5 container-fluid d-flex flex-wrap">
            <Col xs="12"  style={{marginBottom: 310}}>
              <CharityChooser
                list='all'
                charityListPlaceholder='Suggested Charity'
                allowSelectWholeCategory={false}
                // selectedCharities={this.state.shoppingCart.PreSelectedCharityId}
                maxNumberOfCharities={1} />
            </Col>
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Your Contact Information" icon="list">
          <div className="form-panel px-5 mb-5 container-fluid">
            <ContactInformationForm contactInfo={{}} />
            <CustomInput
              type="checkbox"
              id="shareDonateCheckbox"
              label={<p>Please share my contact info with the charity I am donating to.</p>}
            />
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Review and Finish" icon="list">
          <div className="form-panel px-5 mb-5 container-fluid">
            <ContactInformationForm contactInfo={{}} />
            <CustomInput
              type="checkbox"
              id="shareDonateCheckbox"
              label={<p>Please share my contact info with the charity I am donating to.</p>}
            />
          </div>
        </MainSection>
        {/* <MainSection className="container-fluid" title="Choose a card background scheme" icon="list">
          <div className="form-panel px-5 container-fluid">
            {CardBackgroundSchemesList.map((scheme, index) => {
              return (
                <ColorButton
                  key={index}
                  className="m-1"
                  color={scheme.value}
                  onClick={() => this.updateCard({ key: 'scheme', value: scheme })}
                >
                  {scheme.label}
                </ColorButton>
              )
            })}
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Preview your card design" icon="list">
          <div className="form-panel px-5 container-fluid">
            <Card style={{ backgroundColor: card.scheme.color, borderColor: card.scheme.color }}>
              <CardHeader className="text-center">Selected Design: <b>{card.design.id}</b></CardHeader>
              <CardBody className="p-5" style={{ backgroundColor: card.scheme.color, borderColor: card.scheme.color }}>
                <img width="100%" src={card.design.ImageUrl} alt="Card image cap" />
              </CardBody>
            </Card>
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Enter the card details" icon="list">
          <div className="form-panel px-5 mb-5 container-fluid">
            <CardDetailForm />
          </div>
        </MainSection> */}
      </MainPage>
    )
  }
}

const ColorButton = styled(Button)`
  background-color: ${props => props.color} !important
`
