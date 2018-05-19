import React from 'react';
import EventImage from '../images/mplsjrdevs1.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="content-wrap blue">
        <h2 className="blue">About Mpls Jr Devs</h2>
        <p>
          Our priority is to make space for aspiring and less experienced
          software engineers to meet, learn from, and share experiences with one
          another.<br />
          <br />
          We put on monthly events to help both ourselves and others like us.
        </p>
      </div>

      <img
        src={EventImage}
        alt="Mpls Jr Devs Event at Lake Monster Brewing"
        className="responsive"
      />
    </section>
  );
};

export default About;
