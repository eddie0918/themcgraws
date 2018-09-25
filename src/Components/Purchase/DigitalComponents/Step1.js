import React from 'react';
import { Step, StepLabel, StepContent, Chip, IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import ArrowRightAltTwoTone from '@material-ui/icons/ArrowRightAltTwoTone';
import { OccasionsList } from '../../MockData'

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0
    }
  }

  updateCard = type => {
    this.setState({ type }, () => this.props.updateCard({ key: 'occasion', value: type}))
  }
  render() {
    return (
      <Step {...this.props}>
        <StepLabel><h3>Choose the occasion</h3></StepLabel>
        <StepContent>
          {OccasionsList.map((type, index) => {
            return (
              <Chip
                key={index}
                label={type}
                onClick={() => this.updateCard(type)}
                className="m-1"
                icon={type == this.state.type ? <DoneIcon /> : null}
              />
            )
          })}
          {/* <div>
            <IconButton variant="fab" color="secondary" aria-label="Add">
              <ArrowRightAltTwoTone />
            </IconButton>
          </div> */}
        </StepContent>
      </Step>
    )
  }
}

export default Step1
