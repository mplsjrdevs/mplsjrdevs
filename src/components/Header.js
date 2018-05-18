import React from 'react';
import DropDownMenu from './DropDownMenu';
import logo from '../images/mplsjrdevs-logo-white.svg';
import {
  Alignment,
  Button,
  Navbar,
  NavbarGroup,
  Popover,
  Position
} from '@blueprintjs/core';

const Header = () => {
  return (
    <header>
      <Navbar className="bg-pink">
        <NavbarGroup align={Alignment.LEFT}>
          <img src={logo} className="logo" alt="Mpls Jr Devs" />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Popover
            content={<DropDownMenu>...</DropDownMenu>}
            position={Position.BOTTOM_LEFT}
            minimal={true}
            popoverClassName="pt-dark bg-pink"
          >
            <Button className="pt-minimal white" icon="menu" />
          </Popover>
        </NavbarGroup>
      </Navbar>
    </header>
  );
};

export default Header;
