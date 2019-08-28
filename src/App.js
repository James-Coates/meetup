import React, { Component } from 'react';
import moment from 'moment';
import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import { InfoAlert } from './Alert';
import { getEvents } from './api';
import { Container } from 'react-bootstrap';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './App.css';

class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    city: {},
    alert: ''
  };

  componentDidMount() {
    this._isMounted = true;
    if (!navigator.onLine) {
      this.setState({alert: 'Note: The app is offline, information shown may not be up to date'});
    } else {
      this.setState({alert: ''});
    };
    this.updateEvents(undefined, undefined, 32);
  };

  updateEvents = (lat, lon, page) => {
    getEvents(lat, lon, page).then(data => {
      if (this._isMounted) {
        const {city, events} = data;
        this.setState({city, events});
      }
    });
  };

  getData = () => {
    const next7Days = [];
    const currentDate = moment();
    // Loop 7 times for each day
    for (let i = 0; i < 7; i++) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const n = this.countEventsOnDate(dateString);
      next7Days.push({date: dateString, number: n});
    }
    return next7Days;
  };

  countEventsOnDate = (date) => {
    let n = 0; // Number of events
    this.state.events.forEach((event) => {
      if(event.local_date === date) n++;
    });
    return n;
  };

  componentWillUnmount() {
    this._isMounted = false;
  };
  
  render() {
    return (
      <div className="App">
        <Header />
        <Container className="main-container">
          <h1>test2</h1>
          <CitySearch updateEvents={this.updateEvents}/>
          { this.state.alert ? <InfoAlert text={this.state.alert} /> : '' }
          
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{top: 20, right: 20, bottom: 20, left: 20}}>
              <CartesianGrid />
              <XAxis type="category" dataKey="date" />
              <YAxis type="number" dataKey="number" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>

          <EventList events={this.state.events} />
          <NumberOfEvents updateEvents={this.updateEvents}/>
        </Container>
      </div>
    );
  } 
};

export default App;
