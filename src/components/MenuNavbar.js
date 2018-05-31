import React from 'react';
import { Button, Position, Tooltip } from '@blueprintjs/core';

const NavbarMenu = () => {
  return (
    <div>
      <Tooltip content="Home" position={Position.BOTTOM}>
        <a href="#home">
          <Button className="pt-minimal pt-large white" icon="home" />
        </a>
      </Tooltip>
      <Tooltip content="About" position={Position.BOTTOM}>
        <a href="#about">
          <Button className="pt-minimal pt-large white" icon="info-sign" />
        </a>
      </Tooltip>
      <Tooltip content="Events" position={Position.BOTTOM}>
        <a href="#events">
          <Button className="pt-minimal pt-large white" icon="calendar" />
        </a>
      </Tooltip>
      <Tooltip content="Community" position={Position.BOTTOM}>
        <a href="#community">
          <Button className="pt-minimal pt-large white" icon="people" />
        </a>
      </Tooltip>
      <Tooltip content="Code of Conduct" position={Position.BOTTOM}>
        <a href="#code-of-conduct">
          <Button className="pt-minimal pt-large white" icon="take-action" />
        </a>
      </Tooltip>
      <Tooltip content="Contact" position={Position.BOTTOM}>
        <a href="#contact">
          <Button className="pt-minimal pt-large white" icon="envelope" />
        </a>
      </Tooltip>
    </div>
  );
};

export default NavbarMenu;
