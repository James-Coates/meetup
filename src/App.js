import React, { Component } from 'react';
import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import { infoAlert, InfoAlert } from './Alert';
import { getEvents } from './api';
import { Container } from 'react-bootstrap';
import './App.css';

class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    city: {},
    alert: ''
  }

  componentDidMount() {
    this._isMounted = true;
    if (!navigator.onLine) {
      this.setState({alert: 'Note: The app is offline, information shown may not be up to date'});
    } else {
      this.setState({alert: ''});
    };
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
          { this.state.alert ? <InfoAlert text={this.state.alert} /> : '' }
          <EventList events={this.state.events} />
          <NumberOfEvents updateEvents={this.updateEvents}/>
        </Container>
      </div>
    );
  } 
}

export default App;
