import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, CardImg, CardFooter, CardBody
} from 'reactstrap';
import MainPage from '../MainTemplate/MainPage'
import MainSection from '../MainTemplate/MainSection'

export default function AccountPage(props) {
  return (
    <MainPage
      title='My Account'
      description={<span>Welcome to your account <strong>Test User</strong></span>}
    >
      <MainSection className="container-fluid" title="My Account Options" icon="list" className="cart">
        <div className="form-panel p-3 mb-5 container-fluid">
          <Row>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card className="m-4">
                <CardBody>
                  <CardImg className="option-icon" width="100%" src="/images/business_user_edit.png" alt="Card image cap" />
                </CardBody>
                <CardFooter className="text-center account-option-text"><Link to='/Account/UpdateAccount'>Modify my Account</Link></CardFooter>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card className="m-4">
                <CardBody>
                  <CardImg className="option-icon" width="100%" src="/images/database_down.png" alt="Card image cap" />
                </CardBody>
                <CardFooter className="text-center account-option-text"><Link to='/Account/MyOrders'>My Orders</Link></CardFooter>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card className="m-4">
                <CardBody>
                  <CardImg className="option-icon" width="100%" src="/images/page.png" alt="Card image cap" />
                </CardBody>
                <CardFooter className="text-center account-option-text"><Link to='/Account/DonationOrdersReport'>Donation Orders Report</Link></CardFooter>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card className="m-4">
                <CardBody>
                  <CardImg className="option-icon" width="100%" src="/images/new_mail_next.png" alt="Card image cap" />
                </CardBody>
                <CardFooter className="text-center account-option-text"><Link to='/Account/ResendEcardOrders'>Resend eCards</Link></CardFooter>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card className="m-4">
                <CardBody>
                  <CardImg className="option-icon" width="100%" src="/images/printer.png" alt="Card image cap" />
                </CardBody>
                <CardFooter className="text-center account-option-text"><Link to='/Account/PrintYourOwn'>Print eCards</Link></CardFooter>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card className="m-4">
                <CardBody>
                  <CardImg className="option-icon" width="100%" src="/images/Bells.gif" alt="Card image cap" />
                </CardBody>
                <CardFooter className="text-center account-option-text"><Link to='/Account/GiftRegistry'>Gift Registry</Link></CardFooter>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card className="m-4">
                <CardBody>
                  <CardImg className="option-icon" width="100%" src="/images/folder_lock.png" alt="Card image cap" />
                </CardBody>
                <CardFooter className="text-center account-option-text"><Link to='/Account/MySavedBillingInforrmation'>Saved Billing Information</Link></CardFooter>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card className="m-4">
                <CardBody>
                  <CardImg className="option-icon" width="100%" src="/images/warning.png" alt="Card image cap" />
                </CardBody>
                <CardFooter className="text-center account-option-text"><Link to='/Login'>Logout of Account</Link></CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </MainSection>
    </MainPage>
  )
}
