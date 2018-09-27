import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Button, Label, Row, Col, Card, CardHeader, CardBody, CardImg, CustomInput } from 'reactstrap';
import { OccasionsList, CardDesignList, LayoutList, CardBackgroundSchemesList } from '../MockData'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CardDetailForm from './DigitalComponents/CardDetailForm'
import CustomSelect from '../MiscComponents/CustomSelect'

class PrintCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        occasion: OccasionsList[0],
        design: CardDesignList[0],
        layout: LayoutList[0],
        scheme: CardBackgroundSchemesList[0]
      }
    };
  }
  updateCard = data => {
    this.setState({
      card: {...this.state.card, [data.key]: data.value}
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
                  <img src='/images/OccasionSelect.png' className="w-100" />
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
                    <span className="font-weight-bold">Personal Gifts - </span><span className="font-italic">personalize your card</span><br />
                    • <Link to='#' className="ml-3 my-3">create your personal card with your own graphic</Link><br />
                    <span className="font-weight-bold">Business Gifts - </span><span className="font-italic">branding for your card</span><br />
                    • <Link to='#' className="ml-3 my-3">create your card with your own graphic</Link><br />
                    • <Link to='#' className="ml-3 my-3">create your card with your corporate logo</Link><br />
                    <span><CustomInput type="checkbox" id="exampleCustomCheckbox" label="add a logo to the special occasion card that you have selected" /></span><br />
                  </CardBody>
                </Card>
              </Col>
              <h4 class="mt-5"><u>Print Charity Gift Cards from your own computer or provide to a peofessional printer.</u></h4>
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
                    <CardImg className={card.design === design ? 'border rounded border-5 border-primary' : null} width="100%" src={design.ImageUrl} alt="Card image cap" onClick={() => this.updateCard({ key: 'design', value: design})} />
                  </Card>
                </Col>
              )
            })}
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Print Layout" icon="list">
          <div className="form-panel px-5 container-fluid">
            <div className="has-float-label d-block">
              <CustomSelect
                name="layoutSelect"
                placeholder="Choose the print layout for your cards"
                options={LayoutList}
                selectedValue={card.layout}
                onChange={(selectedLayout) => {
                  card.layout = selectedLayout;
                  this.setState({ card: card });
                }}
              />
            </div>
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
        </MainSection>
      </MainPage>
    )
  }
}

const ColorButton = styled(Button)`
  background-color: ${props => props.color} !important
`

export default PrintCards;
