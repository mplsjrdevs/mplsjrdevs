import React, { Component } from 'react';
import reactLogo from './assets/images/react-logo.svg';
import logo from './assets/images/mplsjrdevs-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br /><br />
          <img src={logo} className="logo" alt="Mpls Jr Devs" />
        </p>
      </div>
    );
  }
}

export default App;
