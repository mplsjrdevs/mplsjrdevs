import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from './Header';
import Banner from './Banner';
import About from './About';
import Events from './Events';
import Community from './Community';
import CodeOfConduct from './CodeOfConduct';
import Contact from './Contact';
import '../styles/App.css';

class App extends Component {
  componentWillMount() {
    ReactGA.initialize('UA-105372704-1');
  }
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="App">
        <Header />

        <Banner />
        <hr />

        <About />
        <hr />

        <Events />
        <hr />

        <Community />
        <hr />

        <CodeOfConduct />
        <hr />

        <Contact />
        <hr />
      </div>
    );
  }
}

export default App;
