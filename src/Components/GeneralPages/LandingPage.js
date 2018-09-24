
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row,  Col,
       Button} from 'reactstrap';
import GiftCardBrandedIcon from '../../images/gift-card-branded.svg';
import GiftCardCustomIcon from '../../images/gift-card-custom.svg';
import DigitalCardIcon from '../../images/digitalcard.svg';
import PrintCardIcon from '../../images/print-card.svg';
import HonorCardIcon from '../../images/honor-card.svg';
import RedemptionCodesIcon from '../../images/redemption-codes.svg';
import DonateIcon from '../../images/donate.svg';
import DonateBalanceIcon from '../../images/donate-balance.svg';
import CBRELogo from '../../images/cbre-logo.svg';
import CNNLogo from '../../images/cnn-logo.svg';
import DellLogo from '../../images/dell-logo.svg';
import JohnsonAndJohnsonLogo from '../../images/johnsonandjohnson-logo.svg';
import MarriottLogo from '../../images/marriott-logo.svg';
import MetLifeLogo from '../../images/metlife-logo.svg';
import MicrosoftLogo from '../../images/microsoft-logo.svg';
import NBCLogo from '../../images/nbc-logo.svg';
import PepsiLogo from '../../images/pepsi-logo.svg';
import UniversalLogo from '../../images/universal-logo.svg';
import LandingPageCarouselBig from '../../Components/GeneralPages/LandingPageCarouselBig';
import LandingPageCarouselSmall from '../../Components/GeneralPages/LandingPageCarouselSmall';
export default function LandingPage(props) {
return <div className="wrapper">
	<section className="landing-hero">
         <Container fluid>
	  <Row>
	   <Col xs="12" className="mt-md mb-4 text-center">
	    <h1>When meaningful matters, give a charity gift card.</h1>
	   </Col>
	   <Col xs="12" md={{ size: 8, offset: 2 }} className="mb-4 text-center">
            <h3>Charity gift cards are charity donations that you make on another's behalf. The recipient receives a gift card which they "spend" on the charity of their choice.</h3>
           </Col>
	   <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
            <Link to='/Purchase'><Button color="primary"  className="d-none d-md-block">Give Gift Cards</Button></Link>
            <Link to='/Purchase'><Button color="primary" block  className="d-md-none">Give Gift Cards</Button></Link>
           </Col>
	  </Row>
	 </Container>
	</section>
	<section>
	 <Container fluid>
	  <Row className="section-title-row">
	   <Col xs="12" className="text-center">
	    <h2>Ways To Give</h2>
	   </Col>
	  </Row>
	  <Col xs="12" md={{ size: 8, offset: 2 }} className="text-center mb-5">
	  <p>Our charity gift cards feature a wide selection of beautiful designs and are the perfect gift for birthdays, holidays, sympathy, thank yous, or any other ocassion. And with over 1000 charities to choose from, everyone can find a worthwhile cause close to their heart. </p>
	  </Col>
	  <Row>
	   <Col xs="12" md="6" className="mb-4 text-center">
	    <h3 className="mb-4">Physical Cards</h3>
	    <Row>
	     <Col xs="12" className="mb-4 text-center justify-content-center">
	      <img src={GiftCardBrandedIcon} alt="CharityChoice physical gift card icon" className="landing-page-icons" />
	     </Col>
	     <Col xs="12" className="mb-4 text-center justify-content-center">
	      <h5>Plastic or biodegradable cards with one of our branded designs.</h5>
	     </Col>
	     <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
              <Link to='/Purchase/PhysicalCards'><Button color="primary"  className="d-none d-md-block">Give Physical Cards</Button></Link>
              <Link to='/Purchase/PhysicalCards'><Button color="primary" block  className="d-md-none">Give Physical Cards</Button></Link>
             </Col>
	    </Row>
	   </Col>
	   <Col xs="12" md="6" className="mb-4 text-center">
            <h3 className="mb-4">Custom Physical Cards</h3>
            <Row>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <img src={GiftCardCustomIcon} alt="CharityChoice custom physical gift card icon" className="landing-page-icons" />
             </Col>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <h5>Customize plastic physical cards with your own logo or other artwork.</h5>
             </Col>
             <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
            <Link to='/Purchase/CustomPhysicalCards'><Button color="primary"  className="d-none d-md-block">Give Custom Cards</Button></Link>
            <Link to='/Purchase/CustomPhysicalCards'><Button color="primary" block  className="d-md-none">Give Custom Cards</Button></Link>
           </Col>
            </Row>
           </Col>
	  </Row>
	  <Row>
           <Col xs="12" md="6" className="mb-4 text-center">
            <h3 className="mb-4">Digital Cards</h3>
            <Row>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <img src={DigitalCardIcon} alt="CharityChoice digital gift card icon" className="landing-page-icons" />
             </Col>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <h5>Select a card to share by email, text, or social media.</h5>
             </Col>
             <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
              <Link to='/Purchase/DigitalCards'><Button color="primary"  className="d-none d-md-block">Give Digital Cards</Button></Link>
              <Link to='/Purchase/DigitalCards'><Button color="primary" block  className="d-md-none">Give Digital Cards</Button></Link>
             </Col>
            </Row>
           </Col>
	   <Col xs="12" md="6" className="mb-4 text-center">
            <h3 className="mb-4">Print Your Own Cards</h3>
            <Row>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <img src={PrintCardIcon} alt="CharityChoice print-at-home gift card icon" className="landing-page-icons" />
             </Col>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <h5>Receive a high-quality PDF card to print at home.</h5>
             </Col>
             <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
              <Link to='/Purchase/PrintCards'><Button color="primary"  className="d-none d-md-block">Give Printable Cards</Button></Link>
              <Link to='/Purchase/PrintCards'><Button color="primary" block  className="d-md-none">Give Printable Cards</Button></Link>
             </Col>
            </Row>
           </Col>
	  </Row>
	  <Row>
	   <Col xs="12" md="6" className="mb-4 text-center">
            <h3 className="mb-4">Honor Cards</h3>
            <Row>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <img src={HonorCardIcon} alt="CharityChoice honor card icon" className="landing-page-icons" />
             </Col>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <h5>Make a donation to the charity of yoru choice "in honor of" your recipient.</h5>
             </Col>
             <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
            <Link to='/Purchase/HonorCards'><Button color="primary"  className="d-none d-md-block">Give Honor Cards</Button></Link>
            <Link to='/Purchase/HonorCards'><Button color="primary" block  className="d-md-none">Give Honor Cards</Button></Link>
           </Col>
            </Row>
           </Col>
	   <Col xs="12" md="6" className="mb-4 text-center">
            <h3 className="mb-4">Redemption Codes</h3>
            <Row>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <img src={RedemptionCodesIcon} alt="CharityChoice redemption codes icon" className="landing-page-icons" />
             </Col>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <h5>Buy codes to distribute using your own materials or any method you wish.</h5>
             </Col>
             <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
            <Link to='/Purchase/RedemptionCodes'><Button color="primary"  className="d-none d-md-block">Buy Redemption Codes</Button></Link>
            <Link to='/Purchase/RedemptionCodes'><Button color="primary" block  className="d-md-none">Buy Redemption Codes</Button></Link>
           </Col>
            </Row>
           </Col>
	  </Row>
	  <Row>
	   <Col xs="12" md="6" className="mb-4 text-center">
            <h3 className="mb-4">Make A Direct Donation</h3>
            <Row>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <img src={DonateIcon} alt="CharityChoice donate icon" className="landing-page-icons" />
             </Col>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <h5>Use your credit or rewards card to donate through us to a charity.</h5>
             </Col>
             <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
            <Link to='/Purchase/DirectToCharityDonation'><Button color="primary"  className="d-none d-md-block">Donate Directly</Button></Link>
            <Link to='/Purchase/DirectToCharityDonation'><Button color="primary" block  className="d-md-none">Donate Directly</Button></Link>
           </Col>
            </Row>
           </Col>
	   <Col xs="12" md="6" className="mb-4 text-center">
            <h3 className="mb-4">Donate Gift Card Balance</h3>
            <Row>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <img src={DonateBalanceIcon} alt="CharityChoice donate balance icon" className="landing-page-icons" />
             </Col>
             <Col xs="12" className="mb-4 text-center justify-content-center">
              <h5>Use your retail gift card balance to make a donation to a charity.</h5>
             </Col>
             <Col xs="12" className="mb-5 buy-now-button text-center justify-content-center">
            <Link to='/GCE'><Button color="primary"  className="d-none d-md-block">Donate Balance</Button></Link>
            <Link to='/GCE'><Button color="primary" block  className="d-md-none">Donate Balance</Button></Link>
           </Col>
            </Row>
           </Col>
	  </Row>
	 </Container>
	</section>
	<section>
	 <Container fluid className="corporate">
	  <Row className="corp-row">
           <Col xs="12" className="section-title-row text-center">
            <h2>Corporate Solutions</h2>
           </Col>
	   <Col xs="12" className="mb-4 text-center">
            <h3 className="mb-4">Business Gifts, Promotions, and Employee Recognition</h3>
           </Col>
	   <Col xs="12" md={{ size: 8, offset: 2 }} className="mb-4 text-center justify-content-center">
              <h5>Corpoate clients can enjoy a custom redemption page, a curated custom charity list, custom plastic cards, and unique URLs or custom branded domains.</h5>
           </Col>
	   <Col xs="12" md={{ size: 3, offset: 3 }} className="mb-4 text-center justify-content-center">
	    <Link to='/Corporate'><Button color="primary"  className="d-none d-md-block">Learn More</Button></Link>
	    <Link to='/Corporate'><Button color="primary" block  className="d-md-none">Learn More</Button></Link>
	   </Col>
	   <Col xs="12" md={{ size: 3 }} className="mb-4 text-center justify-content-center">
            <Link to='/Login'><Button color="primary"  className="d-none d-md-block">Corporate Sign Up</Button></Link>
            <Link to='/Login'><Button color="primary" block  className="d-md-none">Corporate Sign Up</Button></Link>
	   </Col>
	   <Row className="justify-content-center landing-corporate-logo-container">
            <Col xs="12" className="mt-4 mb-2 text-center">
             <h2>Our Corporate Clients</h2>
            </Col>
	    <Col xs="auto">
	     <img src={CBRELogo} alt="CharityChoice corporate client CBRE logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={CNNLogo} alt="CharityChoice corporate client CNN logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={DellLogo} alt="CharityChoice corporate client Dell logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={JohnsonAndJohnsonLogo} alt="CharityChoice corporate client Johnson And Johnson logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={MarriottLogo} alt="CharityChoice corporate client Marriott logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={MetLifeLogo} alt="CharityChoice corporate client MetLife logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={MicrosoftLogo} alt="CharityChoice corporate client Microsoft logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={NBCLogo} alt="CharityChoice corporate client NBC logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={PepsiLogo} alt="CharityChoice corporate client Pepsi logo" className="landing-page-corporate-logos" />
            </Col>
	    <Col xs="auto">
	     <img src={UniversalLogo} alt="CharityChoice corporate client Universal logo" className="landing-page-corporate-logos" />
            </Col>
	   </Row>
	  </Row>
	 </Container>
	 <Container fluid className="p-0 charities">
	  <Row>
           <Col xs="12" className="section-title-row text-center">
            <h2>Our Charities</h2>
           </Col>
	   <Row className="charity-padding-fix-bc-carousel">
           <Col xs="12" md={{ size: 8, offset: 2 }} className="mb-4 text-center justify-content-center">
              <p>Charity Choice gift card recipients can choose among over 1000 registered charities, including over 250 of the largest national and global charities. Whether the organization your recipient wishes to support is international, national, or just right around the corner, you will know that your gift will go toward a cause dear to them. Participating charities enjoy exposure and discovery on our national platform and are not charged any fees to be listed.</p>
           </Col>
           <Col xs="12" md={{ size: 4, offset: 2 }} className="mb-4 text-center justify-content-center">
            <Link to='/Charities'><Button color="primary"  className="d-none d-md-block">Search Charities</Button></Link>
            <Link to='/Charities'><Button color="primary" block  className="d-md-none">Search Charities</Button></Link>
           </Col>
           <Col xs="12" md={{ size: 4 }} className="mb-4 text-center justify-content-center">
            <Link to ='/AddNatLocalCharitiesRegistration'><Button color="primary"  className="d-none d-md-block">Charity Sign Up</Button></Link>
            <Link to ='/AddNatLocalCharitiesRegistration'><Button color="primary" block  className="d-md-none">Charity Sign Up</Button></Link>
           </Col>
	   </Row>
          </Row>
	  <Row>
	   <Col xs="12" md={{ size: 6, offset: 3 }} className="mb-4 text-center justify-content-center">
	    <h3>Since 2004, we have helped raise millions of dollars for causes like these:</h3>
	   </Col>
	   <Col xs="12" className="d-md-none">
	    <LandingPageCarouselSmall />
	   </Col>
	   <Col xs="12" className="d-none d-md-block">
            <LandingPageCarouselBig />
           </Col>
	  </Row>
         </Container>
        </section>
       </div>;
}
