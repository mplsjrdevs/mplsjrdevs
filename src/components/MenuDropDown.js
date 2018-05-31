import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

const MenuDropDown = () => {
  return (
    <Menu className="MenuDropDown bg-pink">
      <MenuItem text="Home" icon="home" href="#home" className="Menu white" />
      <MenuItem
        text="About"
        icon="info-sign"
        href="#about"
        className="Menu white"
      />
      <MenuItem
        text="Events"
        icon="calendar"
        href="#events"
        className="Menu white"
      />
      <MenuItem
        text="Community"
        icon="people"
        href="#community"
        className="Menu white"
      />
      <MenuItem
        text="Code of Conduct"
        icon="take-action"
        href="#code-of-conduct"
        className="Menu white"
      />
      <MenuItem
        text="Contact"
        icon="envelope"
        href="#contact"
        className="Menu white"
      />
    </Menu>
  );
};

export default MenuDropDown;
