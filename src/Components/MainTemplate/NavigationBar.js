import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="primary" dark expand="lg" sticky="top">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/'><span className="nav-link">Home</span></Link>
            </NavItem>
            <NavItem>
              <Link to='/about'><span className="nav-link">About</span></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Purchase
                            </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to='/Purchase/PhysicalCards'>
                  <span className="nav-link">Physical Cards</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/Purchase/CustomPhysicalCards'>
                  <span className="nav-link">Custom Physical Cards</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/Purchase/DigitalCards'>
                  <span className="nav-link">Digital Cards</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/Purchase/PrintCards'>
                  <span className="nav-link">Printable Cards</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/Purchase/HonorCards'>
                  <span className="nav-link">Honor Cards</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/Purchase/RedemptionCodes'>
                  <span className="nav-link">Redemption Codes</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/Purchase/DirectToCharityDonation'>
                  <span className="nav-link">Direct Donation</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/GCE'>
                  <span className="nav-link">Donate Retail Cards</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <i className={`fa fa-shopping-cart`} /> <span>Cart</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>
                  Shopping Cart
                  		        </DropdownItem>
                <DropdownItem>
                  <span>Mini-cart here</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/Cart'>
                  <span className="nav-link">Go to Cart</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <i className={`fa fa-user`} /> <span>Login</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>
                  User Menu
                  		        </DropdownItem>
                <DropdownItem>
                  <NavLink href="#"><span className="float-right badge badge-primary">4</span><i className="fas fa-envelope text-primary"></i>Messages</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#"><i className="fas fa-cog text-primary"></i>Settings</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="#"><i className="fas fa-sign-out-alt text-primary"></i>Sign Out</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

