import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faGitlab from '@fortawesome/fontawesome-free-brands/faGitlab';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';
import _compact from 'lodash/compact';

const Social = ({ icon, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label="label"
  >
    <FontAwesomeIcon icon={icon} size="2x" aria-hidden="true" />
  </a>
);

export default ({
  name,
  bio: Bio,
  github,
  gitlab,
  linkedin,
  twitter,
  website
}) => {
  const links = [
    website && <Social key={0} icon={faLink} url={website} label="website" />,
    github && <Social key={1} icon={faGithub} url={github} label="github" />,
    gitlab && <Social key={2} icon={faGitlab} url={gitlab} label="gitlab" />,
    twitter && (
      <Social key={3} icon={faTwitter} url={twitter} label="twitter" />
    ),
    linkedin && (
      <Social key={4} icon={faLinkedIn} url={linkedin} label="linkedIn" />
    )
  ];

  return (
    <div>
      <div>{Bio ? <Bio /> : `Hi, I'm ${name}.`}</div>
      <div className="social-links">{_compact(links)}</div>
    </div>
  );
};
