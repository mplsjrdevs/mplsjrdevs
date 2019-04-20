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
        Hey! I&#39;m Josh.
        <br />
        <br />
        I&#39;m an Associate Software Engineer at Virgin Pulse.
        <br />
        <br />
        In 2018 I graduated from Prime Digital Academy in August and started at Virgin Pulse in November.
        <br />
        <br />
        Besides being a Minneapolis Jr. Developer, I am also an aspiring novelist.  I spend my free time 
        learning new technologies and writing fiction.
        <br />
        <br />
        In my current position I work with a variety of technologies that include:
        <ul style={{ listStyleType: 'none' }}>
          <li>React</li>
          <li>Angular.js</li>
          <li>Java</li>
          <li>Kotlin</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
        <br />
        Currently I&#39;m spending my free time working on a proof of concept for a location sharing api
        built on the ASP.NET core framework.
      </div>
    );
  }
};
