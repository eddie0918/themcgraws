import React, { Fragment } from 'react';
import { Button, Col } from 'reactstrap';

export default function MainSection(props) {
  return (
    <div {...props}>
      <Col sm="12" className="my-3">
        <div className="d-flex">
          <Button color="primary" className=".d-inline-block float-left vertical-align btn btn-primary btn-icon-only rounded-circle no-hover">
            <span className="btn-inner--icon"><i className={`fa fa-` + props.icon} /></span>
          </Button>
          <h4 className=".d-inline-block float-left vertical-align purchase-step-title underline-title">{props.title}</h4>
        </div>
      </Col>
      {props.children}
    </div>
  )
}
