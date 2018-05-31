import React, { Component } from 'react';
import MenuDropDown from './MenuDropDown';
import MenuNavbar from './MenuNavbar';
import logo from '../images/mplsjrdevs-logo-white.svg';
import {
  Alignment,
  Button,
  Navbar,
  NavbarGroup,
  Popover,
  Position
} from '@blueprintjs/core';

class Header extends Component {
  // all this checkMobile, mount/unmount and event listener logic is to make
  // sure the menu dynamically changes as the window gets resized
  state = { mobile: false };

  componentDidMount() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  }

  checkMobile = () => {
    this.setState({
      ...this.state,
      mobile: window.matchMedia('(max-width: 768px)').matches
    });
  };

  render() {
    // default to navbar menu
    let menu = <MenuNavbar />;

    if (this.state.mobile) {
      // switch menu to dropdown if mobile
      menu = (
        <Popover
          content={<MenuDropDown>...</MenuDropDown>}
          position={Position.BOTTOM_LEFT}
          minimal={true}
          popoverClassName="pt-dark bg-pink"
        >
          <Button className="pt-minimal white" icon="menu" />
        </Popover>
      );
    }

    return (
      <header id="header">
        <Navbar className="bg-pink">
          <NavbarGroup align={Alignment.LEFT}>
            <img src={logo} className="logo" alt="Mpls Jr Devs" />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>{menu}</NavbarGroup>
        </Navbar>
      </header>
    );
  }
}

export default Header;
