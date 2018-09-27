import React from 'react';
import styled from 'styled-components'
import { Button, Row, Col, Card, CardHeader, CardBody, CardImg } from 'reactstrap';
import { OccasionsList, CardDesignList, CardBackgroundSchemesList } from '../MockData'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CardDetailForm from './DigitalComponents/CardDetailForm'
import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

class DigitalCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        occasion: OccasionsList[0],
        design: CardDesignList[0],
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
        title='Digital Cards'
        description={<p>You can have cards shipped to you for in-person giving or shipped directly to the recipient. Want to order in bulk? Use our Custom Physical Cards page.</p>}
      >
        <MainSection className="container-fluid" title="Choose the occasion" icon="list">
          <div className="form-panel px-5 container-fluid">
            {OccasionsList.map((occasion, index) => {
              return (
                <Chip
                  key={index}
                  label={occasion.label}
                  onClick={() => this.updateCard({ key: 'occasion', value: occasion})}
                  className="m-1"
                  icon={occasion.value == this.state.card.occasion.value ? <DoneIcon /> : null}
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
                    <CardImg width="100%" src={design.ImageUrl} alt="Card image cap" onClick={() => this.updateCard({ key: 'design', value: design})} />
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
                <ColorButton key={index} className="m-1" color={scheme.color} onClick={() => this.updateCard({ key: 'scheme', value: scheme})}>{scheme.name}</ColorButton>
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
        </MainSection>
      </MainPage>
    )
  }
}

const ColorButton = styled(Button)`
  background-color: ${props => props.color} !important
`

export default DigitalCards;
