import React from 'react';

const Events = () => {
  return (
    <section id="events">
      <h2>Events</h2>
      <hr />
      <h3>Upcoming</h3>
      <p>
        Tues, June 12th<br />
        Intro to DNS, by{' '}
        <a
          href="https://twitter.com/justincardinal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Justin Cardinal
        </a>
      </p>
      <hr />
      <h3>Past Events</h3>
      <ul>
        <li>May 8, 2018: Intro to Functional Programming, by Joe Karlsson</li>
        <li>Apr 14, 2018: Minnebar Session</li>
        <li>
          Mar 13, 2018: Diversity & Inclusion in Tech, by Ian Coldwater & Matt
          Decuir
        </li>
        <li>Feb 13, 2018: Intro to Git, by Joshua Wehner</li>
        <li>
          Jan 9, 2018: A Recruiter&#39;s Perspective on the Jr Dev Job Search,
          by Paul DeBettignies
        </li>
        <li>Dec 12, 2017: Coding Exercises, by Morgan Jones & Ben Tilkens</li>
        <li>Nov 14, 2017: Intro to TDD, by Eryn O&#39;Neil</li>
      </ul>
    </section>
  );
};

export default Events;
