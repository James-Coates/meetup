import React, { Component } from 'react';
import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import { getEvents } from './api';
import { Container } from 'react-bootstrap';
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
        <Header />
        <Container className="main-container">
          <CitySearch updateEvents={this.updateEvents}/>
          <EventList events={this.state.events} />
          <NumberOfEvents />
        </Container>
      </div>
    );
  } 
}

export default App;
