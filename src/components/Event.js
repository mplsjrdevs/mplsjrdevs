import React from 'react';
import { Button } from '@blueprintjs/core';
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
    <div className="event">
      <div className="date">{formattedDate}</div>
      <div className="text">
        {presentationTitle}
        {presenterNames}
      </div>
      {props.showRegisterButton && (
        <div className="register">
          <a href={props.event_url} target="_blank" rel="noopener noreferrer">
            <Button text="Register" className="pt-large Event button" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Event;
