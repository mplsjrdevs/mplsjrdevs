import React from 'react';
import { Button } from '@blueprintjs/core';
import moment from 'moment';
import _isEmpty from 'lodash/isEmpty';

const Event = props => {
  let hasPresenters = !_isEmpty(props.presenters);
  let eventDate = moment(props.event_date).startOf('day');
  let formattedDate = eventDate.format('MMM DD, YYYY');
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

  // build register button, if shown
  let ticketReleaseDate = eventDate.subtract(
    props.days_tickets_available,
    'day'
  ); // use airtable days_tickets_available value to set ticket release date
  let registerButton;
  if (props.showRegisterButton) {
    if (
      moment()
        .startOf('day')
        .isSameOrAfter(ticketReleaseDate)
    ) {
      registerButton = (
        <div className="register">
          <a href={props.event_url} target="_blank" rel="noopener noreferrer">
            <Button text="Register" className="pt-large button" />
          </a>
        </div>
      );
    } else {
      registerButton = (
        <div className="register">
          <Button
            text={`Registration opens ${ticketReleaseDate.format('MMM Do')}`}
            className="pt-large pt-disabled button disabled"
          />
        </div>
      );
    }
  }

  return (
    <div className="event">
      <div className="date">{formattedDate}</div>
      <div className="text">
        {presentationTitle}
        {presenterNames}
      </div>
      {registerButton}
    </div>
  );
};

export default Event;
