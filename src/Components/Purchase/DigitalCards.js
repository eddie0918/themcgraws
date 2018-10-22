import React from 'react';
import styled from 'styled-components'
import { Button, Col, Card, CardHeader, CardBody, CardImg } from 'reactstrap';
import { GetCardOccasions, DefaultOccasion, CardDesignList, CardBackgroundSchemesList } from '../MiscComponents/Data'
import MainSection from '../MainTemplate/MainSection'
import MainPage from '../MainTemplate/MainPage'
import CardDetailForm from './DigitalComponents/CardDetailForm'
import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

class DigitalCards extends React.Component {
  constructor(props) {
    super(props);
    const occasionsList = [],
      cardDesignList = [];
    this.state = {
      occasionsList,
      cardDesignList,
      card: {
        occasion: DefaultOccasion,
        design: CardDesignList[0],
        scheme: CardBackgroundSchemesList[0]
      }
    };
  }

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
  render() {
    const { card } = this.state;
    return (
      <MainPage
        title='Digital Cards'
        description={<p>You can have cards shipped to you for in-person giving or shipped directly to the recipient. Want to order in bulk? Use our Custom Physical Cards page.</p>}
      >
        <MainSection className="container-fluid" title="Choose the occasion" icon="list">
          <div className="form-panel px-5 container-fluid">
            {this.state.occasionsList.map((occasion, index) => {
              return (
                <Chip
                  key={index}
                  label={occasion.OccasionName}
                  onClick={() => this.updateOccasion(occasion.OccasionId)}
                  className="m-1"
                  icon={occasion.OccasionId === this.state.card.occasion.OccasionId ? <DoneIcon /> : null}
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
                    <CardImg
                      width="100%"
                      className={card.design === design ? 'border rounded border-5 border-primary' : null}
                      src={design.ImageUrl}
                      alt="Card image cap"
                      onClick={() => this.updateCard({ key: 'design', value: design })} />
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
                <img width="100%" src={card.design.ImageUrl} alt="Selected Design" />
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
