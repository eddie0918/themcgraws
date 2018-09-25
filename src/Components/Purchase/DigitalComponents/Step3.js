import React from 'react';
import styled from 'styled-components'
import { Button } from 'reactstrap';
import { Step, StepLabel, StepContent, IconButton } from '@material-ui/core';
import ArrowLeftSharp from '@material-ui/icons/ArrowLeftSharp';
import { CardBackgroundSchemesList } from '../../MockData'

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: 0
    }
  }

  updateCard = scheme => {
    // this.setState({ activeType: type }, () => this.props.nextStep())
    this.setState({ activeType: scheme }, () => this.props.updateCard({ key: 'scheme', value: scheme}))
  }
  render() {
    return (
      <Step {...this.props}>
        <StepLabel><h3>Choose a card background scheme</h3></StepLabel>
        <StepContent>
            {CardBackgroundSchemesList.map((scheme, index) => {
              return (
                <ColorButton className="m-1" color={scheme.color} onClick={() => this.updateCard(scheme)}>{scheme.name}</ColorButton>
              )
            })}
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

export default Step2
