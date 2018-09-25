import React from 'react';
import styled from 'styled-components'
import {
  Button, Card, CardHeader, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Step, StepLabel, StepContent, IconButton } from '@material-ui/core';
import ArrowLeftSharp from '@material-ui/icons/ArrowLeftSharp';
import { CardBackgroundSchemesList } from '../../MockData'

class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: 0
    }
  }
  updateType = type => {
    this.setState({ activeType: type }, () => this.props.nextStep())
  }
  render() {
    console.log('-----card--', this.props.card)
    const { card, completed } = this.props

    console.log('- completed', completed)

    return (
      <Step {...this.props}>
        <StepLabel><h3>Preview your card design</h3></StepLabel>
        <StepContent>
          {completed &&
            <Card style={{ backgroundColor: card.scheme.color, borderColor: card.scheme.color }}>
              <CardHeader className="text-center">Selected Design: <b>{card.design.id}</b></CardHeader>
              <CardBody className="p-2" style={{ backgroundColor: card.scheme.color, borderColor: card.scheme.color }}>
                <img width="100%" src={card.design.ImageUrl} alt="Card image cap" />
              </CardBody>
            </Card>
          }
          <div>
            <IconButton variant="fab" color="secondary" aria-label="Add" onClick={this.props.backStep}>
              <ArrowLeftSharp />
            </IconButton>
          </div>
        </StepContent>
      </Step>
    )
  }
}

const ColorButton = styled(Button)`
  background-color: ${props => props.color} !important
`

export default Step4
