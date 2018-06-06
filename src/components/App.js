import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faRegular from '@fortawesome/fontawesome-free-regular';
// import faSolid from '@fortawesome/fontawesome-free-solid';
// import faBrands from '@fortawesome/fontawesome-free-brands';

import Header from './Header';
import Welcome from './Welcome';
import About from './About';
import Events from './Events';
import Community from './Community';
import CodeOfConduct from './CodeOfConduct';
import Contact from './Contact';
import '../styles/App.css';

// fontawesome.library.add(faRegular, faSolid, faBrands);

class App extends Component {
  componentWillMount() {
    ReactGA.initialize('UA-105372704-1');
  }
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="App" id="home">
        <Header />
        <Welcome />
        <About />
        <Events />
        <Community />
        <CodeOfConduct />
        <Contact />
      </div>
    );
  }
}

export default App;
