import React from 'react';
export default {
  id: 'joshua-evans',
  name: 'Joshua Evans',
  twitter: 'https://twitter.com/Josh_M_Evans94',
  linkedin: 'https://www.linkedin.com/in/joshevans94/',
  github: 'https://github.com/FlannelBear',
  bio: () => {
    return (
      <div>
        Hello! I&#39;m Josh.
        <br />
        <br />
        I'm a recent graduate of Prime Digital Academy.
        <br />
        <br />
        Prior to attending Prime I graduated from Winona State University with a
        BS in Kinesiology, and began working as a Personal Trainer for Anytime
        Fitness.
        <br />
        <br />
        Besides being a Minneapolis Jr. Developer, I am also a USAPL powerlifter
        and an aspiring novelist.
        <br />
        <br />
        My expertise is in Javascript, working with:
        <ul style={{ listStyleType: 'none' }}>
          <li>React</li>
          <li>Angular</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
        <br />
        Currently, I'm flirting with few different technologies, including
        Python with Flask, SQLite, Ruby with Jekyll, Kotlin and C#.
      </div>
    );
  }
};
