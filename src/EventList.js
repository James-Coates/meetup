import React, { Component } from 'react';
import Event from './Event';
import { Row, Col } from 'react-bootstrap';

class EventList extends Component {

  render() {

    const { events } = this.props;

    return (
      <Row className={!events.length ? 'display-hidden' : 'event-list'}>
        {events.map(event => 
          <Col key={event.id} sm={12} md={6} className="event">
            <Event event={event} />
          </Col>
        )}
      </Row>
    )
  }
}

export default EventList;