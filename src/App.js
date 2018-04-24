import React, { Component } from 'react';
import reactLogo from './assets/images/react-logo.svg';
import logo from './assets/images/mplsjrdevs-logo.svg';
import {
  Navbar,
  NavbarHeading,
  NavbarDivider,
  Button,
  Alignment,
  NavbarGroup,
  Icon
} from '@blueprintjs/core';
import ReactGA from 'react-ga';

import './App.css';

class App extends Component {
  componentWillMount() {
    ReactGA.initialize('UA-105372704-1');
  }
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="App">
        <header className="App-header">
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>
                <img src={logo} className="logo" alt="Mpls Jr Devs" />
              </NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
              <Button className="pt-minimal" icon="menu" />
            </NavbarGroup>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default App;
