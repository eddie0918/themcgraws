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

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/account' component={AccountPage} />
        <Route exact path='/about' component={About} />
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
