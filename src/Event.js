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

    const date = this.state.details.local_date;
    const name = this.state.details.name;
    const groupName = this.state.details ? this.state.details.group.name : '';
    const rsvp = this.state.details.yes_rsvp_count;

    return(
      <div className="event">
        <p className="event-date">{ date }</p>
        <h3 className="event-name">{ name }</h3>
        <p className="event-group">{ groupName }</p>
        <p className="event-rsvp">{ rsvp }</p>
        <button className="show-details" onClick={this.handleClick}>Details</button>
        <div className={`modal ${!this.state.moreInfo ? 'display-hidden' : ''}`}>
        </div>
      </div>
    )
  }
}

export default Event;