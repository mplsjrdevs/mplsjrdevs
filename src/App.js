import React, { Component } from 'react';
import logo from './assets/images/mplsjrdevs-logo-white.svg';
import { Alignment, Button, Navbar, NavbarGroup } from '@blueprintjs/core';
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
      </div>
    );
  }
}

export default App;
