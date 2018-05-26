import React from 'react';
import Event from './Event';
import eventData from '../static/eventData.json';
import _ from 'lodash';
import moment from 'moment';

const Events = () => {
  // split past and upcoming events based on today's date
  let [pastEvents, upcomingEvents] = _.partition(eventData, event => {
    return moment(event.event_date)
      .startOf('day')
      .isSameOrBefore(moment().startOf('day'));
  });

  let nextEvent =
    upcomingEvents.length > 0 &&
    _.orderBy(upcomingEvents, 'event_date', 'asc')[0];

  pastEvents = _.orderBy(pastEvents, 'event_date', 'desc');

  return (
    <section id="events">
      <h2>Events</h2>
      <hr />
      <h3>Upcoming</h3>
      {nextEvent ? (
        <Event key={nextEvent.event_date} {...nextEvent} />
      ) : (
        <div>No upcoming events :(</div>
      )}
      <hr />
      <h3>
        <a
          href="https://mplsjrdevs.eventbrite.com#past_events"
          target="_blank"
          rel="noopener noreferrer"
        >
          Past Events
        </a>
      </h3>
      {!_.isEmpty(pastEvents) ? (
        pastEvents.map(event => {
          return <Event key={event.event_date} {...event} />;
        })
      ) : (
        <div>No past events :(</div>
      )}
    </section>
  );
};

export default Events;
