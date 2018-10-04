import React from 'react';
import { Button, Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, CustomInput } from 'reactstrap';
import { MerchatList, CountryList } from '../MockData'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
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
        charities: []
      },
      cards: [],
      personalInfo: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        mailing: '',
        city: '',
        state: '',
        zip: '',
        country: CountryList[0]
      }
    };
  }

  showMerchantListModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addThisCard = () => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(this.state.card),
      card: {
        donationOnline: false,
        merchant: MerchatList[0],
        mailInDonation: false,
        cardNumber: '',
        PIN: '',
        cardBalance: '',
        charities: []
      }
    }))
  }

  render() {
    const { card, cards, personalInfo } = this.state;
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
                      this.setState({ card });
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
                    value={card.cardNumber}
                    onChange={(e) => {
                      card.cardNumber = e.target.value;
                      this.setState({ card });
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
                    value={card.PIN}
                    onChange={(e) => {
                      card.PIN = e.target.value;
                      this.setState({ card });
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
                    value={card.cardBalance}
                    onChange={(e) => {
                      card.cardBalance = e.target.value;
                      this.setState({ card });
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
            <Col xs="12" style={{marginBottom: 310}}>
              <CharityChooser
                list='all'
                charityListPlaceholder='Suggested Charity'
                allowSelectWholeCategory={false}
                // selectedCharities={this.state.shoppingCart.PreSelectedCharityId}
                maxNumberOfCharities={1}
                onChange={selectedCharities => {
                  card.charities = selectedCharities;
                  this.setState({ card })
                }}
              />
            </Col>
          </div>
        </MainSection>
        <Button
          color="primary"
          className="d-none d-md-block m-5"
          onClick={() => this.addThisCard()}
        >
          Add This Card
        </Button>
        <MainSection className="container-fluid" title="Your Contact Information" icon="list">
          <div className="form-panel px-5 mb-5 container-fluid">
            <ContactInformationForm onChange={personalInfo => this.setState({ personalInfo })} />
            <CustomInput
              type="checkbox"
              id="shareDonateCheckbox"
              label={<p>Please share my contact info with the charity I am donating to.</p>}
            />
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Review and Finish" icon="list">
          <div className="form-panel px-5 mb-5 container-fluid">
            <Row>
              <Col xs="12" md="7">
              {cards.map((card, index) =>
                <Card key={index}>
                  <CardHeader>Card #{(index + 1)}</CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="5"><small><p>Merchant:</p></small></Col>
                      <Col xs="7"><small><p><strong>{card.merchant.label}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>Card Number:</p></small></Col>
                      <Col xs="7"><small><p><strong>{card.cardNumber}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>PIN:</p></small></Col>
                      <Col xs="7"><small><p><strong>{card.PIN}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>Card Balance:</p></small></Col>
                      <Col xs="7"><small><p><strong>{card.cardBalance}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>Charities:</p></small></Col>
                      <Col xs="7">
                        {card.charities.map((charity, index) =>
                          <small key={index}><p><strong>{charity.value}</strong></p></small>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <small><p><strong>
                          IMPORTANT: Do not destroy your card until you receive a final verification email from CharityChoice with explicit instructions to do so.
                        </strong></p></small>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              )}
              </Col>
              <Col xs="12" md="5">
                <Card>
                  <CardHeader>Personal Information</CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="5"><small><p>First Name:</p></small></Col>
                      <Col xs="7"><small><p><strong>{personalInfo.firstname}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>Last Name:</p></small></Col>
                      <Col xs="7"><small><p><strong>{personalInfo.lastname}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>Email:</p></small></Col>
                      <Col xs="7"><small><p><strong>{personalInfo.email}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>Phone:</p></small></Col>
                      <Col xs="7"><small><p><strong>{personalInfo.phone}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>Mailing Address:</p></small></Col>
                      <Col xs="7"><small><p><strong>{personalInfo.mailing}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>City:</p></small></Col>
                      <Col xs="7"><small><p><strong>{personalInfo.city}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>State:</p></small></Col>
                      <Col xs="7"><small><p><strong>{personalInfo.state.label}</strong></p></small></Col>
                    </Row>
                    <Row>
                      <Col xs="5"><small><p>Zip:</p></small></Col>
                      <Col xs="7"><small><p><strong>{personalInfo.zip}</strong></p></small></Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </MainSection>
      </MainPage>
    )
  }
}
