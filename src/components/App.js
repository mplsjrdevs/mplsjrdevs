import React, { Component } from 'react';
import logo from '../images/mplsjrdevs-logo-white.svg';
import { Alignment, Button, Navbar, NavbarGroup } from '@blueprintjs/core';
import ReactGA from 'react-ga';

import '../styles/App.css';

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

        <section id="welcome">
          <p>
            Mpls Junior Devs is a community of aspiring and less experienced
            software engineers based in the Twin Cities, MN.<br />
            <br />
            (background image from past event goes here)
          </p>
        </section>
        <hr />

        <section id="about">
          <h2>About</h2>
          <p>
            Our priority is to make space for aspiring and less experienced
            software engineers to meet, learn from, and share experiences with
            one another.<br />
            <br />
            We put on monthly events to help both ourselves and others like us.
          </p>
        </section>
        <hr />

        <section id="events">
          <h2>Events</h2>
          <h3>Upcoming Events</h3>
          <h3>Past Events</h3>
          <p>(list of past events and presentations goes here)</p>
        </section>
        <hr />

        <section id="community">
          <h2>Community</h2>
          <p>
            Meet our members!<br />
            <br />
            (grid of member photos goes here)
          </p>
        </section>
        <hr />

        <section id="code-of-conduct">
          <h2>Code of Conduct</h2>
          <p>
            We are dedicated to providing an open, welcoming, and inclusive
            community.<br />
            <br />
            As such, we have a <a href="/coc">code of conduct</a> that we expect
            all of our members to follow.
          </p>
        </section>
        <hr />

        <section id="contact">
          <h2>Contact</h2>
          <h3>Mailing list</h3>
          <p>(embedded mailing list signup form goes here)</p>
          <h3>Slack</h3>
          <p>
            We&#39;ve got a slack group. If you identify as an aspiring or less
            experienced software engineer and would like to join, please{' '}
            <a href="mailto:mplsjrdevs@gmail.com">email us</a>.
          </p>
          <h3>Email</h3>
          <p>
            Got questions? Please{' '}
            <a href="mailto:mplsjrdevs@gmail.com">send us an email</a> and
            we&#39;ll be in touch.
          </p>
        </section>
        <hr />
      </div>
    );
  }
}

export default App;
