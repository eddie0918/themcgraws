import React from 'react';
import { Card, CardImg, Row, Col } from 'reactstrap';
import { Step, StepLabel, StepContent, Chip, IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import ArrowLeftSharp from '@material-ui/icons/ArrowLeftSharp';
import { CardDesignList } from '../../MockData'

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: 0
    }
  }

  updateCard = design => {
    // this.setState({ activeType: type }, () => this.props.nextStep())
    this.setState({ activeType: design }, () => this.props.updateCard({ key: 'design', value: design}))
  }
  render() {
    return (
      <Step {...this.props}>
        <StepLabel><h3>Choose a card image</h3></StepLabel>
        <StepContent>
          <Row>
            {CardDesignList.map((design, index) => {
              return (
                <Col key={index} xs="5" sm="3" className="m-1">
                  <Card>
                    <CardImg width="100%" src={design.ImageUrl} alt="Card image cap" onClick={() => this.updateCard(design)} />
                  </Card>
                </Col>
              )
            })}
          </Row>
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

export default Step2
