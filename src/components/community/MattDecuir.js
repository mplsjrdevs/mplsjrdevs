import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

const MattDecuir = () => {
  return (
    <div>
      Hi I&#39;m Matt.<br />
      <br />
      I&#39;m a pizza enthusiast, Seattle transplant, and an organizer of Mpls
      Jr Devs.<br />
      <br />
      I&#39;m currently a Software Engineer at Granicus in St. Paul, MN.<br />
      <br />
      <a
        href="https://github.com/experimatt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>&nbsp;
      <a
        href="https://www.linkedin.com/in/mattdecuir/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>&nbsp;
      <a
        href="https://twitter.com/experimatt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>&nbsp;
      <a
        href="https://experimatt.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Web
      </a>
    </div>
  );
};

export default MattDecuir;
