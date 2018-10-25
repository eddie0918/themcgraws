import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../GeneralPages/LandingPage';
import About from '../GeneralPages/About';
import Cart from '../GeneralPages/Cart';
import Purchase from '../Purchase/Purchase';
import PhysicalCards from '../Purchase/PhysicalCards';
import CustomPhysicalCards from '../Purchase/CustomPhysicalCards';
import DigitalCards from '../Purchase/DigitalCards';
import PrintCards from '../Purchase/PrintCards';
import HonorCards from '../Purchase/HonorCards';
import RedemptionCodes from '../Purchase/RedemptionCodes';
import DirectToCharityDonation from '../Purchase/DirectToCharityDonation';
import DonateRetailCard from '../Purchase/DonateRetailCard';
import OrderConfirmation from '../GeneralPages/OrderConfirmation';
import LoginPage from '../GeneralPages/LoginPage'
import AccountPage from '../Account/Account'
import UpdateAccountPage from '../Account/UpdateAccount';
import MyOrdersPage from '../Account/MyOrders'
import DonationOrdersReportPage from '../Account/DonationOrdersReport'
import ResendEcardOrdersPage from '../Account/ResendEcardOrders'
import PrintYourOwnPage from '../Account/PrintYourOwn'
import GiftRegistryPage from '../Account/GiftRegistry'
import MySavedBillingInforrmationPage from '../Account/MySavedBillingInforrmation'

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Login' component={LoginPage} />
        <Route exact path='/Account' component={AccountPage} />
        <Route exact path='/Account/UpdateAccount' component={UpdateAccountPage} />
        <Route exact path='/Account/MyOrders' component={MyOrdersPage} />
        <Route exact path='/Account/DonationOrdersReport' component={DonationOrdersReportPage} />
        <Route exact path='/Account/ResendEcardOrders' component={ResendEcardOrdersPage} />
        <Route exact path='/Account/PrintYourOwn' component={PrintYourOwnPage} />
        <Route exact path='/Account/GiftRegistry' component={GiftRegistryPage} />
        <Route exact path='/Account/MySavedBillingInforrmation' component={MySavedBillingInforrmationPage} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Cart' component={Cart} />
        <Route exact path='/Purchase' component={Purchase} />
        <Route exact path='/Purchase/PhysicalCards' component={PhysicalCards} />
        <Route exact path='/Purchase/CustomPhysicalCards' component={CustomPhysicalCards} />
        <Route exact path='/Purchase/DigitalCards' component={DigitalCards} />
        <Route exact path='/Purchase/PrintCards' component={PrintCards} />
        <Route exact path='/Purchase/HonorCards' component={HonorCards} />
        <Route exact path='/Purchase/RedemptionCodes' component={RedemptionCodes} />
        <Route exact path='/Purchase/DirectToCharityDonation' component={DirectToCharityDonation} />
        <Route exact path='/GCE' component={DonateRetailCard} />
        <Route exact path='/OrderConfirmation' component={OrderConfirmation} />
      </Switch>
    );
  }
}
