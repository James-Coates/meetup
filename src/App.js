import React, { Component } from 'react';
import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import './App.css';

class App extends Component {

  state = {
    events: []
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({events}));
  }
  
  render() {
    return (
      <div className="App">
        <h1>Meetup Test 6</h1>
        <CitySearch updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
        <NumberOfEvents />
      </div>
    );
  } 
}

export default App;
