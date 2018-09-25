import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Step1, Step2, Step3, Step4 } from './DigitalComponents'
import { get, post } from '../../Code/IApi';
import { clone } from '../../Code/Utilities';
import { CustomPhysicalCardTypesList } from '../MockData'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, StepIcon, Paper, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '90%',
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

class DigitalCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      card: {
        occasion: null,
        design: null,
        scheme: null
      }
    };
  }
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  updateCard = data => {
    this.setState({
      card: {...this.state.card, [data.key]: data.value}
    })
    this.handleNext()
  }
  render() {
    const { classes } = this.props;
    const { activeStep, card } = this.state;
    console.log('active step', activeStep)
    return (
      <section>
        <Container>
          <Row>
            <Col xs="12" className="justify-content-center text-center mt-4 mb-2">
              <h1>Digital Cards</h1>
            </Col>
            <Col xs="12" md={{ size: 8, offset: 2 }} className="justify-content-center mb-2 text-center">
              <p>You can have cards shipped to you for in-person giving or shipped directly to the recipient. Want to order in bulk? Use our Custom Physical Cards page.</p>
            </Col>
          </Row>
          <Row className="ml-3 mr-0">
            <Col sm="12">
              <section>
                <Container>
                  <Row>
                    <div className={classes.root}>
                      <Stepper activeStep={activeStep} orientation="vertical">
                        <Step1 value={card.occasion} updateCard={this.updateCard} nextStep={this.handleNext} />
                        <Step2 value={card.design} updateCard={this.updateCard} nextStep={this.handleNext} backStep={this.handleBack} />
                        <Step3 value={card.scheme} updateCard={this.updateCard} nextStep={this.handleNext} backStep={this.handleBack} />
                        <Step4 card={card} completed={activeStep === 3} nextStep={this.handleNext} backStep={this.handleBack} />
                      </Stepper>
                      {activeStep === 5 && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                          <Typography>All steps completed - you&quot;re finished</Typography>
                          <Button onClick={this.handleReset}>
                            Reset
                        </Button>
                        </Paper>
                      )}
                    </div>
                  </Row>
                </Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default withStyles(styles)(DigitalCards);
