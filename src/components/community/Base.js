import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';

const Social = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} size="2x" />
  </a>
);

export default ({ name, bio: Bio, github, linkedin, twitter, website }) => {
  const links = [
    website && <Social key={0} icon={faLink} url={website} />,
    github && <Social key={1} icon={faGithub} url={github} />,
    twitter && <Social key={2} icon={faTwitter} url={twitter} />,
    linkedin && <Social key={3} icon={faLinkedIn} url={linkedin} />
  ];
  return (
    <div>
      <p>{Bio ? <Bio /> : `Hi, I'm ${name}.`}</p>
      {links.reduce((prev, curr) => [
        prev,
        <span>&nbsp;&nbsp;&nbsp;</span>,
        curr
      ])}
    </div>
  );
};
