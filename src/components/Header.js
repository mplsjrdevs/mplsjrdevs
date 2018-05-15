import React from 'react';
import logo from '../images/mplsjrdevs-logo-white.svg';
import { Alignment, Button, Navbar, NavbarGroup } from '@blueprintjs/core';

const Header = () => {
  return (
    <header>
      <Navbar className="bg-pink">
        <NavbarGroup align={Alignment.LEFT}>
          <img src={logo} className="logo" alt="Mpls Jr Devs" />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button className="pt-minimal white" icon="menu" />
        </NavbarGroup>
      </Navbar>
    </header>
  );
};

export default Header;
