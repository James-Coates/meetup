import React, { Component } from 'react';

class Event extends Component {

  state = {
    details: '',
    moreInfo: false
  }

  handleClick = () => {
    this.setState({moreInfo: true})
  }

  render() {

    const { event } = this.props;

    const date = event.local_date;
    const name = event.name;
    const groupName = event && event.group ? event.group.name : '';
    const rsvp = event.yes_rsvp_count;

    return(
      <div className="event">
        <p className="event-date">{ date }</p>
        <h3 className="event-name">{ name }</h3>
        <p className="event-group">{ groupName }</p>
        <p className="event-rsvp">{ rsvp }</p>
        <button className="details-btn" onClick={this.handleClick}>Details</button>
        <div className={`modal ${!this.state.moreInfo ? 'display-hidden' : ''}`}>
        </div>
      </div>
    )
  }
}

export default Event;