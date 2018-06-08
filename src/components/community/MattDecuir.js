import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';

const MattDecuir = () => {
  return (
    <div>
      Hi, I&#39;m Matt.<br />
      <br />
      I&#39;m a self-taught Software Engineer, and an organizer of Mpls Jr Devs.<br />
      <br />
      My areas of expertise include Ruby, Ruby on Rails, and React.<br />
      <br />
      <a
        href="https://github.com/experimatt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>&nbsp;&nbsp;&nbsp;
      <a
        href="https://www.linkedin.com/in/mattdecuir/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>&nbsp;&nbsp;&nbsp;
      <a
        href="https://twitter.com/experimatt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>&nbsp;&nbsp;&nbsp;
      <a
        href="https://experimatt.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLink} size="2x" />
      </a>
    </div>
  );
};

export default MattDecuir;
