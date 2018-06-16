import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

const ChelseyMcKinney = () => {
  return (
    <div>
      Hi, I&#39;m Chelsey.<br />
      <br />
      I&#39;m a junior dev originally from Tennessee.<br />
      <br />
      My areas of expertise include the MERN (Mongo, Express, React, Node)
      stack, books, and solving mysteries.<br />
      <br />
      <a
        href="https://github.com/camckin10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>&nbsp;&nbsp;&nbsp;
      <a
        href="https://www.linkedin.com/in/chelsey-mckinney-0392a388/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>&nbsp;&nbsp;&nbsp;
      <a
        href="https://twitter.com/techchelsey"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>&nbsp;&nbsp;&nbsp;
    </div>
  );
};

export default ChelseyMcKinney;
