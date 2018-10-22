import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, CardImg, CustomInput, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { GetCardOccasions, DefaultOccasion, CardDesignList, LayoutList, CardBackgroundSchemesList } from '../MiscComponents/Data'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CardDetailForm from './DigitalComponents/CardDetailForm'
import CustomSelect from '../MiscComponents/CustomSelect'

class PrintCards extends React.Component {
  constructor(props) {
    super(props);
    const occasionsList = [],
      cardDesignList = [];
    this.state = {
      occasionsList,
      cardDesignList,
      modal: false,
      card: {
        occasion: DefaultOccasion,
        design: CardDesignList[0],
        layout: LayoutList[0],
        scheme: CardBackgroundSchemesList[0]
      }
    };
  }
  async componentDidMount() {
    const occasionsList = await GetCardOccasions();
    this.setState({ occasionsList });
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
    // this.handleNext() scroll to next step
  }
  render() {
    const { card } = this.state;
    return (
      <MainPage
        title='Printable Cards'
      >
        <MainSection className="container-fluid" title="Choose the occasion" icon="list">
          <div className="form-panel px-5 container-fluid">
            <Row>
              <Col xs="12" md="5">
                <div className="justify-content-center text-center p-3">
                  <img src='/images/PrintableCard.png' className="w-100" alt="Printable cards" />
                </div>
                <div className="has-float-label d-block">
                  <CustomSelect
                    name="layoutSelect"
                    placeholder="Select an occasion for this card..."
                    options={this.state.occasionsList.map(o => ({ value: o, label: o.OccasionName }))}
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
                    <span className="font-weight-bold">Personal Gifts - </span><span className="font-italic">personalize your card</span><br />
                    • <Link to='#' className="ml-3 my-3">create your personal card with your own graphic</Link><br />
                    <span className="font-weight-bold">Business Gifts - </span><span className="font-italic">branding for your card</span><br />
                    • <Link to='#' className="ml-3 my-3">create your card with your own graphic</Link><br />
                    • <Link to='#' className="ml-3 my-3">create your card with your corporate logo</Link><br />
                    <span><CustomInput type="checkbox" id="exampleCustomCheckbox" label="add a logo to the special occasion card that you have selected" /></span><br />
                  </CardBody>
                </Card>
              </Col>
              <h4 className="mt-5"><u>Print Charity Gift Cards from your own computer or provide to a peofessional printer.</u></h4>
              <p>Simply follow each easy step to choose a card image, layout, add a message and make your charity donation purchase.<br />
                (Denomination will appear to the gift recipient)</p>
              <p>Your printed cards will each contain a unique redemption code, enabling the card recipient to select up to three <Link to='#'>charities</Link> they wish to give the funds towards.</p>
              <p>Custom Charity List: You can pre-select a small group of charities to present to clients for designating the funds towards.</p>
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
        <MainSection className="container-fluid" title="Print Layout" icon="list">
          <div className="form-panel px-5 container-fluid">
            <Row>
              <Col xs="12" md="6">
                <div className="has-float-label d-block mt-5">
                  <CustomSelect
                    className="mb-0"
                    name="layoutSelect"
                    placeholder="Choose the print layout for your cards"
                    description={<small className="ml-1"><Link to='#' onClick={this.showPrintModal}>Click</Link> here for information about the different print layouts.</small>}
                    options={LayoutList}
                    selectedValue={card.layout}
                    onChange={(selectedLayout) => {
                      card.layout = selectedLayout;
                      this.setState({ card: card });
                    }}
                  />

                  <Modal isOpen={this.state.modal} toggle={this.showPrintModal} className={this.props.className}>
                    <ModalHeader toggle={this.showPrintModal}>Print Layouts</ModalHeader>
                    <ModalBody>
                      <p className="font-weight-bold">Card Print Layouts</p>
                      <p>For this card, there are 2 print layouts you can choose from:</p>
                      <p className="ml-3 mt-3 font-weight-bold">One sided - Full Page</p>
                      <p className="ml-5">This prints your Card on a single standard letter sized sheet (8.5" * 11"). The printing should be done in portrait mode.</p>
                      <p className="ml-3 mt-3 font-weight-bold">One sided - Card Size</p>
                      <p className="ml-5">This prints your Card on a single card, sized (5.5" * 7.75"). Blank cards of this size can be purchased at many stationary stores.</p>

                    </ModalBody>
                  </Modal>

                </div>
                <div className="has-float-label d-block mt-5">
                  <CustomSelect
                    name="backgroundSelect"
                    placeholder="Choose your card background color"
                    description={<small className="ml-1 font-italic">NOTE: This option is only available for our basic print layouts.</small>}
                    options={CardBackgroundSchemesList}
                    selectedValue={card.scheme}
                    onChange={(selectedScheme) => {
                      console.log(selectedScheme)
                      card.scheme = selectedScheme;
                      this.setState({ card: card });
                    }}
                  />
                </div>
              </Col>
              <Col xs="12" md="6">
                <Card style={{ backgroundColor: card.scheme, borderColor: card.scheme }}>
                  <CardHeader className="text-center">Selected Design: <b>{card.design.id}</b></CardHeader>
                  <CardBody className="p-5" style={{ backgroundColor: card.scheme, borderColor: card.scheme }}>
                    <img width="100%" src={card.design.ImageUrl} alt="Selected design" />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Enter the card details" icon="list">
          <div className="form-panel px-5 mb-5 container-fluid">
            <CardDetailForm />
          </div>
        </MainSection>
      </MainPage>
    )
  }
}

export default PrintCards;
