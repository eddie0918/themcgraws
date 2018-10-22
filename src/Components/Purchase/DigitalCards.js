import React from 'react';
import styled from 'styled-components'
<<<<<<< HEAD
import { Button, Col, Card, CardHeader, CardBody, CardImg } from 'reactstrap';
import { GetCardOccasions, DefaultOccasion, CardDesignList, CardBackgroundSchemesList } from '../MiscComponents/Data'
=======
import { Button, Row, Col, Card, CardHeader, CardBody, CardImg } from 'reactstrap';
import { OccasionsList, CardDesignList, CardBackgroundSchemesList } from '../MockData'
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CardDetailForm from './DigitalComponents/CardDetailForm'
import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

class DigitalCards extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    const occasionsList = [],
      cardDesignList = [];
    this.state = {
      occasionsList,
      cardDesignList,
      card: {
        occasion: DefaultOccasion,
=======
    this.state = {
      card: {
        occasion: OccasionsList[0],
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
        design: CardDesignList[0],
        scheme: CardBackgroundSchemesList[0]
      }
    };
  }

<<<<<<< HEAD
  async componentDidMount() {
    const occasionsList = await GetCardOccasions();
    this.setState({ occasionsList });
  }

  updateCard(data) {
    this.setState({
      card: { ...this.state.card, [data.key]: data.value }
    })
    // this.handleNext() scroll to next step
  }
  updateOccasion() {

  }
=======
  updateCard = data => {
    this.setState({
      card: {...this.state.card, [data.key]: data.value}
    })
    // this.handleNext() scroll to next step
  }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
  render() {
    const { card } = this.state;
    return (
      <MainPage
        title='Digital Cards'
        description={<p>You can have cards shipped to you for in-person giving or shipped directly to the recipient. Want to order in bulk? Use our Custom Physical Cards page.</p>}
      >
        <MainSection className="container-fluid" title="Choose the occasion" icon="list">
          <div className="form-panel px-5 container-fluid">
<<<<<<< HEAD
            {this.state.occasionsList.map((occasion, index) => {
              return (
                <Chip
                  key={index}
                  label={occasion.OccasionName}
                  onClick={() => this.updateOccasion(occasion.OccasionId)}
                  className="m-1"
                  icon={occasion.OccasionId === this.state.card.occasion.OccasionId ? <DoneIcon /> : null}
=======
            {OccasionsList.map((occasion, index) => {
              return (
                <Chip
                  key={index}
                  label={occasion.label}
                  onClick={() => this.updateCard({ key: 'occasion', value: occasion})}
                  className="m-1"
                  icon={occasion.value == this.state.card.occasion.value ? <DoneIcon /> : null}
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
                />
              )
            })}
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Choose a card image" icon="list">
          <div className="form-panel px-5 container-fluid d-flex flex-wrap">
            {CardDesignList.map((design, index) => {
              return (
                <Col key={index} xs="6" sm="3" className="my-3">
                  <Card>
<<<<<<< HEAD
                    <CardImg
                      width="100%"
                      className={card.design === design ? 'border rounded border-5 border-primary' : null}
                      src={design.ImageUrl}
                      alt="Card image cap"
                      onClick={() => this.updateCard({ key: 'design', value: design })} />
=======
                    <CardImg width="100%" className={card.design === design ? 'border rounded border-5 border-primary' : null} src={design.ImageUrl} alt="Card image cap" onClick={() => this.updateCard({ key: 'design', value: design})} />
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
                  </Card>
                </Col>
              )
            })}
          </div>
        </MainSection>
        <MainSection className="container-fluid" title="Choose a card background scheme" icon="list">
          <div className="form-panel px-5 container-fluid">
            {CardBackgroundSchemesList.map((scheme, index) => {
              return (
                <ColorButton
                  key={index}
                  className="m-1"
                  color={scheme.value}
<<<<<<< HEAD
                  onClick={() => this.updateCard({ key: 'scheme', value: scheme })}
=======
                  onClick={() => this.updateCard({ key: 'scheme', value: scheme})}
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
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
<<<<<<< HEAD
                <img width="100%" src={card.design.ImageUrl} alt="Selected Design" />
=======
                <img width="100%" src={card.design.ImageUrl} alt="Card image cap" />
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
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

export default DigitalCards;
