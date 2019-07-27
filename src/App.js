import React, { Component } from 'react';
import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import { getEvents } from './api';
import { Container } from 'react-bootstrap';
import './App.css';

class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    city: {}
  }

  componentDidMount() {
    this._isMounted = true;
    this.updateEvents(undefined, undefined, 32);
  }

  updateEvents = (lat, lon, page) => {
    getEvents(lat, lon, page).then(data => {
      if (this._isMounted) {
        const {city, events} = data;
        this.setState({city, events});
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Container className="main-container">
          <CitySearch updateEvents={this.updateEvents}/>
          <EventList events={this.state.events} />
          <NumberOfEvents updateEvents={this.updateEvents}/>
        </Container>
      </div>
    );
  } 
}

export default App;
