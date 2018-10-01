import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, CardImg, CustomInput, Button, Modal, ModalHeader, ModalBody, Input } from 'reactstrap';
import { OccasionsList, CardDesignList, LayoutList, CardBackgroundSchemesList, DonationAmountList } from '../MockData'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CustomSelect from '../MiscComponents/CustomSelect'
import AddRecipientsTable from './HonorComponents/AddRecipientsTable'
import HonorCardPreviewTable from './HonorComponents/HonorCardPreviewTable'

class HonorCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      card: {
        occasion: OccasionsList[0],
        design: CardDesignList[0],
        layout: LayoutList[0],
        scheme: CardBackgroundSchemesList[0],
        greeting: '',
        message: '',
        donationAmount: DonationAmountList[0],
        type: {
          id: '',
          amount: '',
          sendNow: true,
          sendingDate: '',
          recipients: []
        },

      }
    };
  }

  showPreviewModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  updateType = type => {
    console.log(type)
    this.setState({ type }, () => console.log(this.state.type))
  }
  showPrintModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  updateCard = data => {
    this.setState({
      card: { ...this.state.card, [data.key]: data.value }
    })
  }
  render() {
    const { card } = this.state;
    return (
      <MainPage
        title='Honor Cards'
      >
        <MainSection className="container-fluid" title="Choose the occasion" icon="list">
          <div className="form-panel px-5 container-fluid">
            <Row>
              <Col xs="12" md="5">
                <div className="justify-content-center text-center p-3">
                  <img src='/images/HonorCard.gif' className="w-100" />
                </div>
                <div className="has-float-label d-block">
                  <CustomSelect
                    name="layoutSelect"
                    placeholder="Select an occasion for this card..."
                    options={OccasionsList}
                    selectedValue={card.occasion}
                    onChange={(selectedOccasion) => {
                      card.occasion = selectedOccasion;
                      this.setState({ card: card });
                    }}
                  />
                </div>
              </Col>
              <Col xs="12" md="7">
                <Card>
                  <CardHeader>Upload Images and Logo</CardHeader>
                  <CardBody className="px-5 py-3">
                    <span className="font-weight-bold">Personal Gifts - </span><span className="font-italic">personalize your HonorCard</span><br />
                    • <Link to='#' className="ml-3 my-3">create your personal card with your own graphic</Link><br />
                    <span className="font-weight-bold">Business Gifts - </span><span className="font-italic">branding for your HonorCard</span><br />
                    • <Link to='#' className="ml-3 my-3">create your HonorCard with your own graphic</Link><br />
                    • <Link to='#' className="ml-3 my-3">create your HonorCard with your corporate logo</Link><br />
                    <span><CustomInput type="checkbox" id="exampleCustomCheckbox" label="add a logo to the special occasion HonorCard that you have selected" /></span><br />
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <h4 className="mt-5"><u>Make your donation to a particular charity 'in honor of'.</u></h4>
                <span className="font-italic">...for honoree, occasion or sympathy - $2 and up</span><br />
                <p className="ml-3">
                  • Send HonorCards <br />
                  • Print from your computer <br />
                  • Post on your friend's Facebook Wall and Twitter <br />
                  • Post on your friend's Facebook Wall and Twitter <br />
                  • Send to Multiple recipients <br />
                  • Birthdays and Groups upload
                </p>
                <h4 className="mt-5">
                  <u>
                    Simply follow each easy step to choose a card, choose a charity and add a message.<br />
                    (Donation amount will appear to the recipient on the HonorCard)
                  </u>
                </h4>
                <p className="ml-3">
                  • You will have <span className="font-italic">send, send later, print</span> and <span className="font-italic">post</span> options later. <br />
                  • You will be able to send to mulitple recipients <span className="font-italic">and</span> add new cards prior to checkout.
                </p>
              </Col>
            </Row>

          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Choose a card image" icon="list">
          <div className="form-panel px-5 container-fluid d-flex flex-wrap">
            {CardDesignList.map((design, index) => {
              return (
                <Col key={index} xs="6" sm="3" className="my-3">
                  <Card>
                    <CardImg className={card.design === design ? 'border rounded border-5 border-primary' : null} width="100%" src={design.ImageUrl} alt="Card image cap" onClick={() => this.updateCard({ key: 'design', value: design })} />
                  </Card>
                </Col>
              )
            })}
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Choose Charity" icon="list">
          <div className="form-panel px-5 container-fluid">
            <Row>
              <Col xs="12" md="5">
                <div className="justify-content-center text-center p-3">
                  You have not yet chosen a charity.
                </div>
                <div className="has-float-label d-block">
                  <CustomSelect
                    name="layoutSelect"
                    placeholder="Choose a Charity"
                    options={[]}
                    selectedValue={card.occasion.value}
                    onChange={(selectedOccasion) => {
                      card.occasion = selectedOccasion;
                      this.setState({ card: card });
                    }}
                  />
                </div>
              </Col>
              <Col xs="12" md="7">
                <Card>
                  <CardHeader>Upload an HonorCard Files</CardHeader>
                  <CardBody className="px-5 py-3">
                    <span className="font-weight-bold">Birthdays and Groups</span><br />
                    <span className="font-italic">Different sending times, greetings, messages, donation amount, charity and HonorCard styles</span><br />
                    <p className="mt-3">If you wish to upload a file containing a list of recipients with an option for unique greetings, messages, nodation amounts, charity, HonorCard style and/or schedule sending times for each recipient, click on the button below.</p><br />
                    <span className="font-weight-bold">Multiple Recipients</span><br />
                    <span className="font-italic">Same sending time, message, greeting, donation amount, charity and HonorCard styles</span><br />
                    <p className="mt-3">If you wish to have the same greeting, message, nodation amount, charity, Honor Card style and sending time for all of your recipients, fill them in here on these pages, and then click 'Next'. You will have the option to upload a file containing your list of recipients in the next step.</p><br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Customize Your Card" icon="list">
          <div className="form-panel px-5 container-fluid">
            <Row>
              <Col xs="12" md="7">
                <span className="font-weight-bold">Greeting: </span><span className="font-italic">appears as bolded text</span><br />
                <p className="mt-1">Example: Salutation or Description of the Occasion. <span className="font-italic small">No html tags allowed.</span></p>
              </Col>
              <Col xs="12" md="5">
                <Input
                  className="mt-1"
                  type="text"
                  name="honorCardGreeting"
                  id="honorCardGreeting"
                  placeholder="Type greeting"
                  defaultValue={card.greeting}
                  onChange={(e) => {
                    card.greeting = e.target.value;
                    this.setState({ card: card });
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="7">
                <span className="font-weight-bold">Message:</span><br />
                <p className="mt-1">This is your personal message to the recipient(s). <span className="font-italic small">No html tags allowed.</span></p>
              </Col>
              <Col xs="12" md="5">
                <Input
                  className="mt-1"
                  type="textarea"
                  name="honorCardMessage"
                  id="honorCardMessage"
                  placeholder="Type mesage"
                  defaultValue={card.message}
                  onChange={(e) => {
                    card.message = e.target.value;
                    this.setState({ card: card });
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="7">
                <span className="font-weight-bold">Donation Amount:</span><br />
                <p className="mt-1">Select the amount from the drop-down list...</p><br />
              </Col>
              <Col xs="12" md="5">
                <div className="has-float-label w-100 d-none d-sm-inline-block">
                  <CustomSelect
                    name="donationAmountSelect"
                    options={DonationAmountList}
                    placeholder="Select Amount"
                    selectedValue={card.donationAmount.value}
                    onChange={(selectedAmount) => {
                      card.donationAmount = selectedAmount;
                      this.setState({ card: card });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                PLEASE NOTE:<br />
                If you plan to print these cards, you may wish to include the name of the recipient in the greeting or message fields.
              </Col>
            </Row>
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="eCard, Print or Post" icon="list">
          <div className="form-panel px-5 container-fluid">
            <Col>
              <CustomInput
                type="radio"
                id={'via-facebook'}
                label={<span className="font-weight-bold">Print or Post to a friend on Facebook</span>}
                checked={card.type.id === 0}
                onChange={() => {
                  card.type.id = 0;
                  this.setState({ card: card });
                }}
              />
              <div className="ml-4">Select this option if you want to print the card yourself or give it to a friend on Facebook</div>
              {card.type.id === 0 &&
                <Col>
                  <Row>
                    <span className="ml-4 pull-left d-flex align-items-center">Please enter the number of cards you wish to purchase: </span>
                    <span>
                      <Input
                        className="pull-right ml-1"
                        type="number"
                        name="amount"
                        id="amount"
                        defaultValue={card.type.amount}
                        onChange={(e) => {
                          card.type.amount = e.target.value;
                          this.setState({ card: card });
                        }}
                      />
                    </span>
                  </Row>
                </Col>
              }
            </Col>
            <Col>
              <CustomInput
                type="radio"
                id={'via-email'}
                label={<span className="font-weight-bold">Send your HonorCard by email (you will also have the capability of printing your card</span>}
                checked={card.type.id === 1}
                onChange={() => {
                  card.type.id = 1;
                  this.setState({ card: card });
                }}
              />
              <div className="ml-4">Select this option if you want to email the card to the recipients you choose, along with the option to print it.</div>
              {card.type.id === 1 &&
                <div className="ml-4">
                  <CustomInput
                    type="radio"
                    id={'send-now'}
                    label={<span className="font-weight-bold">Send Now</span>}
                    checked={card.type.sendNow}
                    onChange={() => {
                      card.type.sendNow = true;
                      this.setState({ card: card });
                    }}
                  />
                  <div className="ml-4">By selecting this option, the e-card will be sent immediately, upon purchase.</div>
                  <CustomInput
                    type="radio"
                    id={'send-later'}
                    label={<span className="font-weight-bold">Send Later</span>}
                    checked={!card.type.sendNow}
                    onChange={() => {
                      card.type.sendNow = false;
                      this.setState({ card: card });
                    }}
                  />
                  <div className="ml-4">By selecting this option, the e-card will not be sent immediately but will be delivered on the date and time you choose.</div>
                  {!card.type.sendNow &&
                    <Input type="Date"
                      className="ml-4 mb-1"
                      name="sendingDate"
                      id="sendingDate"
                      placeholder="Choose Date"
                      defaultValue={card.type.sendingDate}
                      onChange={(e) => {
                        card.type.sendingDate = e.target.value;
                        this.setState({ card: card });
                      }} />
                  }
                  <Button
                    color="primary"
                    className="d-none d-md-block"
                    onClick={() => this.props.onUpdateShippinginfo()}
                  >
                    Click Here to Upload Recipients File...
                  </Button>
                  <span className="font-weight-bold">Add Recipients Manually - </span><span className="font-italic">fill in boxes below, and click on the "Add This Recipient" button to add:</span><br />

                  <AddRecipientsTable
                    recipients={card.type.recipients}
                    addRecipient={recipient => {
                      card.type.recipients.push(recipient)
                      this.setState({ card: card });
                    }}
                  />
                </div>
              }
            </Col>
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Preivew & Finish" icon="list">
          <div className="form-panel px-5 container-fluid">
            <HonorCardPreviewTable card={card} />
            <Row className="mt-3">
              <Col xs="12" md="6">
                <CustomSelect
                  name="backgroundSelect"
                  placeholder="Choose your card background color "
                  options={CardBackgroundSchemesList}
                  selectedValue={card.scheme.value}
                  onChange={(selectedScheme) => {
                    console.log(selectedScheme)
                    card.scheme = selectedScheme;
                    this.setState({ card: card });
                  }}
                />
              </Col>
              <Col xs="12" md="6">
                {card.type.id === 1 &&
                  <CustomSelect
                    className="mb-0"
                    name="layoutSelect"
                    placeholder="Choose your card print layout: "
                    options={LayoutList}
                    selectedValue={card.layout.value}
                    onChange={(selectedLayout) => {
                      card.layout = selectedLayout;
                      this.setState({ card: card });
                    }}
                  />
                }
              </Col>
            </Row>
            <Button
              color="primary"
              className="d-none d-md-block"
              onClick={this.showPreviewModal}
            >
              Preview your HonorCard
            </Button>
            <Modal size="lg" isOpen={this.state.modal} toggle={this.showPreviewModal} className={this.props.className}>
              <ModalHeader toggle={this.showPreviewModal}>Preview your card</ModalHeader>
              <ModalBody>
                <Card style={{ backgroundColor: card.scheme.value, borderColor: card.scheme.value }}>
                  <CardBody className="p-5" style={{ backgroundColor: card.scheme, borderColor: card.scheme }}>
                    <p className="font-weight-bold text-white">{card.greeting}</p>
                    <p className="text-white">[Your name will appear here] made a donation in your honor...</p>
                    <img width="100%" src={card.design.ImageUrl} alt="Card image cap" />
                    <p className="font-weight-bold text-dark">{card.message}</p>
                    <p>Card Detail...</p>
                  </CardBody>
                </Card>
                {/* <p className="ml-3 mt-3 font-weight-bold">One sided - Full Page</p>
                <p className="ml-5">This prints your Card on a single standard letter sized sheet (8.5" * 11"). The printing should be done in portrait mode.</p>
                <p className="ml-3 mt-3 font-weight-bold">One sided - Card Size</p>
                <p className="ml-5">This prints your Card on a single card, sized (5.5" * 7.75"). Blank cards of this size can be purchased at many stationary stores.</p> */}

              </ModalBody>
            </Modal>
          </div>
        </MainSection>
      </MainPage>
    )
  }
}

export default HonorCards;
