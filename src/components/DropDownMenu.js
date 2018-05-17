import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

const DropDownMenu = () => {
  return (
    <Menu>
      <MenuItem text="Home" href="#home" />
      <MenuItem text="About" href="#about" />
      <MenuItem text="Events" href="#events" />
      <MenuItem text="Community" href="#community" />
      <MenuItem text="Code of Conduct" href="#code-of-conduct" />
      <MenuItem text="Contact" href="#contact" />
    </Menu>
  );
};

export default DropDownMenu;
