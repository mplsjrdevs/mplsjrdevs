import React from 'react';

const Events = () => {
  return (
    <section id="events">
      <h2>Events</h2>
      <hr />
      <h3>Upcoming</h3>
      <p>
        <span className="date">June 12, 2018</span>
        <br />
        <span className="text">
          Intro to DNS, by{' '}
          <a
            href="https://twitter.com/justincardinal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justin Cardinal
          </a>
        </span>
      </p>
      <hr />
      <h3>
        <a
          href="https://mplsjrdevs.eventbrite.com#past_events"
          target="_blank"
          rel="noopener noreferrer"
        >
          Past Events
        </a>
      </h3>
      <ul>
        <li>
          <span className="date">May 8, 2018</span>
          <br />
          <span className="text">
            Intro to Functional Programming, by{' '}
            <a
              href="https://twitter.com/joekarlsson1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joe Karlsson
            </a>
          </span>
        </li>
        <li>
          <span className="date">Apr 14, 2018</span>
          <br />
          <span className="text">Minnebar Session</span>
        </li>
        <li>
          <span className="date">Mar 13, 2018</span>
          <br />
          <span className="text">
            Diversity & Inclusion in Tech, by{' '}
            <a
              href="https://twitter.com/iancoldwater"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ian Coldwater
            </a>
            {' & '}
            <a
              href="https://twitter.com/experimatt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matt Decuir
            </a>
          </span>
        </li>
        <li>
          <span className="date">Feb 13, 2018</span>
          <br />
          <span className="text">
            Intro to Git, by{' '}
            <a
              href="https://twitter.com/jaw6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joshua Wehner
            </a>
          </span>
        </li>
        <li>
          <span className="date">Jan 9, 2018</span>
          <br />
          <span className="text">
            Jr Dev Job Search Tips, by{' '}
            <a
              href="https://twitter.com/mnheadhunter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paul DeBettignies
            </a>
          </span>
        </li>
        <li>
          <span className="date">Dec 12, 2017</span>
          <br />
          <span className="text">
            Coding Exercises, by Morgan Jones & Ben Tilkens
          </span>
        </li>
        <li>
          <span className="date">Nov 14, 2017</span>
          <br />
          <span className="text">
            Intro to TDD, by{' '}
            <a
              href="https://twitter.com/eryno"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eryn O&#39;Neil
            </a>
          </span>
        </li>
        <li>
          <span className="date">Sep 12, 2017</span>
          <br />
          <span className="text">
            Intro to Infosec, by{' '}
            <a
              href="https://twitter.com/iancoldwater"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ian Coldwater
            </a>
            {' & '}
            <a
              href="https://twitter.com/nightmarejs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kat Traxler
            </a>
          </span>
        </li>
        <li>
          <span className="date">Aug 2, 2017</span>
          <br />
          <span className="text">Show & Tell at Pryes Brewing</span>
        </li>
        <li>
          <span className="date">Jun 1, 2017</span>
          <br />
          <span className="text">Lightning Talks at Software for Good</span>
        </li>
        <li>
          <span className="date">Apr 20, 2017</span>
          <br />
          <span className="text">
            Jr Dev Introductions at Lake Monster Brewing
          </span>
        </li>
        <li>
          <span className="date">Mar 25, 2017</span>
          <br />
          <span className="text">Minnebar Session</span>
        </li>
      </ul>
    </section>
  );
};

export default Events;
