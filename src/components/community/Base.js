import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faGitlab from '@fortawesome/fontawesome-free-brands/faGitlab';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';
import _compact from 'lodash/compact';

const Social = ({ icon, url, label }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label={label}
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
    website && <Social key={0} icon={faLink} url={website} label="Website" />,
    github && <Social key={1} icon={faGithub} url={github} label="GitHub" />,
    gitlab && <Social key={2} icon={faGitlab} url={gitlab} label="GitLab" />,
    twitter && (
      <Social key={3} icon={faTwitter} url={twitter} label="Twitter" />
    ),
    linkedin && (
      <Social key={4} icon={faLinkedIn} url={linkedin} label="LinkedIn" />
    )
  ];

  return (
    <div>
      <div>{Bio ? <Bio /> : `Hi, I'm ${name}.`}</div>
      <div className="social-links">{_compact(links)}</div>
    </div>
  );
};
