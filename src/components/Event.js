import React from 'react';
import moment from 'moment';
import _ from 'lodash';

const Event = props => {
  let hasPresenters = !_.isEmpty(props.presenters);
  let formattedDate = moment(props.event_date).format('MMM DD, YYYY');
  let presentationTitle =
    (props.presentation_title || 'TBD') + (hasPresenters ? ', by ' : '');
  let presenterNames = '';

  // build presenter names with links
  if (hasPresenters) {
    presenterNames = props.presenters
      .map(person => {
        if (person.url) {
          return (
            <a
              key={person.name}
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {person.name}
            </a>
          );
        } else {
          return person.name;
        }
      })
      .reduce((prev, curr) => [prev, ' & ', curr]);
  }

  return (
    <div>
      <span className="date">{formattedDate}</span>
      <br />
      <span className="text">
        {presentationTitle}
        {presenterNames}
      </span>
      <br />
      <br />
    </div>
  );
};

export default Event;
