import React, { Component } from 'react';
import Event from './Event';
import eventData from '../static/eventData.json';
import { Button, Collapse } from '@blueprintjs/core';
import moment from 'moment';
import _ from 'lodash';

class Events extends Component {
  state = { isCollapseOpen: false };

  render() {
    // split past and upcoming events based on today's date
    let [pastEvents, upcomingEvents] = _.partition(eventData, event => {
      return moment(event.event_date)
        .startOf('day')
        .isBefore(moment().startOf('day'));
    });

    // next event
    let nextEvent =
      upcomingEvents.length > 0 &&
      _.orderBy(upcomingEvents, 'event_date', 'asc')[0];

    // only show three most recent events by default
    pastEvents = _.orderBy(pastEvents, 'event_date', 'desc');
    let recentEvents = pastEvents.slice(0, 3);
    let moreEvents = pastEvents.slice(3);

    return (
      <section id="events">
        <h2>Events</h2>
        <h3>Upcoming</h3>
        {nextEvent ? (
          <Event
            key={nextEvent.event_date}
            showRegisterButton={true}
            {...nextEvent}
          />
        ) : (
          <div>No upcoming events :(</div>
        )}
        <h3>Past Events</h3>
        {!_.isEmpty(recentEvents) ? (
          recentEvents.map(event => {
            return <Event key={event.event_date} {...event} />;
          })
        ) : (
          <div>No past events :(</div>
        )}
        {!_.isEmpty(moreEvents) && (
          <div className="more-events">
            <Collapse isOpen={this.state.isCollapseOpen}>
              {moreEvents.map(event => {
                return <Event key={event.event_date} {...event} />;
              })}
            </Collapse>
            <Button
              onClick={this.handleCollapseClick}
              className="show-events-button button"
            >
              {this.state.isCollapseOpen ? 'Hide' : 'Show'} More Events
            </Button>
          </div>
        )}
      </section>
    );
  }

  handleCollapseClick = () => {
    this.setState({
      ...this.state,
      isCollapseOpen: !this.state.isCollapseOpen
    });
  };
}

export default Events;
